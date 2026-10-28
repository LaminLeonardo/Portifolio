  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== i18n — PT/EN ===== */
  const TRANSLATIONS = {
    navSobre:{pt:'Sobre',en:'About'}, navProjetos:{pt:'Projetos',en:'Projects'}, navContato:{pt:'Contato',en:'Contact'},
    navRecruiterOn:{pt:'Modo recrutador',en:'Recruiter mode'}, navRecruiterOff:{pt:'Modo galeria',en:'Gallery mode'},
    heroEyebrow:{pt:'Acervo pessoal — Peça N°00',en:'Personal collection — Piece N°00'},
    heroRole:{pt:'Desenvolvedor Backend .NET · Integração de Sistemas · Automação',en:'Backend .NET Developer · Systems Integration · Automation'},
    heroPlate:{pt:'Entrada da galeria',en:'Gallery entrance'},
    heroAvailable:{pt:'Aberto a oportunidades — .NET Júnior',en:'Open to opportunities — Junior .NET'},
    heroCta:{pt:'Ver projetos ↓',en:'View projects ↓'},
    heroScroll:{pt:'Role para entrar',en:'Scroll to enter'},
    heroPhotoTag:{pt:'Leonardo Lamin',en:'Leonardo Lamin'},
    soPeca:{pt:'Peça N°01',en:'Piece N°01'}, soFicha:{pt:'— Ficha do acervo',en:'— Collection record'},
    soHeading:{pt:'Sobre o <span>curador</span>',en:'About the <span>curator</span>'},
    soP1:{pt:'Desenvolvedor backend com experiência em produção em <strong>C# (.NET)</strong>, atuando no desenvolvimento de softwares, APIs REST e automações com <strong>impacto mensurável</strong>: reduziu em ~93% o tempo de provisionamento de usuários SaaS, expandiu acesso a dados de 4 para 20 usuários e eliminou gargalos manuais em ambiente com mais de 1.000 clientes.',en:'Backend developer with production experience in <strong>C# (.NET)</strong>, working on software, REST APIs and automation with <strong>measurable impact</strong>: reduced SaaS user provisioning time by ~93%, expanded data access from 4 to 20 users, and eliminated manual bottlenecks in an environment with 1,000+ clients.'},
    soP2:{pt:'Estudante de <strong>Engenharia de Software</strong> na Universidade Católica de Santa Catarina, conciliando teoria acadêmica com problemas reais de produção: encoding, concorrência, logs, deploy.',en:'<strong>Software Engineering</strong> student at Universidade Católica de Santa Catarina, balancing academic theory with real production problems: encoding, concurrency, logs, deployment.'},
    soP3:{pt:'Prefere depurar com base em evidência — <strong>log antes de suposição</strong> — e entregar em ciclos curtos e incrementais.',en:'Prefers evidence-based debugging — <strong>logs before assumptions</strong> — and delivering in short, incremental cycles.'},
    soL1:{pt:'Atuação',en:'Role'}, soV1:{pt:'Backend C# (.NET) · APIs REST · Integração de sistemas',en:'Backend C# (.NET) · REST APIs · Systems integration'},
    soLExpFe:{pt:'Experiência · Front-end',en:'Experience · Front-end'},
    soLExpBe:{pt:'Experiência · .NET',en:'Experience · .NET'},
    soL2:{pt:'Formação',en:'Education'}, soV2:{pt:'Eng. de Software — UNISC (em curso) · Téc. em Dev. de Software — SENAI',en:'Software Eng. — UNISC (in progress) · Software Dev. Technician — SENAI'},
    soL3:{pt:'Metodologia',en:'Approach'}, soV3:{pt:'Debug orientado a log · entrega incremental',en:'Log-driven debugging · incremental delivery'},
    soLIdi:{pt:'Idiomas',en:'Languages'}, soVIdi:{pt:'Português (nativo) · Inglês (intermediário — leitura técnica e conversação)',en:'Portuguese (native) · English (intermediate — technical reading and conversation)'},
    soL4:{pt:'Stack',en:'Stack'},
    s3Eyebrow:{pt:'Você entrou no sistema',en:'You entered the system'}, s3Heading:{pt:'Galeria de <span>projetos</span>',en:'Project <span>gallery</span>'},
    s3Navhint:{pt:'arraste ou role para o lado',en:'drag or scroll sideways'},
    c1Cat:{pt:'Sistemas corporativos',en:'Enterprise systems'}, c1Title:{pt:'Provisionamento automatizado de usuários SaaS',en:'Automated SaaS user provisioning'},
    c1Desc:{pt:'Software MVC com microsserviços, integração nativa ao Active Directory e Windows Forms (.NET), reduzindo o tempo de provisionamento de 30–45 min para 7 min — beneficiando 25–30 usuários por mês.',en:'MVC software with microservices, native Active Directory integration and Windows Forms (.NET), cutting provisioning time from 30–45 min to 7 min — benefiting 25–30 users per month.'},
    c1M1:{pt:'redução no tempo',en:'time reduction'}, c1M2:{pt:'usuários/mês beneficiados',en:'users/month benefited'},
    c2Cat:{pt:'Automação & BI',en:'Automation & BI'}, c2Title:{pt:'Automação de pipeline de KPIs',en:'KPI pipeline automation'},
    c2Desc:{pt:'Automatizei em C# o envio de dados para KPIs de atendimento, eliminando 100% da entrada manual e entregando dashboards mensais em Power BI para a diretoria.',en:'Automated KPI data pipeline in C#, eliminating 100% of manual data entry and delivering monthly Power BI dashboards to leadership.'},
    c2M1:{pt:'manual eliminado',en:'manual entry eliminated'}, c2M2:{pt:'consistência',en:'consistency'},
    tagPowerBI:{pt:'Power BI',en:'Power BI'},
    c3Cat:{pt:'Projeto pessoal',en:'Personal project'}, c3Title:{pt:'Rede Social — Comunidade Web',en:'Social Network — Web Community'},
    c3Desc:{pt:'Plataforma de rede social construída do zero: autenticação, feed de publicações e interações, com arquitetura MVC em Node.js e EJS.',en:'Social network platform built from scratch: authentication, post feed and user interactions, with MVC architecture in Node.js and EJS.'},
    c3M1:{pt:'desenvolvido do zero',en:'built from scratch'}, c3M2:{pt:'arquitetura',en:'architecture'},
    tagSequelize:{pt:'Sequelize ORM',en:'Sequelize ORM'},
    c5Cat:{pt:'Sistemas de gestão',en:'Management systems'}, c5Title:{pt:'Sistema de Gestão Comercial',en:'Commercial Management System'},
    c5Desc:{pt:'Sistema completo para comércio: comandas e pedidos, controle de estoque, fluxo de caixa, leitura de código de barras e relatórios gerenciais, integrado a um banco MySQL centralizado.',en:'Complete system for retail: orders/tabs, stock control, cash flow, barcode scanning and management reports, integrated with a centralized MySQL database.'},
    c5M1:{pt:'módulos integrados',en:'integrated modules'}, c5M2:{pt:'dados centralizados',en:'centralized data'},
    c4Cat:{pt:'Front-end',en:'Front-end'}, c4Title:{pt:'Este site',en:'This website'},
    c4Desc:{pt:'O próprio portfólio: uma peça viva de front-end, construída do zero em HTML, CSS e JavaScript puro — sem frameworks.',en:'The portfolio itself: a living front-end piece, built from scratch in vanilla HTML, CSS and JavaScript — no frameworks.'},
    c4M1:{pt:'frameworks',en:'frameworks'}, c4M2:{pt:'idiomas (PT/EN)',en:'languages (PT/EN)'},
    s4Eyebrow:{pt:'Peça N°07 — Saída da galeria',en:'Piece N°07 — Gallery exit'}, s4Heading:{pt:'Vamos <span>conversar</span>',en:"Let's <span>talk</span>"},
    s4Lead:{pt:'Sem formulário, sem fricção. Escolha o canal e fale direto comigo.',en:'No forms, no friction. Pick a channel and reach out directly.'},
    lblEmail:{pt:'E-mail',en:'Email'}, lblWpp:{pt:'WhatsApp',en:'WhatsApp'}, lblDoc:{pt:'Documento',en:'Document'}, lblCv:{pt:'Baixar currículo (PDF)',en:'Download résumé (PDF)'}, lblCode:{pt:'Código-fonte',en:'Source code'},
    qrLabel:{pt:'escaneie para o LinkedIn',en:'scan for LinkedIn'},
    s4Exit:{pt:'Fim do acervo · <b>obrigado pela visita</b>',en:'End of collection · <b>thanks for visiting</b>'},
    hudOnline:{pt:'sistema online',en:'system online'}, hudUptimeLbl:{pt:'uptime',en:'uptime'}, hudLocalLbl:{pt:'local',en:'local'},
    rvRole:{pt:'Desenvolvedor Full-Stack · Front-end há 3 anos · .NET há 1 ano+ — UNISC',en:'Full-Stack Developer · 3y front-end · 1y+ .NET — UNISC'},
    rvAboutH:{pt:'Sobre',en:'About'},
    rvAboutP:{pt:'Desenvolvedor Full-Stack com 3 anos de front-end (HTML/CSS/JS) e mais de 1 ano com .NET, atualmente focado em sistemas de provisionamento automatizado — orquestração de serviços, integração com Active Directory e bancos relacionais. Debug orientado a evidência (log antes de suposição), entrega em ciclos curtos.',en:'Full-Stack developer with 3 years of front-end (HTML/CSS/JS) and 1+ year with .NET, currently focused on automated provisioning systems — service orchestration, Active Directory integration and relational databases. Evidence-based debugging (logs before assumptions), short delivery cycles.'},
    rvProjH:{pt:'Projetos',en:'Projects'},
    rvP1:{pt:'C# / .NET · ASP.NET MVC · WinForms · Active Directory — redução de ~84% no tempo de provisionamento (30-45min → 7min), +400% de expansão no acesso a dados.',en:'C# / .NET · ASP.NET MVC · WinForms · Active Directory — ~84% reduction in provisioning time (30-45min → 7min), +400% increase in data access.'},
    rvP2:{pt:'C# · SQL · Power BI — eliminei 100% da entrada manual de dados, dashboards mensais para diretoria.',en:'C# · SQL · Power BI — eliminated 100% of manual data entry, monthly dashboards for leadership.'},
    rvP3:{pt:'Node.js · EJS · Sequelize ORM · MySQL — plataforma completa construída do zero, arquitetura MVC.',en:'Node.js · EJS · Sequelize ORM · MySQL — full platform built from scratch, MVC architecture.'},
    rvCv:{pt:'Currículo (PDF)',en:'Résumé (PDF)'}
  };
  let currentLang = 'pt';
  function applyLang(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(TRANSLATIONS[key]) el.innerHTML = TRANSLATIONS[key][lang];
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }
  function toggleLang(){
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    document.getElementById('langToggle').textContent = currentLang === 'pt' ? 'EN' : 'PT';
    const rBtn = document.getElementById('recruiterToggle');
    const inRecruiter = document.body.classList.contains('recruiter-mode');
    rBtn.setAttribute('data-i18n', inRecruiter ? 'navRecruiterOff' : 'navRecruiterOn');
    applyLang(currentLang);
    const roleEl = document.getElementById('typedRole');
    if(roleEl) roleEl.textContent = TRANSLATIONS.heroRole[currentLang];
    updateExperience();
  }
  if(!reduced){
    const stage1 = document.getElementById('stage1');
    const corridor1 = document.getElementById('corridor1');
    stage1.addEventListener('mousemove', (e)=>{
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      corridor1.style.transform = `rotateY(${x*6}deg) rotateX(${-y*4}deg)`;
    });
    stage1.addEventListener('mouseleave', ()=>{ corridor1.style.transform = 'rotateY(0deg) rotateX(0deg)'; });

    document.querySelectorAll('[data-tilt]').forEach(card=>{
      card.addEventListener('mousemove', (e)=>{
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        card.style.transform = `rotateY(${x*8}deg) rotateX(${-y*8}deg) translateZ(4px)`;
      });
      card.addEventListener('mouseleave', ()=>{ card.style.transform = 'rotateY(0) rotateX(0)'; });
    });
  }

  /* transição contínua de cor da luz ambiente ao rolar */
  const hueStops = [40, 40, 175, 320, 320]; // amber -> amber -> cyan -> magenta -> magenta
  let ticking = false;
  function updateAmbient(){
    const max = document.body.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    const seg = progress * (hueStops.length - 1);
    const i = Math.min(hueStops.length - 2, Math.floor(seg));
    const t = seg - i;
    const hue = hueStops[i] + (hueStops[i+1] - hueStops[i]) * t;
    document.documentElement.style.setProperty('--accent-h', hue.toFixed(1));
    document.getElementById('navprogress').style.width = (progress*100).toFixed(1) + '%';
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(!ticking){ requestAnimationFrame(updateAmbient); ticking = true; }
  });
  updateAmbient();

  (function typeRole(){
    const el = document.getElementById('typedRole');
    if(!el) return;
    const text = TRANSLATIONS.heroRole[currentLang];
    if(reduced){ el.textContent = text; return; }
    let i = 0;
    (function step(){
      el.textContent = text.slice(0, i);
      i++;
      if(i <= text.length) setTimeout(step, 32);
    })();
  })();

  function tickClock(){
    const el = document.getElementById('hudclock');
    if(el) el.textContent = new Date().toLocaleTimeString('pt-BR', {hour12:false});
  }
  tickClock();
  setInterval(tickClock, 1000);

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      document.querySelectorAll('.case-detail.active').forEach(d=>{
        d.classList.remove('active'); document.body.style.overflow='';
      });
      closeTerm();
    }
    if((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey){
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if(tag !== 'INPUT' && tag !== 'TEXTAREA') openTerm();
    }
  });

  const termLines = [
    {t:'info', m:'09:14:02 sessão iniciada — carregando acervo...'},
    {t:'ok',   m:'provisionamento SaaS: 30-45min → 7min (~84% de redução)'},
    {t:'ok',   m:'acesso a dados expandido: 4 → 20 usuários (+400%)'},
    {t:'ok',   m:'dashboard tempo real: 7-15min → instantâneo (1000+ clientes)'},
    {t:'ok',   m:'pipeline de KPIs: 100% da entrada manual eliminada'},
    {t:'info', m:'IdentityNotMappedException investigada — causa operacional confirmada, não bug'},
    {t:'info', m:'uptime do sistema: 99.98%'},
    {t:'info', m:'--- stack deste site ---'},
    {t:'ok',   m:'HTML5 · CSS3 · JavaScript vanilla — 0 frameworks'},
    {t:'ok',   m:'View Transitions API · Intersection Observer'},
    {t:'ok',   m:'i18n PT/EN escrito do zero'},
    {t:'ready',m:'pronto. pressione ESC para sair.'}
  ];
  let termTyped = false;
  function openTerm(){
    document.getElementById('termOverlay').classList.add('active');
    if(termTyped) return;
    termTyped = true;
    const body = document.getElementById('termBody');
    let i = 0;
    (function next(){
      if(i >= termLines.length) return;
      const l = termLines[i];
      const row = document.createElement('div');
      row.className = l.t;
      row.textContent = '$ ' + l.m;
      body.appendChild(row);
      i++;
      setTimeout(next, 260);
    })();
  }
  function closeTerm(){
    document.getElementById('termOverlay').classList.remove('active');
  }

  function toggleRecruiter(){
    const on = document.body.classList.toggle('recruiter-mode');
    const btn = document.getElementById('recruiterToggle');
    btn.setAttribute('data-i18n', on ? 'navRecruiterOff' : 'navRecruiterOn');
    btn.textContent = TRANSLATIONS[on ? 'navRecruiterOff' : 'navRecruiterOn'][currentLang];
    window.scrollTo(0,0);
  }

  window.addEventListener('load', ()=>{
    setTimeout(()=>{ document.getElementById('loader').classList.add('hidden'); }, 400);
  });


  if(window.QRCode){
    new QRCode(document.getElementById('qrcode'), {
      text: 'https://linkedin.com/in/leonardolamin',
      width: 108, height: 108,
      colorDark: '#05070A', colorLight: '#ffffff'
    });
  }

  const track = document.getElementById('s3track');
  track.addEventListener('wheel', (e)=>{
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
      const atStart = track.scrollLeft <= 0;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
      if((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)){
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }
  }, {passive:false});

  function openCase(id, cardEl){
    const detail = document.getElementById(id);
    const doOpen = ()=>{ detail.classList.add('active'); document.body.style.overflow='hidden'; };
    if(document.startViewTransition && !reduced && cardEl){
      cardEl.style.viewTransitionName = 'projmorph';
      detail.style.viewTransitionName = 'projmorph';
      const t = document.startViewTransition(doOpen);
      t.finished.finally(()=>{ cardEl.style.viewTransitionName=''; });
    } else { doOpen(); }
    history.replaceState(null, '', '#' + id);
  }
  function closeCase(id, evt){
    if(evt) evt.stopPropagation();
    const detail = document.getElementById(id);
    const doClose = ()=>{ detail.classList.remove('active'); document.body.style.overflow=''; };
    if(document.startViewTransition && !reduced){
      const t = document.startViewTransition(doClose);
      t.finished.finally(()=>{ detail.style.viewTransitionName=''; });
    } else { doClose(); }
    history.replaceState(null, '', '#projetos');
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    const hash = location.hash.replace('#','');
    if(['case1','case2','case3','case4','case5'].includes(hash)) openCase(hash, null);
  });

  function copyCaseLink(id, btn){
    const url = location.origin + location.pathname + '#' + id;
    navigator.clipboard.writeText(url).then(()=>{
      const original = btn.textContent;
      btn.textContent = '✓ Link copiado';
      setTimeout(()=>{ btn.textContent = original; }, 1800);
    });
  }

  function toggleCode(id, btn){
    const el = document.getElementById(id);
    const open = el.classList.toggle('open');
    btn.textContent = open ? '</> Ocultar trecho de código' : '</> Ver trecho de código';
  }

  const tltrack = document.getElementById('tltrack');
  if(tltrack){
    tltrack.addEventListener('wheel', (e)=>{
      if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
        const atStart = tltrack.scrollLeft <= 0;
        const atEnd = tltrack.scrollLeft >= tltrack.scrollWidth - tltrack.clientWidth - 1;
        if((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)){
          e.preventDefault();
          tltrack.scrollLeft += e.deltaY;
        }
      }
    }, {passive:false});

    const tlObs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, {threshold:0.5});
    tltrack.querySelectorAll('.tl-item').forEach(item=> tlObs.observe(item));
  }

  /* ===== CONTADOR DE EXPERIÊNCIA — calculado a partir da data de início ===== */
  const CAREER_START_FE = new Date('2023-02-01'); // front-end
  const CAREER_START_BE = new Date('2025-03-01'); // .NET — BMA Sistemas

  function formatSince(start){
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if(now.getDate() < start.getDate()) months--;
    months = Math.max(months, 0);
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    if(years === 0) return currentLang === 'pt' ? `${remMonths} meses` : `${remMonths} months`;
    if(remMonths === 0) return currentLang === 'pt' ? `${years} ano${years>1?'s':''}` : `${years} year${years>1?'s':''}`;
    return currentLang === 'pt' ? `${years} ano${years>1?'s':''} e ${remMonths} ${remMonths>1?'meses':'mês'}` : `${years}y ${remMonths}mo`;
  }
  function updateExperience(){
    const feEl = document.getElementById('expCounterFe');
    const beEl = document.getElementById('expCounterBe');
    if(feEl) feEl.textContent = formatSince(CAREER_START_FE);
    if(beEl) beEl.textContent = formatSince(CAREER_START_BE);
  }
  updateExperience();

  const diagPanel = document.getElementById('diagPanel');
  if(diagPanel){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          diagPanel.querySelectorAll('.diag-bar span').forEach(bar=>{
            bar.style.transition = 'width 1s cubic-bezier(.4,0,.2,1)';
            bar.style.width = bar.dataset.w + '%';
          });
          obs.disconnect();
        }
      });
    }, {threshold:0.4});
    obs.observe(diagPanel);
  }
