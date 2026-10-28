# Contexto: Portfólio do Leonardo Lamin

## Quem sou eu (Leonardo)
- Nome completo: **Leonardo Lamin**
- Telefone/WhatsApp: (47) 99930-4752
- E-mail: LeonardoLamin.Tech@gmail.com
- LinkedIn: linkedin.com/in/leonardolamin
- GitHub: github.com/LaminLeonardo
- Localização: Joinville — SC
- Também sou desenvolvedor na BMA Sistemas e estudante de Engenharia de Software na Universidade Católica de Santa Catarina (UNISC)
- **Currículo real em PDF** no repositório: `LeonardoLaminResume.pdf` (atenção: o PDF diz "Java" no projeto do SENAI; o correto é JavaScript + PHP)

## Posicionamento profissional (direto do currículo real)
- Headline: **Desenvolvedor Backend .NET · Integração de Sistemas · Automação de Processos**
- Buscando: posição **.NET Júnior** com foco em boas práticas e escalabilidade
- Mas também tenho ~3 anos de experiência em **front-end** (HTML/CSS/JS), começados em fevereiro/2023 — então o site tem essa dualidade: headline focado em .NET (o que busco), mas com prova real de competência front-end no próprio site

## Formação e trajetória real (cronologia)
- **2022–2024**: SENAI — Técnico em Desenvolvimento de Software
- **01/2023–02/2025**: SZ Soluções — Analista de Suporte Júnior (automação de KPIs em C#, dashboards Power BI/Looker Studio, SQL/MySQL, suporte ERP TOTVS Datasul)
- **2025–2029 (em curso)**: UNISC — Bacharelado em Engenharia de Software
- **03/2025–presente**: BMA Sistemas — Auxiliar de Desenvolvimento (Backend .NET)

## Conquistas reais (currículo) — usadas como métricas no site
- Reduzi ~84% o tempo de provisionamento de usuários SaaS (30–45min → 7min), beneficiando 25–30 usuários/mês — projeto principal (BMA)
- Expandi acesso a dados de clientes de 4 para 20 usuários (+400%) com nova aplicação web + API REST
- Dashboard em tempo real (Supabase/PostgreSQL): consulta de apuração de ponto de 7–15min → instantâneo, para 1.000+ clientes
- Eliminei 100% da entrada manual de dados no pipeline de KPIs (SZ Soluções), com dashboards mensais em Power BI/Looker Studio

## Idiomas
Português (nativo) · Inglês (intermediário — leitura técnica e conversação, ambos com fluidez)

## Stack real completa
- **Backend**: C#, .NET / .NET Core, ASP.NET MVC, WinForms, Microsserviços, APIs REST, Node.js/Express, Java
- **Front-end**: HTML, CSS, JavaScript, EJS, React
- **Infra & SaaS**: Active Directory, IIS, ODBC, Provisionamento SaaS
- **Banco de dados**: SQL Server, PostgreSQL, MySQL, Sequelize ORM
- **BI & Dados**: Power BI, Looker Studio, DAX
- **Ferramentas**: Git/GitHub, Jira, ServiceNow, Scrum/Kanban, ERP TOTVS Datasul

## Projetos pessoais reais (não são do emprego)
1. **Rede Social — Comunidade Web** (2025) — Node.js, EJS, Sequelize ORM, MySQL. Plataforma com autenticação, feed de publicações, interações. Arquitetura MVC. Repositório: github.com/LaminLeonardo
2. **Sistema de Gestão Comercial** (SENAI, 2022–2024) — módulos de comandas/pedidos, controle de estoque, relatórios gerenciais, fluxo de caixa, leitura de código de barras, tudo integrado a banco MySQL centralizado.
   ⚠️ **IMPORTANTE**: o currículo em PDF diz "Java", mas o Leonardo confirmou que na verdade foi feito em **JavaScript e PHP** (não Java) — usar essa correção, não o que está no PDF.

---

# O que estamos construindo

Um **portfólio pessoal em HTML/CSS/JS puro** (sem frameworks, sem build). Desde a fase 01 (branch `redesign-universo`), o visual é o **"Horizonte de Eventos"**.

## Conceito visual (atual)
- Um **buraco negro desenhado em `<canvas>` 2D puro** fica fixo no fundo (`assets/js/universo.js`): estrelas com desvio gravitacional, disco de acreção com lado mais brilhante (Doppler), arco de luz por cima da sombra, partículas que caem em espiral, ondas de choque e brilho que aumenta quando ele "come" partículas.
- Começa à direita no hero (centralizado no topo no celular) e vai para o centro ao rolar.
- O conteúdo flutua em **painéis escuros translúcidos**. Paleta: fundo `#03040A`, laranja `#FFB45E`/`#FF6B3D`, azul-claro `#8FB8FF`, texto `#ECEEF6`/`#A3A9C2`.
- Tipografia: **Unbounded** (títulos), **Manrope** (corpo), **IBM Plex Mono** (rótulos).
- Desempenho: `devicePixelRatio` limitado a 1,5 e menos partículas abaixo de 860 px. Com `prefers-reduced-motion` a animação continua em modo calmo (~40% da velocidade), nunca parada.
- O visual anterior (galeria "Peça N°XX", corredor 3D, camada `.ambient`, tela de loading, HUD com relógio) foi removido na fase 01.

## Estrutura de telas (todas no `index.html`, scroll vertical)
1. **Hero**: nome, "desenvolvedor .NET", frase de abertura, "Aberto a oportunidades — .NET Júnior", botões "Ver projetos" e "Baixar currículo", dica "clique no espaço".
2. **Sobre** (`#sobre`): bio real, foto, ficha com dois contadores calculados via JS (front-end desde 02/2023, .NET desde 03/2025), formação, idiomas, status. Abaixo, os quatro números: −84%, 7 min, +400%, 1.000+.
3. **Projetos** (`#projetos`): cinco cards (Provisionamento SaaS `case1`, Pipeline de KPIs `case2`, Rede Social `case3`, Gestão Comercial `case5`, Este site `case4`). Clicar puxa o card, solta partículas até o buraco negro e abre o caso num painel por cima, com todo o texto (descrição, arquitetura/entregas, métricas, stack). O caso 1 tem o trecho C# ilustrativo, com o aviso de que não é código de produção.
4. **Stack em órbitas** (`#stack`): interna (C#, .NET, SQL Server, APIs REST), média (ASP.NET MVC, PostgreSQL, Active Directory, WinForms, MySQL, IIS) e externa (Power BI, Node.js, React, JavaScript, Git, Looker Studio, HTML/CSS, Scrum).
5. **Trajetória** (`#trajetoria`): SENAI 2022 (sistema de gestão em JavaScript + PHP), SZ Soluções 2023, UNISC 2025, BMA 2025, Hoje.
6. **Recomendações** (`#recomendacoes`): **dois depoimentos reais, já preenchidos**, mantidos no original: Daniel Fernando Gonçalves e Carlos Eduardo Chierighini de Siqueira (ambos "trabalhou na mesma equipe que Leonardo"). Só mudam com texto real enviado pelo Leonardo.
7. **Contato** (`#contato`): e-mail, WhatsApp, LinkedIn, GitHub, código-fonte (`github.com/LaminLeonardo/Portifolio`), currículo e QR code do LinkedIn (`qrcodejs` via cdnjs).

## Funcionalidades extras
- **PT/EN**: dicionário `TRANSLATIONS{}` em `assets/js/site.js` + atributos `data-i18n` (texto) e `data-i18n-attr` (atributos). O dicionário é aplicado também ao carregar a página.
- **Deep links** `#case1` a `#case5`, botão "copiar link", Esc fecha o painel e devolve o foco ao card.
- **Pausar universo**: botão na navegação.
- **Modo Recrutador**: ficha de uma tela no estilo do protótipo D (resumo com contato e currículo, "em 30 segundos", experiência em tópicos e competências). Pausa o universo enquanto está aberto.
- **Terminal de logs** (easter egg, tecla `L`), em laranja e azul-claro sobre preto.
- **404.html** no mesmo tema: buraco negro só em CSS e "Esta peça não está em exibição".
- **SEO**: `robots.txt`, `sitemap.xml`, `canonical` e `og:url` com o domínio da Vercel.

## Stack técnica do site
**100% HTML/CSS/JS vanilla — zero frameworks, zero build step.** Arquivos: `index.html` (só HTML), `assets/css/site.css`, `assets/js/universo.js` (canvas), `assets/js/site.js` (interação). Externos: Google Fonts e `qrcodejs@1.0.0` (cdnjs). APIs: Canvas 2D, `requestAnimationFrame`, Clipboard API, `inert`.

## Deploy
- **No ar** na Vercel: https://laminleonardoportifolio.vercel.app/ (preset "Other", sem build, deploy automático a partir do GitHub).
- Repositório: https://github.com/LaminLeonardo/Portifolio. A `main` publica em produção; outras branches geram link de prévia.

## Pendências que só o Leonardo pode resolver
- [x] Foto real (`foto-leonardo.jpg`)
- [x] Recomendações reais (dois depoimentos publicados)
- [x] Repositório publicado no GitHub
- [x] Domínio real no `robots.txt`/`sitemap.xml`
- [ ] Imagem de prévia (`og:image`/`twitter:image`) real, hoje um placeholder (fase 02)
- [ ] Confirmar nome e sigla da universidade (o site usa "UNISC" e "Universidade Católica de Santa Catarina")
