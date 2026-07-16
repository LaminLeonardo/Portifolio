# Contexto: Portfólio do Leonardo Lamin

## Quem sou eu (Leonardo)
- Nome completo: **Leonardo Lamin**
- Telefone/WhatsApp: (47) 99930-4752
- E-mail: LeonardoLamin.Tech@gmail.com
- LinkedIn: linkedin.com/in/leonardolamin
- GitHub: github.com/LaminLeonardo
- Localização: Joinville — SC
- Também sou desenvolvedor na BMA Sistemas e estudante de Engenharia de Software na Universidade Católica de Santa Catarina (UNISC)
- **Já enviei meu currículo real em PDF** (LeonardoLamin_CV.pdf) numa conversa anterior — se precisar reconferir dados, posso reenviar

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

Um **portfólio pessoal em HTML/CSS/JS puro** (sem frameworks, sem build), pensado como uma **galeria virtual imersiva**:

## Conceito visual
- **Ato 1 (Hero + Sobre)**: tom profissional/sóbrio — paleta âmbar quente (`#E8B14D`), azul-aço (`#4C7A93`/`#6FE3D6`), fundo quase preto (`#0B0F14`/`#0A1016`). Tipografia: Fraunces (serifa, títulos) + Inter (corpo) + JetBrains Mono (labels técnicos/mono).
- **Ato 2 (Projetos em diante)**: transição para cyberpunk — ciano (`#00E5D8`) + magenta (`#E8449A`), fundo mais escuro (`#05070A`/`#040507`), piso digital em grade, scanlines sutis.
- **Transição**: uma camada de luz ambiente fixa (`.ambient`) muda de matiz continuamente conforme o scroll (JS lê a posição de scroll e interpola HSL âmbar→ciano→magenta via `requestAnimationFrame`), dando a sensação de "entrar no sistema" conforme desce a página.
- Metáfora de "galeria": cada seção é uma "Peça N°XX" numerada, como catalogação de museu.

## Estrutura de telas (todas num único `index.html`, scroll vertical entre seções)
1. **Hero** (`#stage1`) — corredor em perspectiva 3D (CSS `perspective` + `rotateY/rotateX` no mousemove), nome "Leonardo Lamin", cargo com efeito de digitação (typewriter JS), badge "Aberto a oportunidades — .NET Júnior", CTA "Ver projetos ↓", moldura de foto (hoje placeholder) à esquerda no corredor
2. **Sobre** (`#sobre`) — "ficha catalográfica": bio (parágrafos reais do currículo), datasheet com Atuação/Formação/Metodologia/Idiomas/dois contadores de experiência dinâmicos (front-end desde 02/2023, .NET desde 03/2025 — calculados via JS a cada carregamento), stack em categorias (Backend/Front-end/Dados&Infra), painel "Diagnóstico" com barras de proficiência animadas (Intersection Observer)
3. **Timeline** (trajetória) — trilha horizontal com scroll-snap, 5 marcos reais (SENAI 2022 → SZ Soluções 2023 → UNISC 2025 → BMA 2025 → Hoje), cada item revela com fade ao entrar na tela (Intersection Observer)
4. **Projetos** (`#projetos`) — galeria horizontal (scroll-snap, arraste ou wheel-to-horizontal via JS) com cards ("vitrines") que ao clicar abrem em tela cheia via **View Transitions API** (zoom morph nativo, com fallback de fade para navegadores sem suporte — ex: Firefox). Cada caso tem: descrição, arquitetura/entregas, métricas reais, stack, botão "copiar link" (deep link via `#case1` etc.), e o caso 1 tem um trecho de código ilustrativo (toggle) em C#.
   - **Peça N°02**: Provisionamento automatizado de usuários SaaS (BMA) — métricas reais 84%/7min/+400%/1000+
   - **Peça N°03**: Automação de pipeline de KPIs (SZ Soluções) — 100% manual eliminado
   - **Peça N°04**: Rede Social — Comunidade Web (projeto pessoal)
   - **✅ CONCLUÍDO**: **Peça N°05 — Sistema de Gestão Comercial** (SENAI, JavaScript + PHP + MySQL — corrigido do "Java" que estava no PDF) foi adicionada como `case5`, com card na galeria, seção de detalhe completa (comandas/pedidos, estoque, fluxo de caixa, código de barras, relatórios), tags i18n (`c5Cat/c5Title/c5Desc/c5M1/c5M2`) e incluída na lista de hashes válidos do deep-link (`case1..case5`).
   - Numeração atualizada: "Este site" (`case4`) agora é **Peça N°06**, e o Contato agora é **Peça N°07** (HTML estático + chave i18n `s4Eyebrow` atualizados).
5. **Recomendações** — seção com **placeholders explícitos** (não preenchidos ainda — Leonardo não tinha depoimentos reais até agora; não inventar texto aqui, só adicionar se ele mandar algo real)
6. **Contato** (`#contato`) — e-mail, WhatsApp, GitHub, LinkedIn, botão de CV (baixa `curriculo-leonardo.pdf` — **o PDF real já foi anexado ao projeto**), link "Código-fonte" (aponta pra `github.com/LaminLeonardo/portfolio` — **repositório ainda precisa ser criado/publicado**), QR code (biblioteca `qrcodejs` via cdnjs) apontando pro LinkedIn

## Funcionalidades extras já implementadas
- **PT/EN toggle** — dicionário JS `TRANSLATIONS{}` + atributos `data-i18n` nos elementos; botão "EN"/"PT" na nav
- **Modo Recrutador** — botão que alterna pra uma versão condensada de uma tela só (bio + projetos resumidos + contato), pra quem não quer rolar a experiência imersiva inteira
- **Terminal de logs (easter egg)** — tecla `L` abre um terminal estilizado com "logs" digitados das conquistas reais + stack do site
- **HUD de status** — canto inferior esquerdo, relógio real ao vivo + "sistema online" (tema de monitoramento, ligado ao domínio profissional real do Leonardo)
- **Loading screen** — tela rápida "abrindo a galeria" antes do conteúdo aparecer
- **404.html** — página de erro temática ("Esta peça não está em exibição")
- **SEO básico** — `robots.txt` e `sitemap.xml` (⚠️ ainda com domínio placeholder `seudominio.com`, precisa trocar depois do deploy)
- **Meta tags / Open Graph / Twitter Card** — título "Leonardo Lamin — Desenvolvedor Backend .NET"
- **Favicon** — SVG inline, letra "L" em ciano
- **Acessibilidade** — `prefers-reduced-motion` respeitado, estados de foco visíveis, `aria-hidden` no HUD
- **Responsividade mobile** — nav com `flex-wrap`, esconde links redundantes abaixo de 480px, esconde molduras decorativas do hero em telas muito estreitas

## Stack técnica do site
**100% HTML/CSS/JS vanilla — zero frameworks, zero build step.** Isso foi decisão deliberada (mais leve, mais barato de manter, deploy trivial). Bibliotecas externas via CDN: Google Fonts (Fraunces/Inter/JetBrains Mono), `qrcodejs` (cdnjs). APIs modernas usadas: View Transitions API, Intersection Observer, Clipboard API (`navigator.clipboard`).

## Deploy
- Alvo: **Vercel**, hospedagem estática, sem configuração de build (framework preset "Other")
- Arquivo principal renomeado para `index.html` (era `00-preview-completo.html`)
- `404.html` já está no formato que o Vercel reconhece automaticamente
- Guia completo em `DEPLOY.md`

## Pendências que só o Leonardo pode resolver
- [x] Foto real (hoje é `foto-leonardo.jpg`, já aplicada no hero)
- [ ] Recomendações reais (seção existe mas está vazia/placeholder)
- [ ] Publicar o repositório do código no GitHub (`github.com/LaminLeonardo/portfolio`) — o link já existe no site mas o repo ainda não foi criado
- [ ] Trocar `seudominio.com` no `robots.txt`/`sitemap.xml` pelo domínio real após o deploy

## Arquivos já gerados (estavam em /mnt/user-data/outputs/ na conversa anterior)
- `index.html` — arquivo principal do site (também existe como `00-preview-completo.html`, mesmo conteúdo)
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `DEPLOY.md`
- `curriculo-leonardo.pdf` — cópia do PDF real do currículo

## Como retomar
Numa nova conversa, eu (Claude) não terei acesso aos arquivos gerados na conversa anterior — o Leonardo precisa **reenviar o `index.html`** (ou pedir pra eu recriar do zero usando este contexto) pra eu continuar editando. A tarefa imediata ao retomar é: **adicionar a Peça N°05 (Sistema de Gestão Comercial, JavaScript+PHP+MySQL) e renumerar as peças seguintes.**
