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
    soL2:{pt:'Formação',en:'Education'}, soV2:{pt:'Eng. de Software — Católica SC (em curso) · Téc. em Dev. de Software — SENAI',en:'Software Eng. — Católica SC (in progress) · Software Dev. Technician — SENAI'},
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
    footerKey:{pt:'dica: tecla L',en:'tip: press L'},
    navRecruiter:{pt:'Modo recrutador',en:'Recruiter mode'},
    /* casos */
    caseCopy:{pt:'Copiar link',en:'Copy link'}, caseCopied:{pt:'✓ Link copiado',en:'✓ Link copied'},
    caseCopyFail:{pt:'Copie o link: {x}',en:'Copy the link: {x}'},
    caseClose:{pt:'Fechar',en:'Close'},
    caseArch:{pt:'Arquitetura',en:'Architecture'}, caseDeliv:{pt:'Entregas',en:'Deliverables'}, caseMods:{pt:'Módulos',en:'Modules'}, caseTech:{pt:'Técnicas usadas',en:'Techniques used'},
    codeShow:{pt:'&lt;/&gt; Ver trecho de código',en:'&lt;/&gt; Show code snippet'}, codeHide:{pt:'&lt;/&gt; Ocultar trecho de código',en:'&lt;/&gt; Hide code snippet'},
    codeNote:{pt:'Trecho ilustrativo do meu estilo de código — não é código de produção real da empresa.',en:'Illustrative snippet of my coding style — not actual production code from the company.'},
    c1P1:{pt:'Desenvolvi um software MVC com microsserviços, integração nativa ao Active Directory e Windows Forms (.NET), reduzindo o tempo de provisionamento de usuários de <strong>30–45 minutos para 7 minutos</strong> — um ganho de aproximadamente <strong>84%</strong>, beneficiando 25 a 30 usuários por mês.',en:'I built MVC software with microservices, native Active Directory integration and Windows Forms (.NET), cutting user provisioning time from <strong>30–45 minutes to 7 minutes</strong> — a gain of roughly <strong>84%</strong>, benefiting 25 to 30 users per month.'},
    c1P2:{pt:'Entre os desafios técnicos resolvidos: inconsistência de <strong>codificação de caracteres</strong> entre o arquivo de configuração e o restante do pipeline, uma lógica de backup que não detectava registros duplicados corretamente, e um ponto de sobrescrita de dados posicionado no lugar errado no serviço. Também mapeei que um erro de identidade não mapeada era uma questão operacional — o usuário de rede precisa existir previamente — não um defeito de código.',en:'Technical challenges solved along the way: a <strong>character encoding</strong> mismatch between the configuration file and the rest of the pipeline, backup logic that did not detect duplicate records correctly, and a data-overwrite step placed in the wrong spot in the service. I also traced an unmapped-identity error to an operational cause — the network user must exist beforehand — rather than a code defect.'},
    c1P3:{pt:'No mesmo ambiente, desenvolvi do zero uma aplicação web com API REST que <strong>expandiu o acesso a dados de clientes de 4 para 20 usuários (+400%)</strong>, centralizando informações antes restritas ao servidor, e um dashboard em tempo real (Supabase/PostgreSQL) que reduziu consultas de apuração de ponto de 7–15 minutos para acesso instantâneo, atendendo mais de 1.000 clientes.',en:'In the same environment, I built from scratch a web application with a REST API that <strong>expanded client data access from 4 to 20 users (+400%)</strong>, centralizing information previously restricted to the server, and a real-time dashboard (Supabase/PostgreSQL) that cut time-tracking lookups from 7–15 minutes to instant access, serving more than 1,000 clients.'},
    c1L1:{pt:'Software MVC com microsserviços e integração nativa ao Active Directory',en:'MVC software with microservices and native Active Directory integration'},
    c1L2:{pt:'Interface desktop em Windows Forms (.NET) para orquestração do provisionamento',en:'Windows Forms (.NET) desktop interface to orchestrate provisioning'},
    c1L3:{pt:'Aplicação web com API REST centralizando dados antes restritos ao servidor',en:'Web application with a REST API centralizing data previously restricted to the server'},
    c1L4:{pt:'Dashboard em tempo real sobre Supabase/PostgreSQL para consulta instantânea',en:'Real-time dashboard on Supabase/PostgreSQL for instant lookups'},
    c1D1:{pt:'redução no tempo',en:'time reduction'}, c1D2:{pt:'tempo final (de 30–45 min)',en:'final time (from 30–45 min)'},
    c1D3:{pt:'expansão de acesso a dados',en:'data access expansion'}, c1D4:{pt:'clientes atendidos',en:'clients served'},
    c2P1:{pt:'Na SZ Soluções, o envio de dados para os indicadores de atendimento era feito manualmente — processo lento e sujeito a falhas humanas. Automatizei todo o pipeline em <strong>C#</strong>, eliminando <strong>100% da entrada manual de dados</strong> e garantindo atualização contínua dos indicadores sem intervenção humana.',en:'At SZ Soluções, data for the service indicators was entered by hand — a slow, error-prone process. I automated the whole pipeline in <strong>C#</strong>, eliminating <strong>100% of manual data entry</strong> and keeping the indicators continuously up to date without human intervention.'},
    c2P2:{pt:'Com os dados já consolidados automaticamente, passei a entregar mensalmente <strong>dashboards em Power BI e Looker Studio</strong> — médias, volumes e SLAs — diretamente para a gestão e diretoria da empresa contratante.',en:'With the data consolidated automatically, I started delivering monthly <strong>Power BI and Looker Studio dashboards</strong> — averages, volumes and SLAs — straight to the client company\'s management and leadership.'},
    c2P3:{pt:'Também executei queries SQL/MySQL para extração e validação de dados em investigações técnicas, auditorias de SLA e suporte especializado no ERP TOTVS Datasul.',en:'I also ran SQL/MySQL queries to extract and validate data for technical investigations, SLA audits and specialized support on the TOTVS Datasul ERP.'},
    c2L1:{pt:'Pipeline de automação de KPIs em C#, sem intervenção manual',en:'KPI automation pipeline in C#, with no manual intervention'},
    c2L2:{pt:'Dashboards mensais em Power BI e Looker Studio para diretoria',en:'Monthly Power BI and Looker Studio dashboards for leadership'},
    c2L3:{pt:'Queries SQL/MySQL para auditorias de SLA e investigações técnicas',en:'SQL/MySQL queries for SLA audits and technical investigations'},
    c2L4:{pt:'Suporte especializado no ERP TOTVS Datasul',en:'Specialized support on the TOTVS Datasul ERP'},
    c2D1:{pt:'entrada manual eliminada',en:'manual entry eliminated'}, c2D2:{pt:'consistência da informação',en:'data consistency'},
    c2D3:{pt:'anos na função',en:'years in the role'}, c2N4:{pt:'mensal',en:'monthly'}, c2D4:{pt:'entrega de dashboards',en:'dashboard delivery'},
    c3P1:{pt:'Plataforma de rede social construída do zero, com <strong>autenticação de usuários</strong>, feed de publicações e interações entre usuários — arquitetura <strong>MVC</strong> com Node.js e templates EJS.',en:'Social network platform built from scratch, with <strong>user authentication</strong>, a post feed and user interactions — <strong>MVC</strong> architecture with Node.js and EJS templates.'},
    c3P2:{pt:'Modelei os relacionamentos entre usuários, posts e conexões usando <strong>Sequelize ORM</strong> sobre banco MySQL, separando claramente a camada de acesso a dados da lógica de negócio — mesma disciplina de arquitetura que aplico em produção com .NET.',en:'I modeled the relationships between users, posts and connections with <strong>Sequelize ORM</strong> on MySQL, clearly separating the data access layer from business logic — the same architectural discipline I apply in production with .NET.'},
    c3P3:{pt:'Projeto pessoal desenvolvido de ponta a ponta: modelagem de dados, autenticação, rotas, views e persistência — sem starter kits ou boilerplates prontos.',en:'A personal project built end to end: data modeling, authentication, routes, views and persistence — no starter kits or ready-made boilerplates.'},
    c3L1:{pt:'Arquitetura MVC com Node.js e templates EJS',en:'MVC architecture with Node.js and EJS templates'},
    c3L2:{pt:'Autenticação de usuários e gerenciamento de sessão',en:'User authentication and session management'},
    c3L3:{pt:'Modelagem de relacionamentos (usuários, posts, conexões) via Sequelize ORM',en:'Relationship modeling (users, posts, connections) with Sequelize ORM'},
    c3L4:{pt:'Camada de dados separada da lógica de negócio sobre MySQL',en:'Data layer separated from business logic on MySQL'},
    c3Gh:{pt:'&lt;/&gt; Ver código-fonte no GitHub',en:'&lt;/&gt; View source on GitHub'},
    c3D1:{pt:'desenvolvido do zero',en:'built from scratch'}, c3D2:{pt:'arquitetura aplicada',en:'architecture applied'},
    c3D3:{pt:'ano do projeto',en:'project year'}, c3D4:{pt:'modelagem de dados',en:'data modeling'},
    c5P1:{pt:'Desenvolvido durante o curso técnico no <strong>SENAI</strong> (2022–2024), este sistema cobre o fluxo operacional completo de um pequeno comércio: abertura e fechamento de <strong>comandas/pedidos</strong>, controle de estoque, fluxo de caixa e emissão de relatórios gerenciais para apoiar decisões do dia a dia.',en:'Built during the technical course at <strong>SENAI</strong> (2022–2024), this system covers the full operational flow of a small business: opening and closing <strong>orders/tabs</strong>, stock control, cash flow and management reports to support day-to-day decisions.'},
    c5P2:{pt:'Um dos pontos técnicos mais interessantes foi a integração de <strong>leitura de código de barras</strong> ao fluxo de vendas, permitindo lançamento rápido de itens e baixa automática no estoque — tudo persistido em um banco <strong>MySQL centralizado</strong>, garantindo que comandas, estoque e caixa nunca ficassem dessincronizados.',en:'One of the most interesting technical points was integrating <strong>barcode scanning</strong> into the sales flow, allowing fast item entry and automatic stock deduction — all persisted in a <strong>centralized MySQL</strong> database, so orders, stock and cash never fell out of sync.'},
    c5P3:{pt:'O projeto foi construído com <strong>JavaScript e PHP</strong> no back-end, refletindo minha entrada no desenvolvimento antes de migrar o foco principal para .NET — uma base que ajuda a entender diferentes ecossistemas de servidor.',en:'The project was built with <strong>JavaScript and PHP</strong> on the back end, reflecting my start in development before moving my main focus to .NET — a foundation that helps me understand different server ecosystems.'},
    c5L1:{pt:'Comandas e pedidos com lançamento de itens',en:'Orders and tabs with item entry'},
    c5L2:{pt:'Controle de estoque com baixa automática via código de barras',en:'Stock control with automatic deduction via barcode'},
    c5L3:{pt:'Fluxo de caixa (abertura, movimentações, fechamento)',en:'Cash flow (opening, transactions, closing)'},
    c5L4:{pt:'Relatórios gerenciais sobre banco MySQL centralizado',en:'Management reports on a centralized MySQL database'},
    c5D1:{pt:'módulos principais',en:'main modules'}, c5D2:{pt:'dados centralizados',en:'centralized data'},
    c5D3:{pt:'período (SENAI)',en:'period (SENAI)'}, c5D4:{pt:'banco de dados único',en:'single database'},
    tagBarcode:{pt:'Código de barras',en:'Barcode'},
    c4P1:{pt:'O portfólio que você está usando agora <strong>é</strong> a prova de front-end — não uma descrição dela. Construído do zero, sem frameworks: HTML, CSS e JavaScript puro, com foco em performance e em técnicas modernas de plataforma web.',en:'The portfolio you are using right now <strong>is</strong> the front-end proof — not a description of it. Built from scratch, with no frameworks: vanilla HTML, CSS and JavaScript, focused on performance and modern web platform techniques.'},
    c4P2:{pt:'O conceito de "horizonte de eventos" guiou cada decisão: um buraco negro desenhado em <strong>canvas 2D, sem bibliotecas</strong>, com estrelas desviadas pela gravidade, disco de acreção e partículas que caem em espiral a cada clique. Os projetos são puxados pelo buraco negro antes de abrir.',en:'The "event horizon" concept guided every decision: a black hole drawn on <strong>2D canvas, with no libraries</strong>, with stars bent by gravity, an accretion disk and particles that spiral in on every click. Projects get pulled in by the black hole before they open.'},
    c4P3:{pt:'Inclui sistema de tradução PT/EN próprio, modo condensado para recrutadores, modo calmo com <code>prefers-reduced-motion</code> e estados de foco visíveis — acessibilidade não foi tratada como opcional.',en:'It includes a custom PT/EN translation system, a condensed recruiter mode, a calm mode with <code>prefers-reduced-motion</code> and visible focus states — accessibility was not treated as optional.'},
    c4L1:{pt:'Canvas 2D com requestAnimationFrame e devicePixelRatio limitado para poupar o celular',en:'2D canvas with requestAnimationFrame and a capped devicePixelRatio to spare phones'},
    c4L2:{pt:'Movimento reduzido: a animação desacelera em vez de parar',en:'Reduced motion: the animation slows down instead of stopping'},
    c4L3:{pt:'Deep links #case1 a #case5 com painel acessível (Esc devolve o foco ao card)',en:'Deep links #case1 to #case5 with an accessible panel (Esc returns focus to the card)'},
    c4L4:{pt:'Sistema de i18n (PT/EN) escrito do zero, sem biblioteca',en:'i18n system (PT/EN) written from scratch, no library'},
    c4Gh:{pt:'&lt;/&gt; Ver código-fonte completo no GitHub',en:'&lt;/&gt; View full source on GitHub'},
    c4D1:{pt:'frameworks',en:'frameworks'}, c4D2:{pt:'estático',en:'static'}, c4D3:{pt:'idiomas (PT/EN)',en:'languages (PT/EN)'}, c4D4:{pt:'seções',en:'sections'},
    /* modo recrutador */
    rvTitle:{pt:'Modo recrutador · ficha em uma tela',en:'Recruiter mode · one-page profile'},
    rvClose:{pt:'Voltar ao universo',en:'Back to the universe'},
    rvRole:{pt:'Desenvolvedor Backend .NET',en:'Backend .NET Developer'},
    rvBadge:{pt:'Disponível para vaga .NET Júnior',en:'Available for a Junior .NET role'},
    rvLocal:{pt:'Local',en:'Location'}, rvNow:{pt:'Hoje',en:'Now'}, rvNowV:{pt:'BMA Sistemas, backend .NET',en:'BMA Sistemas, backend .NET'},
    rvFe:{pt:'Front-end',en:'Front-end'},
    rvEduV:{pt:'Eng. de Software, Católica SC (2025–2029)',en:'Software Eng., Católica SC (2025–2029)'},
    rvEn:{pt:'Inglês',en:'English'}, rvEnV:{pt:'Intermediário, leitura técnica e conversação',en:'Intermediate, technical reading and conversation'},
    rvPhone:{pt:'Telefone',en:'Phone'},
    rvCopy:{pt:'Copiar e-mail',en:'Copy email'}, rvCopied:{pt:'E-mail copiado.',en:'Email copied.'},
    rvCopySel:{pt:'E-mail selecionado. Use Ctrl+C para copiar.',en:'Email selected. Press Ctrl+C to copy.'},
    rv30H:{pt:'Em 30 segundos',en:'In 30 seconds'},
    rv30a:{pt:'Trabalha com <b>C# e .NET em produção</b> desde março de 2025, na BMA Sistemas.',en:'Works with <b>C# and .NET in production</b> since March 2025, at BMA Sistemas.'},
    rv30b:{pt:'Reduziu em <b>84%</b> o tempo de provisionar usuários SaaS, de 30–45 para 7 minutos.',en:'Cut SaaS user provisioning time by <b>84%</b>, from 30–45 down to 7 minutes.'},
    rv30c:{pt:'Vem de <b>suporte, SQL e BI</b>: entende o usuário e o dado antes de escrever código.',en:'Comes from <b>support, SQL and BI</b>: understands the user and the data before writing code.'},
    rvExpH:{pt:'Experiência',en:'Experience'},
    rvJ1When:{pt:'03/2025 → hoje',en:'03/2025 → now'},
    rvJ1a:{pt:'Provisionamento de usuários SaaS de 30–45 min para <span class="metric">7 min</span>, para 25 a 30 usuários por mês.',en:'SaaS user provisioning from 30–45 min down to <span class="metric">7 min</span>, for 25 to 30 users per month.'},
    rvJ1b:{pt:'Aplicação web com API REST que ampliou o acesso a dados de clientes em <span class="metric">+400%</span>.',en:'Web application with a REST API that expanded client data access by <span class="metric">+400%</span>.'},
    rvJ1c:{pt:'Dashboard em tempo real (Supabase/PostgreSQL) para <span class="metric">1.000+</span> clientes.',en:'Real-time dashboard (Supabase/PostgreSQL) for <span class="metric">1,000+</span> clients.'},
    rvJ2a:{pt:'Pipeline de KPIs em C# que eliminou <span class="metric">100%</span> da entrada manual.',en:'KPI pipeline in C# that eliminated <span class="metric">100%</span> of manual entry.'},
    rvJ2b:{pt:'Dashboards mensais em Power BI e Looker Studio para a diretoria; suporte ao ERP TOTVS Datasul.',en:'Monthly Power BI and Looker Studio dashboards for leadership; TOTVS Datasul ERP support.'},
    rvJ3H:{pt:'Bacharelado em Engenharia de Software',en:'B.Sc. in Software Engineering'},
    rvJ3a:{pt:'Graduação em curso, junto com o trabalho em produção.',en:'Degree in progress, alongside work in production.'},
    rvJ4a:{pt:'Sistema de Gestão Comercial em JavaScript e PHP com MySQL: comandas, estoque por código de barras e caixa.',en:'Commercial Management System in JavaScript and PHP with MySQL: orders, barcode-based stock and cash flow.'},
    rvSkH:{pt:'Competências',en:'Skills'},
    skMicro:{pt:'Microsserviços',en:'Microservices'}, skData:{pt:'Dados',en:'Data'}, skSaas:{pt:'Provisionamento SaaS',en:'SaaS provisioning'}, skTools:{pt:'Ferramentas',en:'Tools'},
    skKeyWork:{pt:'usada no trabalho',en:'used at work'}, skKeyStudy:{pt:'projetos e estudo',en:'projects and study'},
    /* terminal */
    termAria:{pt:'Terminal de logs',en:'Log terminal'}
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

  /* ===== diálogos: trava o fundo e devolve o foco ===== */
  const wrap = document.querySelector('.wrap');
  function lockPage(on){
    wrap.inert = on;
    document.documentElement.style.overflow = on ? 'hidden' : '';
  }

  /* ===== casos: o card é puxado, o buraco negro absorve e o caso abre por cima ===== */
  const CASE_IDS = ['case1','case2','case3','case4','case5'];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const detail = document.getElementById('detail');
  const detailPanel = detail.querySelector('[role="dialog"]');
  const closeBtn = detail.querySelector('[data-close]');
  const copyBtn = detail.querySelector('[data-copy]');
  let openId = null;

  function openCase(id){
    if(!CASE_IDS.includes(id)) return;
    detail.querySelectorAll('.case').forEach(a => { a.hidden = a.id !== id; });
    detailPanel.setAttribute('aria-labelledby', id + 'T');
    detailPanel.scrollTop = 0;
    detail.hidden = false;
    openId = id;
    lockPage(true);
    if(location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    closeBtn.focus();
  }
  function closeCase(){
    if(!openId) return;
    const id = openId;
    detail.hidden = true;
    openId = null;
    lockPage(false);
    history.replaceState(null, '', location.pathname + location.search);
    const card = document.querySelector('.card[data-case="' + id + '"]');
    if(card) card.focus({preventScroll:true});
  }
  closeBtn.addEventListener('click', closeCase);
  detail.addEventListener('click', e => { if(e.target === detail) closeCase(); });

  document.querySelectorAll('.card[data-case]').forEach(card => {
    card.addEventListener('click', () => {
      const [x, y] = center(card);
      card.classList.add('pulled');
      U.burst(x, y, 90, 2);
      U.feed(0.6);
      setTimeout(() => { card.classList.remove('pulled'); openCase(card.dataset.case); }, reduced.matches ? 120 : 380);
    });
  });

  copyBtn.addEventListener('click', () => {
    const url = location.origin + location.pathname + '#' + openId;
    const done = () => {
      copyBtn.textContent = t('caseCopied');
      setTimeout(() => { copyBtn.textContent = t('caseCopy'); }, 1800);
    };
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(url).then(done, () => say(t('caseCopyFail', {x: url})));
    } else {
      say(t('caseCopyFail', {x: url}));
    }
  });

  const codeToggle = document.getElementById('codeToggle');
  codeToggle.addEventListener('click', () => {
    const code = document.getElementById('code1');
    code.hidden = !code.hidden;
    const key = code.hidden ? 'codeShow' : 'codeHide';
    codeToggle.setAttribute('aria-expanded', String(!code.hidden));
    codeToggle.setAttribute('data-i18n', key);
    codeToggle.innerHTML = t(key);
  });

  // deep link: #case1..#case5 abre o caso certo ao carregar (e ao mudar o hash)
  function openFromHash(){
    const id = location.hash.slice(1);
    if(CASE_IDS.includes(id) && openId !== id) openCase(id);
  }
  window.addEventListener('hashchange', openFromHash);

  /* ===== MODO RECRUTADOR — ficha de uma tela; pausa o universo enquanto aberto ===== */
  const recruiter = document.getElementById('recruiter');
  const recruiterBtn = document.getElementById('recruiterToggle');
  function openRecruiter(){
    if(openId) closeCase();
    recruiter.hidden = false;
    recruiter.scrollTop = 0;
    lockPage(true);
    U.pause();
    document.getElementById('rvName').focus();
  }
  function closeRecruiter(){
    if(recruiter.hidden) return;
    recruiter.hidden = true;
    lockPage(false);
    if(!userPaused) U.resume();
    recruiterBtn.focus();
  }
  recruiterBtn.addEventListener('click', openRecruiter);
  document.getElementById('recruiterClose').addEventListener('click', closeRecruiter);

  const rvCopy = document.getElementById('rvCopy'), rvCopied = document.getElementById('rvCopied');
  rvCopy.addEventListener('click', () => {
    const select = () => {
      const r = document.createRange();
      r.selectNodeContents(document.getElementById('rvMail'));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      rvCopied.textContent = t('rvCopySel');
    };
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText('LeonardoLamin.Tech@gmail.com').then(() => { rvCopied.textContent = t('rvCopied'); }, select);
    } else select();
  });

  /* ===== TERMINAL DE LOGS — easter egg (tecla L) ===== */
  const termLines = [
    {t:'info', pt:'09:14:02 sessão iniciada — carregando acervo...', en:'09:14:02 session started — loading collection...'},
    {t:'ok',   pt:'provisionamento SaaS: 30-45min → 7min (~84% de redução)', en:'SaaS provisioning: 30-45min → 7min (~84% reduction)'},
    {t:'ok',   pt:'acesso a dados expandido: 4 → 20 usuários (+400%)', en:'data access expanded: 4 → 20 users (+400%)'},
    {t:'ok',   pt:'dashboard tempo real: 7-15min → instantâneo (1000+ clientes)', en:'real-time dashboard: 7-15min → instant (1000+ clients)'},
    {t:'ok',   pt:'pipeline de KPIs: 100% da entrada manual eliminada', en:'KPI pipeline: 100% of manual entry eliminated'},
    {t:'info', pt:'IdentityNotMappedException investigada — causa operacional confirmada, não bug', en:'IdentityNotMappedException investigated — operational cause confirmed, not a bug'},
    {t:'info', pt:'--- stack deste site ---', en:'--- this site\'s stack ---'},
    {t:'ok',   pt:'HTML5 · CSS3 · JavaScript vanilla — 0 frameworks', en:'HTML5 · CSS3 · vanilla JavaScript — 0 frameworks'},
    {t:'ok',   pt:'buraco negro em canvas 2D — 0 bibliotecas', en:'black hole on 2D canvas — 0 libraries'},
    {t:'ok',   pt:'i18n PT/EN escrito do zero', en:'PT/EN i18n written from scratch'},
    {t:'ready',pt:'pronto. pressione ESC para sair.', en:'ready. press ESC to exit.'}
  ];
  const term = document.getElementById('termOverlay');
  const termBody = document.getElementById('termBody');
  let termTimer = null, termFocusBack = null;
  function openTerm(){
    if(term.classList.contains('active')) return;
    termFocusBack = document.activeElement;
    term.classList.add('active');
    term.querySelector('.terminal').focus();
    clearTimeout(termTimer);
    termBody.textContent = '';
    let i = 0;
    (function next(){
      if(i >= termLines.length) return;
      const l = termLines[i++];
      const row = document.createElement('div');
      row.className = l.t;
      row.textContent = '$ ' + l[currentLang];
      termBody.appendChild(row);
      termTimer = setTimeout(next, reduced.matches ? 60 : 260);
    })();
  }
  function closeTerm(){
    if(!term.classList.contains('active')) return;
    term.classList.remove('active');
    clearTimeout(termTimer);
    if(termFocusBack && termFocusBack.focus) termFocusBack.focus({preventScroll:true});
  }
  term.addEventListener('click', e => { if(e.target === term) closeTerm(); });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      if(term.classList.contains('active')) return closeTerm();
      if(openId) return closeCase();
      if(!recruiter.hidden) return closeRecruiter();
    }
    if((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey && !e.altKey && !e.repeat){
      const tag = (e.target && e.target.tagName) || '';
      if(tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target.isContentEditable) openTerm();
    }
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
  openFromHash();
})();
