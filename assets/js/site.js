/* ===== SITE — interação (i18n, navegação, órbitas, contadores) =====
   O canvas fica em universo.js e é controlado pela API window.Universo. */
(function(){
  const U = window.Universo || { burst(){}, feed(){}, pause(){}, resume(){}, isPaused(){ return false; } };

  /* ===== i18n — PT/EN ===== */
  const TRANSLATIONS = {
    skip:{pt:'Pular para o conteúdo',en:'Skip to content'},
    navAria:{pt:'Seções',en:'Sections'},
    navSobre:{pt:'Sobre',en:'About'}, navProjetos:{pt:'Projetos',en:'Projects'}, navStack:{pt:'Stack',en:'Stack'}, navContato:{pt:'Contato',en:'Contact'},
    navPause:{pt:'Pausar universo',en:'Pause universe'}, navResume:{pt:'Retomar universo',en:'Resume universe'},
    heroEyebrow:{pt:'Backend .NET · Joinville, SC',en:'Backend .NET · Joinville, Brazil'},
    heroRole:{pt:'desenvolvedor .NET',en:'.NET developer'},
    heroLead:{pt:'Processos manuais entram, <b>sistemas automatizados saem</b>. Construo provisionamento, APIs REST e integrações com C#, .NET e Active Directory na BMA Sistemas.',en:'Manual processes go in, <b>automated systems come out</b>. I build provisioning, REST APIs and integrations with C#, .NET and Active Directory at BMA Sistemas.'},
    heroAvailable:{pt:'Aberto a oportunidades — .NET Júnior',en:'Open to opportunities — Junior .NET'},
    heroCta:{pt:'Ver projetos',en:'View projects'},
    heroCv:{pt:'Baixar currículo',en:'Download résumé'},
    heroHint:{pt:'clique em qualquer lugar do espaço para alimentar o buraco negro',en:'click anywhere in space to feed the black hole'},
    soHeading:{pt:'Perto do centro, onde as coisas acontecem',en:'Close to the center, where things happen'},
    soP1:{pt:'Sou desenvolvedor na <b>BMA Sistemas</b>, onde construo e mantenho sistemas de provisionamento automatizado: orquestração entre serviços, integração com Active Directory e bancos relacionais.',en:'I am a developer at <b>BMA Sistemas</b>, where I build and maintain automated provisioning systems: service orchestration, Active Directory integration and relational databases.'},
    soP2:{pt:'Estudo <b>Engenharia de Software</b> na Universidade Católica de Santa Catarina. Antes disso, passei dois anos no suporte da SZ Soluções, automatizando KPIs em C# e montando dashboards para a diretoria.',en:'I study <b>Software Engineering</b> at Universidade Católica de Santa Catarina. Before that, I spent two years in support at SZ Soluções, automating KPIs in C# and building dashboards for leadership.'},
    soP3:{pt:'Depuro com evidência, olhando o log antes de supor, e entrego em ciclos curtos. Procuro uma vaga <b>.NET Júnior</b> com foco em boas práticas e escalabilidade.',en:'I debug with evidence, reading the logs before assuming, and deliver in short cycles. I am looking for a <b>Junior .NET</b> role focused on good practices and scalability.'},
    photoAlt:{pt:'Foto de Leonardo Lamin',en:'Photo of Leonardo Lamin'},
    soLExpFe:{pt:'Experiência · Front-end',en:'Experience · Front-end'},
    soLExpBe:{pt:'Experiência · .NET',en:'Experience · .NET'},
    soL2:{pt:'Formação',en:'Education'}, soV2:{pt:'Eng. de Software — UNISC (em curso) · Téc. em Dev. de Software — SENAI',en:'Software Eng. — UNISC (in progress) · Software Dev. Technician — SENAI'},
    soLIdi:{pt:'Idiomas',en:'Languages'}, soVIdi:{pt:'Português (nativo) · Inglês (intermediário)',en:'Portuguese (native) · English (intermediate)'},
    soLStatus:{pt:'Status',en:'Status'}, soVStatus:{pt:'aberto a vagas',en:'open to roles'},
    m1:{pt:'no tempo de provisionar usuários SaaS',en:'in SaaS user provisioning time'},
    m2:{pt:'por usuário, antes 30 a 45',en:'per user, down from 30 to 45'},
    m3:{pt:'de acesso a dados de clientes',en:'more access to client data'},
    m4:{pt:'clientes com consulta instantânea',en:'clients with instant lookups'},
    projHeading:{pt:'O que já caiu na minha órbita',en:'What has fallen into my orbit'},
    openCase:{pt:'abrir caso →',en:'open case →'},
    c1Where:{pt:'BMA Sistemas · 2025',en:'BMA Sistemas · 2025'},
    c1Title:{pt:'Provisionamento automatizado de usuários SaaS',en:'Automated SaaS user provisioning'},
    c1Desc:{pt:'Software MVC com microsserviços, integração nativa ao Active Directory e Windows Forms (.NET), reduzindo o tempo de provisionamento de 30–45 min para 7 min — beneficiando 25–30 usuários por mês.',en:'MVC software with microservices, native Active Directory integration and Windows Forms (.NET), cutting provisioning time from 30–45 min to 7 min — benefiting 25–30 users per month.'},
    c1M1:{pt:'redução no tempo',en:'time reduction'},
    c2Where:{pt:'SZ Soluções · 2023–2025',en:'SZ Soluções · 2023–2025'},
    c2Title:{pt:'Automação de pipeline de KPIs',en:'KPI pipeline automation'},
    c2Desc:{pt:'Automatizei em C# o envio de dados para KPIs de atendimento, eliminando 100% da entrada manual e entregando dashboards mensais em Power BI para a diretoria.',en:'Automated KPI data pipeline in C#, eliminating 100% of manual data entry and delivering monthly Power BI dashboards to leadership.'},
    c2M1:{pt:'manual eliminado',en:'manual entry eliminated'},
    c3Where:{pt:'Projeto pessoal · 2025',en:'Personal project · 2025'},
    c3Title:{pt:'Rede Social — Comunidade Web',en:'Social Network — Web Community'},
    c3Desc:{pt:'Plataforma de rede social construída do zero: autenticação, feed de publicações e interações, com arquitetura MVC em Node.js e EJS.',en:'Social network platform built from scratch: authentication, post feed and user interactions, with MVC architecture in Node.js and EJS.'},
    c3M2:{pt:'arquitetura',en:'architecture'},
    c5Where:{pt:'SENAI · 2022–2024',en:'SENAI · 2022–2024'},
    c5Title:{pt:'Sistema de Gestão Comercial',en:'Commercial Management System'},
    c5Desc:{pt:'Sistema completo para comércio: comandas e pedidos, controle de estoque, fluxo de caixa, leitura de código de barras e relatórios gerenciais, integrado a um banco MySQL centralizado.',en:'Complete system for retail: orders/tabs, stock control, cash flow, barcode scanning and management reports, integrated with a centralized MySQL database.'},
    c5M1:{pt:'módulos integrados',en:'integrated modules'},
    c4Where:{pt:'Front-end · este portfólio',en:'Front-end · this portfolio'},
    c4Title:{pt:'Este site',en:'This website'},
    c4Desc:{pt:'O próprio portfólio: uma peça viva de front-end, construída do zero em HTML, CSS e JavaScript puro — sem frameworks.',en:'The portfolio itself: a living front-end piece, built from scratch in vanilla HTML, CSS and JavaScript — no frameworks.'},
    c4M1:{pt:'frameworks',en:'frameworks'},
    stackHeading:{pt:'Tecnologias em órbita',en:'Technologies in orbit'},
    orbitAria:{pt:'Tecnologias organizadas por proximidade do uso diário',en:'Technologies arranged by how close they are to daily use'},
    orb1H:{pt:'Órbita interna',en:'Inner orbit'},
    orb1P:{pt:'O que uso todo dia em produção na BMA: C#, .NET, SQL Server e APIs REST.',en:'What I use every day in production at BMA: C#, .NET, SQL Server and REST APIs.'},
    orb2H:{pt:'Órbita média',en:'Middle orbit'},
    orb2P:{pt:'Usado em projetos reais: ASP.NET MVC, PostgreSQL, Active Directory, WinForms, MySQL e IIS.',en:'Used in real projects: ASP.NET MVC, PostgreSQL, Active Directory, WinForms, MySQL and IIS.'},
    orb3H:{pt:'Órbita externa',en:'Outer orbit'},
    orb3P:{pt:'Ferramentas de apoio e a base de front-end que trago desde 2023: Power BI, Node.js, React, JavaScript, Git, Looker Studio, HTML/CSS e Scrum.',en:'Supporting tools and the front-end foundation I have carried since 2023: Power BI, Node.js, React, JavaScript, Git, Looker Studio, HTML/CSS and Scrum.'},
    orbHint:{pt:'passe o mouse para parar as órbitas · clique numa tecnologia',en:'hover to stop the orbits · click a technology'},
    orbToast:{pt:'{x} caiu no buraco negro',en:'{x} fell into the black hole'},
    tlLabel:{pt:'Trajetória',en:'Journey'},
    tlHeading:{pt:'Rota até aqui',en:'The route so far'},
    tl1H:{pt:'Técnico em Desenvolvimento de Software',en:'Software Development Technician'},
    tl1P:{pt:'Início formal na programação: fundamentos de front-end (HTML/CSS/JS) e um sistema completo de gestão comercial em JavaScript e PHP com MySQL como projeto de curso.',en:'Formal start in programming: front-end fundamentals (HTML/CSS/JS) and a complete commercial management system in JavaScript and PHP with MySQL as the course project.'},
    tl2H:{pt:'Analista de Suporte Júnior',en:'Junior Support Analyst'},
    tl2P:{pt:'Automatizei pipeline de KPIs em C#, eliminando 100% da entrada manual de dados. Entrega mensal de dashboards em Power BI e Looker Studio para diretoria.',en:'Automated a KPI pipeline in C#, eliminating 100% of manual data entry. Monthly Power BI and Looker Studio dashboards for leadership.'},
    tl3H:{pt:'Início em Engenharia de Software',en:'Started Software Engineering'},
    tl3P:{pt:'Ingresso na Universidade Católica de Santa Catarina, conciliando graduação com atuação profissional em produção.',en:'Enrolled at Universidade Católica de Santa Catarina, balancing the degree with professional work in production.'},
    tl4H:{pt:'Auxiliar de Desenvolvimento — Backend .NET',en:'Development Assistant — Backend .NET'},
    tl4P:{pt:'Reduzi em ~84% o tempo de provisionamento de usuários SaaS (30–45 → 7 min) e expandi o acesso a dados de clientes em +400% com nova aplicação web e API REST.',en:'Cut SaaS user provisioning time by ~84% (30–45 → 7 min) and expanded client data access by +400% with a new web application and REST API.'},
    tl5When:{pt:'Hoje',en:'Today'},
    tl5H:{pt:'Em desenvolvimento contínuo',en:'Continuously developing'},
    tl5P:{pt:'Conciliando graduação e atuação profissional, buscando posição .NET Júnior com foco em boas práticas e escalabilidade.',en:'Balancing the degree and professional work, looking for a Junior .NET role focused on good practices and scalability.'},
    recLabel:{pt:'Recomendações',en:'Recommendations'},
    recHeading:{pt:'Sinais recebidos',en:'Signals received'},
    recWho:{pt:'— trabalhou na mesma equipe que Leonardo',en:'— worked on the same team as Leonardo'},
    recNote:{pt:'Depoimentos mantidos no original, sem edição.',en:'Testimonials kept in the original Portuguese, unedited.'},
    contHeading:{pt:'Entre na órbita',en:'Enter the orbit'},
    contLead:{pt:'Estou procurando minha próxima vaga como desenvolvedor .NET Júnior. Sem formulário, sem fricção: escolha o canal e fale direto comigo.',en:'I am looking for my next role as a Junior .NET developer. No forms, no friction: pick a channel and reach me directly.'},
    qrLabel:{pt:'escaneie para o LinkedIn',en:'scan for LinkedIn'},
    lblEmail:{pt:'e-mail',en:'email'}, lblCode:{pt:'código-fonte',en:'source code'},
    lblCv:{pt:'Baixar currículo (PDF)',en:'Download résumé (PDF)'}, lblDoc:{pt:'documento',en:'document'},
    footer:{pt:'HTML, CSS e JavaScript puro · o buraco negro é desenhado em canvas, sem bibliotecas',en:'Vanilla HTML, CSS and JavaScript · the black hole is drawn on canvas, no libraries'},
    footerKey:{pt:'dica: tecla L',en:'tip: press L'}
  };
  window.TRANSLATIONS = TRANSLATIONS;

  let currentLang = 'pt';
  const t = (key, vars) => {
    let s = (TRANSLATIONS[key] || {})[currentLang] || key;
    if(vars) Object.keys(vars).forEach(k => { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  };
  function applyLang(lang){
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const tr = TRANSLATIONS[el.getAttribute('data-i18n')];
      if(tr) el.innerHTML = tr[lang];
    });
    // atributos: data-i18n-attr="aria-label:chave;alt:chave"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        if(TRANSLATIONS[key]) el.setAttribute(attr, TRANSLATIONS[key][lang]);
      });
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    const lt = document.getElementById('langToggle');
    lt.textContent = lang === 'pt' ? 'EN' : 'PT';
    lt.setAttribute('lang', lang === 'pt' ? 'en' : 'pt-BR');
    lt.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
    updatePauseLabel();
    updateExperience();
  }
  document.getElementById('langToggle').addEventListener('click', () => applyLang(currentLang === 'pt' ? 'en' : 'pt'));

  /* ===== aviso curto (toast) ===== */
  const toast = document.getElementById('toast');
  let toastTimer;
  function say(msg){
    toast.textContent = msg; toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2200);
  }

  /* ===== pausar / retomar o universo ===== */
  const pauseBtn = document.getElementById('pauseToggle');
  let userPaused = false;
  function updatePauseLabel(){
    pauseBtn.setAttribute('aria-pressed', String(userPaused));
    pauseBtn.textContent = t(userPaused ? 'navResume' : 'navPause');
    pauseBtn.setAttribute('data-i18n', userPaused ? 'navResume' : 'navPause');
  }
  pauseBtn.addEventListener('click', () => {
    userPaused = !userPaused;
    userPaused ? U.pause() : U.resume();
    updatePauseLabel();
  });

  /* ===== cliques no espaço alimentam o buraco negro ===== */
  const center = el => { const r = el.getBoundingClientRect(); return [r.left + r.width/2, r.top + r.height/2]; };
  document.addEventListener('click', e => {
    if(e.target.closest('a,button,input,.panel,.detail,.recruiter,.term-overlay,header')) return;
    U.burst(e.clientX, e.clientY, 40, 1.4);
  });
  document.querySelectorAll('a.btn, header nav a').forEach(a => {
    a.addEventListener('click', () => { const [x, y] = center(a); U.burst(x, y, 24, 1.2); });
  });

  /* ===== stack em órbitas ===== */
  document.querySelectorAll('.ring').forEach(ring => {
    const items = ring.dataset.items.split('|');
    items.forEach((name, i) => {
      const a = i/items.length*Math.PI*2 - Math.PI/2;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.style.left = (50 + Math.cos(a)*50) + '%';
      chip.style.top = (50 + Math.sin(a)*50) + '%';
      const label = document.createElement('span');
      label.textContent = name;
      chip.appendChild(label);
      chip.addEventListener('click', () => {
        const [x, y] = center(chip);
        U.burst(x, y, 30, 1.4);
        say(t('orbToast', {x: name}));
      });
      ring.appendChild(chip);
    });
  });

  /* ===== cards de projeto: puxados pelo buraco negro ===== */
  document.querySelectorAll('.card[data-case]').forEach(card => {
    card.addEventListener('click', () => {
      const [x, y] = center(card);
      card.classList.add('pulled');
      U.burst(x, y, 90, 2);
      U.feed(0.6);
      setTimeout(() => card.classList.remove('pulled'), 380);
    });
  });

  /* ===== CONTADOR DE EXPERIÊNCIA — calculado a partir da data de início ===== */
  const CAREER_START_FE = new Date(2023, 1, 1); // front-end, 02/2023
  const CAREER_START_BE = new Date(2025, 2, 1); // .NET — BMA Sistemas, 03/2025
  function formatSince(start){
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear())*12 + (now.getMonth() - start.getMonth());
    if(now.getDate() < start.getDate()) months--;
    months = Math.max(months, 0);
    const years = Math.floor(months/12), rem = months % 12;
    if(currentLang === 'pt'){
      const y = years + ' ano' + (years > 1 ? 's' : ''), m = rem + ' ' + (rem > 1 ? 'meses' : 'mês');
      return years === 0 ? m : rem === 0 ? y : y + ' e ' + m;
    }
    const y = years + ' year' + (years > 1 ? 's' : ''), m = rem + ' month' + (rem > 1 ? 's' : '');
    return years === 0 ? m : rem === 0 ? y : y + ' ' + m;
  }
  function updateExperience(){
    document.querySelectorAll('.exp-fe').forEach(el => { el.textContent = formatSince(CAREER_START_FE); });
    document.querySelectorAll('.exp-be').forEach(el => { el.textContent = formatSince(CAREER_START_BE); });
  }

  /* ===== QR code para o LinkedIn ===== */
  if(window.QRCode){
    new QRCode(document.getElementById('qrcode'), {
      text: 'https://linkedin.com/in/leonardolamin',
      width: 168, height: 168,
      colorDark: '#03040A', colorLight: '#ffffff'
    });
  }

  applyLang('pt');
})();
