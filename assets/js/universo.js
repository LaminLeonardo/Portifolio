/* ===== UNIVERSO — buraco negro em <canvas> puro, sem bibliotecas =====
   Estrelas com desvio gravitacional, disco de acreção com lado mais brilhante,
   arco de luz por cima da sombra, partículas que caem em espiral, ondas de choque
   e brilho que aumenta quando o buraco negro "come" partículas.
   Forte só no hero: ao rolar ("modo leitura") ele vai para a borda, encolhe e acalma.
   API: Universo.burst(x, y, quantidade, força), Universo.feed(energia),
        Universo.pause(), Universo.resume(), Universo.isPaused(),
        Universo.position() → {x, y, r} na janela, Universo.stats() → {bits, p} */
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
  var MAX_BITS = 300;
  var BIT_LIFE = 150;  // quadros a 60 fps ≈ 2,5 s
  var p = 0;           // 0 no hero, 1 quando o hero saiu da tela (suavizado)

  function resize(){
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    var wasSmall = small;
    small = W < 860;
    cv.width = Math.round(W*dpr); cv.height = Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    bh.r = Math.max(34, Math.min(W,H) * (small ? 0.11 : 0.085));
    if(!bh.x){ p = targetP(); var t = targetPos(); bh.x = t.x; bh.y = t.y; }
    if(!disk.length || wasSmall !== small) build(); else buildStars();
  }

  function targetP(){
    return Math.min(1, Math.max(0, (scrollY - 0.6*H)/(0.6*H)));
  }
  // no hero: à direita (topo, centralizado, no celular); fora dele: borda direita (topo no celular), metade fora
  function targetPos(){
    var R = bh.r*(1 - 0.25*p);
    var x0 = small ? W*0.5 : W*0.7, y0 = small ? H*0.26 : H*0.5;
    var x1 = small ? W*0.5 : W + R*0.2, y1 = small ? -R*0.2 : H*0.55;
    var par = 1 - p;
    return {
      x: x0 + (x1 - x0)*p + (mouse.x - W/2)*0.015*par,
      y: y0 + (y1 - y0)*p + (mouse.y - H/2)*0.015*par
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
    if(p > 0.5) n = Math.round(n/2);
    force = force || 1.4;
    for(var i=0;i<n && bits.length<MAX_BITS;i++){
      var ang = Math.random()*Math.PI*2, sp = (Math.random()*2 + 0.5)*force;
      bits.push({x:x, y:y, vx:Math.cos(ang)*sp, vy:Math.sin(ang)*sp, h:20 + Math.random()*30, life:1});
    }
    waves.push({x:x, y:y, r:4, a:0.8});
    if(paused) draw(performance.now(), 0, 0);
  }
  function feed(e){
    bh.energy = Math.min(2.5, bh.energy + (e || 0.3));
    if(paused) draw(performance.now(), 0, 0);
  }

  function drawDisk(R, front, glow){
    var tilt = 0.24;
    for(var i=0;i<disk.length;i++){
      var d = disk[i];
      var sn = Math.sin(d.a), cs = Math.cos(d.a);
      if((sn > 0) !== front) continue;
      var rr = R*(1.55 + d.k*2.6);
      var x = bh.x + cs*rr, y = bh.y + sn*rr*tilt;
      var dop = 1 + 0.7*(-cs); // efeito Doppler: o lado que vem em nossa direção brilha mais
      var al = Math.min(1, (0.3 + (1-d.k)*0.6)*dop*(1 + bh.energy*0.8))*glow;
      ctx.fillStyle = 'hsla(' + (18 + (1-d.k)*30) + ',100%,' + (60 + (1-d.k)*30) + '%,' + al + ')';
      ctx.fillRect(x, y, d.s, d.s);
    }
  }

  // dt: tempo de animação (já com calma/velocidade); rt: tempo real (vida das partículas).
  // dt = rt = 0 desenha um quadro parado (usado quando o universo está pausado).
  function draw(now, dt, rt){
    var i, d;
    var ease = Math.min(1, 0.06*(rt || 1));
    p += (targetP() - p)*ease;
    var tp = targetPos();
    bh.x += (tp.x - bh.x)*ease;
    bh.y += (tp.y - bh.y)*ease;
    bh.energy *= Math.pow(0.985, dt);

    var glow = 1 - 0.6*p;               // brilho do disco e do halo: 100% → 40%
    var starA = 1 - 0.55*p;             // estrelas: 100% → 45%
    var R = bh.r*(1 - 0.25*p)*(1 + bh.energy*0.12);  // raio: 100% → 75%
    var spin = (0.6 + bh.energy*1.6)*dt;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(3,4,10,' + (0.42 + 0.18*p) + ')';  // rastro: 0,42 → 0,6
    ctx.fillRect(0, 0, W, H);

    // estrelas com lente gravitacional
    for(i=0;i<stars.length;i++){
      var s = stars[i];
      s.a += 0.0004*dt*(bh.r*4/s.d);
      s.d -= 0.02*dt*(bh.r/s.d)*40;
      if(s.d < R*1.2){ s.d = Math.max(W,H)*0.85; s.a = Math.random()*Math.PI*2; }
      if(p > 0.5 && s.z <= 0.35) continue;
      var dl = s.d + R*R*2.4/s.d, x = bh.x + Math.cos(s.a)*dl, y = bh.y + Math.sin(s.a)*dl;
      if(x < -5 || x > W+5 || y < -5 || y > H+5) continue;
      var tw = 0.55 + 0.45*Math.sin(now*0.002*calm + s.tw);
      ctx.fillStyle = 'rgba(220,228,255,' + (0.25 + s.z*0.6)*tw*starA + ')';
      var sz = s.z > 0.9 ? 1.8 : 1.1;
      ctx.fillRect(x, y, sz, sz);
    }

    // halo
    var g = ctx.createRadialGradient(bh.x, bh.y, R*0.8, bh.x, bh.y, R*(6 + bh.energy*3));
    g.addColorStop(0, 'rgba(255,140,60,' + (0.22 + bh.energy*0.25)*glow + ')');
    g.addColorStop(0.3, 'rgba(255,90,40,' + 0.06*glow + ')');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // rotação do disco (mais rápido perto do horizonte)
    for(i=0;i<disk.length;i++){
      d = disk[i];
      d.a += spin*0.018*Math.pow(1.6/(1.55 + d.k*2.6), 1.5);
    }

    ctx.globalCompositeOperation = 'lighter';
    drawDisk(R, false, glow);

    // imagem do disco desviada por cima e por baixo da sombra (arco de luz)
    for(i=0;i<disk.length;i++){
      d = disk[i];
      var rr2 = R*(1.08 + d.k*0.5), sn = Math.sin(d.a), cs = Math.cos(d.a);
      var al2 = (0.22 + (1-d.k)*0.45)*(1 + bh.energy)*glow;
      ctx.fillStyle = 'hsla(' + (25 + (1-d.k)*25) + ',100%,70%,' + (sn < 0 ? al2 : al2*0.45) + ')';
      ctx.fillRect(bh.x + cs*rr2, bh.y + sn*rr2, 1.5, 1.5);
    }

    // sombra e anel de fótons
    ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath(); ctx.arc(bh.x, bh.y, R, 0, Math.PI*2); ctx.fillStyle = '#000'; ctx.fill();
    ctx.lineWidth = 1.6;
    ctx.strokeStyle = 'rgba(255,210,150,' + (0.55 + bh.energy*0.4)*(0.5 + 0.5*glow) + ')';
    ctx.beginPath(); ctx.arc(bh.x, bh.y, R*1.03, 0, Math.PI*2); ctx.stroke();

    ctx.globalCompositeOperation = 'lighter';
    drawDisk(R, true, glow);

    // partículas caindo em espiral; somem sozinhas em ~2,5 s
    for(i=bits.length-1;i>=0;i--){
      var b = bits[i];
      b.life -= rt/BIT_LIFE;
      if(b.life <= 0){ bits.splice(i,1); continue; }
      var dx = bh.x - b.x, dy = bh.y - b.y, d2 = dx*dx + dy*dy, dd = Math.sqrt(d2) || 1;
      var f = Math.min(2.2, 2600/d2*R/60)*dt;
      b.vx += dx/dd*f - dy/dd*f*0.55; b.vy += dy/dd*f + dx/dd*f*0.55;
      b.vx *= Math.pow(0.992, dt); b.vy *= Math.pow(0.992, dt);
      b.x += b.vx*dt; b.y += b.vy*dt;
      if(dd < R){ bits.splice(i,1); bh.energy = Math.min(2.5, bh.energy + 0.025); continue; }
      ctx.fillStyle = 'hsla(' + b.h + ',100%,70%,' + (0.9*b.life) + ')';
      ctx.fillRect(b.x, b.y, 2, 2);
    }

    // ondas de choque
    ctx.globalCompositeOperation = 'source-over';
    for(i=waves.length-1;i>=0;i--){
      var w = waves[i];
      w.r += 4*dt; w.a -= 0.018*(rt || 0);
      if(w.a <= 0){ waves.splice(i,1); continue; }
      ctx.strokeStyle = 'rgba(255,190,120,' + w.a + ')';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(w.x, w.y, w.r, 0, Math.PI*2); ctx.stroke();
    }
  }

  var t0 = 0;
  function frame(now){
    if(paused){ running = false; return; }
    var rt = Math.min(40, now - t0)/16.67;   // tempo real, em quadros de 60 fps
    var dt = rt*calm*(1 - 0.4*p);            // velocidade: 100% → 60% fora do hero
    t0 = now;
    draw(now, dt, rt);
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
    isPaused: function(){ return paused; },
    position: function(){ return {x:bh.x, y:bh.y, r:bh.r*(1 - 0.25*p)*(1 + bh.energy*0.12)}; },
    stats: function(){ return {bits:bits.length, p:p}; }
  };
})();
