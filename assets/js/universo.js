/* ===== UNIVERSO — buraco negro em <canvas> puro, sem bibliotecas =====
   Estrelas com desvio gravitacional, disco de acreção com lado mais brilhante,
   arco de luz por cima da sombra, partículas que caem em espiral, ondas de choque
   e brilho que aumenta quando o buraco negro "come" partículas.
   API: Universo.burst(x, y, quantidade, força), Universo.feed(energia),
        Universo.pause(), Universo.resume(), Universo.isPaused() */
(function(){
  var cv = document.getElementById('space');
  if(!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d');

  // reduced motion: a animação continua, mas calma (~40% da velocidade). Nunca parada.
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var calm = mq.matches ? 0.4 : 1;
  if(mq.addEventListener) mq.addEventListener('change', function(e){ calm = e.matches ? 0.4 : 1; });

  var W = 0, H = 0, small = false, paused = false, running = false;
  var bh = {x:0, y:0, r:60, energy:0};
  var mouse = {x:innerWidth/2, y:innerHeight/2};
  var disk = [], stars = [], bits = [], waves = [];
  var MAX_BITS = 900;

  function resize(){
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    var wasSmall = small;
    small = W < 860;
    cv.width = Math.round(W*dpr); cv.height = Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    bh.r = Math.max(34, Math.min(W,H) * (small ? 0.11 : 0.085));
    if(!bh.x){ var t = targetPos(); bh.x = t.x; bh.y = t.y; }
    if(!disk.length || wasSmall !== small) build(); else buildStars();
  }

  // começa à direita no hero (no topo, centralizado, no celular) e vai ao centro ao rolar
  function targetPos(){
    var p = Math.min(1, scrollY / (H*0.9));
    var x0 = small ? W*0.5 : W*0.7, y0 = small ? H*0.26 : H*0.5;
    return {
      x: x0 + (W*0.5 - x0)*p + (mouse.x - W/2)*0.015,
      y: y0 + (H*0.5 - y0)*p + (mouse.y - H/2)*0.015
    };
  }

  function build(){
    disk = [];
    var nd = small ? 700 : 1400;
    for(var i=0;i<nd;i++){
      var k = Math.pow(Math.random(), 1.7);
      disk.push({a:Math.random()*Math.PI*2, k:k, s:Math.random()*1.6+0.8});
    }
    buildStars();
  }
  function buildStars(){
    stars = [];
    var ns = small ? 220 : 420;
    for(var i=0;i<ns;i++){
      stars.push({a:Math.random()*Math.PI*2, d:Math.random()*Math.max(W,H)*0.8 + bh.r*2, z:Math.random(), tw:Math.random()*6});
    }
  }

  function burst(x, y, n, force){
    n = Math.max(0, Math.min(n || 40, 200));
    force = force || 1.4;
    for(var i=0;i<n && bits.length<MAX_BITS;i++){
      var ang = Math.random()*Math.PI*2, sp = (Math.random()*2 + 0.5)*force;
      bits.push({x:x, y:y, vx:Math.cos(ang)*sp, vy:Math.sin(ang)*sp, h:20 + Math.random()*30});
    }
    waves.push({x:x, y:y, r:4, a:0.8});
    if(paused) draw(performance.now(), 0);
  }
  function feed(e){
    bh.energy = Math.min(2.5, bh.energy + (e || 0.3));
    if(paused) draw(performance.now(), 0);
  }

  function drawDisk(R, front){
    var tilt = 0.24;
    for(var i=0;i<disk.length;i++){
      var p = disk[i];
      var sn = Math.sin(p.a), cs = Math.cos(p.a);
      if((sn > 0) !== front) continue;
      var rr = R*(1.55 + p.k*2.6);
      var x = bh.x + cs*rr, y = bh.y + sn*rr*tilt;
      var dop = 1 + 0.7*(-cs); // efeito Doppler: o lado que vem em nossa direção brilha mais
      var al = Math.min(1, (0.3 + (1-p.k)*0.6)*dop*(1 + bh.energy*0.8));
      ctx.fillStyle = 'hsla(' + (18 + (1-p.k)*30) + ',100%,' + (60 + (1-p.k)*30) + '%,' + al + ')';
      ctx.fillRect(x, y, p.s, p.s);
    }
  }

  // dt = 0 desenha um quadro parado (usado quando o universo está pausado)
  function draw(now, dt){
    var i, p;
    var tp = targetPos();
    bh.x += (tp.x - bh.x)*Math.min(1, 0.06*(dt || 1));
    bh.y += (tp.y - bh.y)*Math.min(1, 0.06*(dt || 1));
    bh.energy *= Math.pow(0.985, dt);
    var R = bh.r*(1 + bh.energy*0.12);
    var spin = (0.6 + bh.energy*1.6)*dt;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(3,4,10,0.42)';
    ctx.fillRect(0, 0, W, H);

    // estrelas com lente gravitacional
    for(i=0;i<stars.length;i++){
      var s = stars[i];
      s.a += 0.0004*dt*(bh.r*4/s.d);
      s.d -= 0.02*dt*(bh.r/s.d)*40;
      if(s.d < R*1.2){ s.d = Math.max(W,H)*0.85; s.a = Math.random()*Math.PI*2; }
      var dl = s.d + R*R*2.4/s.d, x = bh.x + Math.cos(s.a)*dl, y = bh.y + Math.sin(s.a)*dl;
      if(x < -5 || x > W+5 || y < -5 || y > H+5) continue;
      var tw = 0.55 + 0.45*Math.sin(now*0.002*calm + s.tw);
      ctx.fillStyle = 'rgba(220,228,255,' + (0.25 + s.z*0.6)*tw + ')';
      var sz = s.z > 0.9 ? 1.8 : 1.1;
      ctx.fillRect(x, y, sz, sz);
    }

    // halo
    var g = ctx.createRadialGradient(bh.x, bh.y, R*0.8, bh.x, bh.y, R*(6 + bh.energy*3));
    g.addColorStop(0, 'rgba(255,140,60,' + (0.22 + bh.energy*0.25) + ')');
    g.addColorStop(0.3, 'rgba(255,90,40,0.06)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // rotação do disco (mais rápido perto do horizonte)
    for(i=0;i<disk.length;i++){
      p = disk[i];
      p.a += spin*0.018*Math.pow(R*1.6/(R*(1.55 + p.k*2.6)), 1.5);
    }

    ctx.globalCompositeOperation = 'lighter';
    drawDisk(R, false);

    // imagem do disco desviada por cima e por baixo da sombra (arco de luz)
    for(i=0;i<disk.length;i++){
      p = disk[i];
      var rr2 = R*(1.08 + p.k*0.5), sn = Math.sin(p.a), cs = Math.cos(p.a);
      var al2 = (0.22 + (1-p.k)*0.45)*(1 + bh.energy);
      ctx.fillStyle = 'hsla(' + (25 + (1-p.k)*25) + ',100%,70%,' + (sn < 0 ? al2 : al2*0.45) + ')';
      ctx.fillRect(bh.x + cs*rr2, bh.y + sn*rr2, 1.5, 1.5);
    }

    // sombra e anel de fótons
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath(); ctx.arc(bh.x, bh.y, R, 0, Math.PI*2); ctx.fillStyle = '#000'; ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = 'rgba(255,210,150,' + (0.55 + bh.energy*0.4) + ')';
    ctx.beginPath(); ctx.arc(bh.x, bh.y, R*1.03, 0, Math.PI*2); ctx.stroke();

    ctx.globalCompositeOperation = 'lighter';
    drawDisk(R, true);

    // partículas caindo em espiral
    for(i=bits.length-1;i>=0;i--){
      var b = bits[i];
      var dx = bh.x - b.x, dy = bh.y - b.y, d2 = dx*dx + dy*dy, d = Math.sqrt(d2) || 1;
      var f = Math.min(2.2, 2600/d2*R/60)*dt;
      b.vx += dx/d*f - dy/d*f*0.55; b.vy += dy/d*f + dx/d*f*0.55;
      b.vx *= Math.pow(0.992, dt); b.vy *= Math.pow(0.992, dt);
      b.x += b.vx*dt; b.y += b.vy*dt;
      if(d < R){ bits.splice(i,1); bh.energy = Math.min(2.5, bh.energy + 0.025); continue; }
      ctx.fillStyle = 'hsla(' + b.h + ',100%,70%,0.9)';
      ctx.fillRect(b.x, b.y, 2, 2);
    }

    // ondas de choque
    ctx.globalCompositeOperation = 'source-over';
    for(i=waves.length-1;i>=0;i--){
      var w = waves[i];
      w.r += 4*dt; w.a -= 0.018*dt;
      if(w.a <= 0){ waves.splice(i,1); continue; }
      ctx.strokeStyle = 'rgba(255,190,120,' + w.a + ')';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(w.x, w.y, w.r, 0, Math.PI*2); ctx.stroke();
    }
  }

  var t0 = 0;
  function frame(now){
    if(paused){ running = false; return; }
    var dt = Math.min(40, now - t0)/16.67*calm;
    t0 = now;
    draw(now, dt);
    requestAnimationFrame(frame);
  }
  function start(){
    if(running || paused) return;
    running = true;
    t0 = performance.now();
    requestAnimationFrame(frame);
  }

  addEventListener('resize', resize);
  addEventListener('pointermove', function(e){ mouse.x = e.clientX; mouse.y = e.clientY; }, {passive:true});
  resize();
  start();

  window.Universo = {
    burst: burst,
    feed: feed,
    pause: function(){ paused = true; },
    resume: function(){ paused = false; start(); },
    isPaused: function(){ return paused; }
  };
})();
