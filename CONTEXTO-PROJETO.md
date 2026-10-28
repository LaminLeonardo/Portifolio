# Contexto: Portfólio do Leonardo Lamin

> Fonte da verdade do conteúdo do site. Desde a fase 02, a base é o **currículo novo** (`projeto\curriculo\LeonardoLamin.pdf`, servido no site como `LeonardoLaminResume.pdf`), com uma exceção: o Sistema de Gestão Comercial é **JavaScript + PHP + MySQL** (o PDF diz Java, e está errado).

## Quem sou eu (Leonardo)
- Nome completo: **Leonardo Lamin**
- WhatsApp: (47) 99930-4752 (é o único telefone que vai no site)
- E-mail: LeonardoLamin.Tech@gmail.com
- LinkedIn: linkedin.com/in/leonardolamin
- GitHub: github.com/LaminLeonardo
- Portfólio: https://laminleonardoportifolio.vercel.app/
- Localização: Joinville — SC
- Desenvolvedor de Software na BMA Sistemas e estudante de Engenharia de Software na Universidade Católica de Santa Catarina (Católica SC)

## Posicionamento profissional
- Título: **Desenvolvedor Full Stack**, linha de apoio **.NET · React · SQL**
- **Sem senioridade** em nenhum lugar do site (nenhum nível de cargo). "Backend" só como camada técnica (ex.: "front e back"), nunca como identidade.
- Status: **Aberto a oportunidades Full Stack**
- O que procura: **uma vaga Full Stack com .NET e React ou Angular**
- Resumo (do PDF): background em suporte técnico especializado, o que ajuda a entender o problema do negócio antes de definir a solução. Constrói do banco à tela: C# e .NET no back, React no front, SQL Server/PostgreSQL nos dados.
- Também tem ~3 anos de front-end (HTML/CSS/JS), desde fevereiro/2023. O próprio site é a prova disso.

## Formação e trajetória real (cronologia)
- **2022–2024**: SENAI — Técnico em Desenvolvimento de Software
- **01/2023–02/2025**: SZ Soluções — Analista de Suporte (no PDF o título inclui o nível; no site fica sem senioridade)
- **2025–2029 (em curso, noturno)**: Católica SC — Bacharelado em Engenharia de Software
- **03/2025–presente**: BMA Sistemas — **Desenvolvedor de Software**

## Experiência — BMA Sistemas (currículo novo)
- Ferramenta própria de provisionamento automático de clientes em C# (Windows Forms) com integração ao Active Directory: processo de **45 para 3 minutos (−93%)**.
- Integração da ferramenta com a biblioteca de clientes: ao liberar um ambiente, os dados da plataforma web se atualizam sozinhos (sem etapas manuais duplicadas).
- Aplicação web da biblioteca de clientes: informações que estavam só no servidor ficaram visíveis a todos; acesso de **4 para 25 colaboradores**.
- Front e back do módulo de banco de horas do novo Portal Web, a partir do legado.
- Dashboard analítico em Supabase (PostgreSQL) com apuração de ponto em tempo real para **1.000+ clientes** (antes, 5 minutos por consulta; agora instantâneo).
- Tela de monitoramento de integrações com e-mail automático quando há erro (menos tempo para detectar falhas).
- Sustentação dos sistemas com SQL Server, PostgreSQL e MySQL (queries complexas, manutenção, extração de dados), ODBC e IIS.
- ⚠️ O Resumo do PDF diz "4 para 20 pessoas", mas a Experiência diz "4 para 25". O site usa **4 → 25** (pedido da fase 02).

## Experiência — SZ Soluções
- Pipeline de KPIs de atendimento automatizado em C#, eliminando 100% da entrada manual de dados (currículo anterior).
- Dashboards mensais em Power BI e Looker Studio para gestão e diretoria (volume, médias, SLAs).
- Queries SQL/MySQL para investigações técnicas e auditorias de SLA no ERP TOTVS Datasul.
- Gerenciamento de chamados no ServiceNow dentro dos SLAs: triagem, priorização e ponte entre usuários e desenvolvimento.

## Números usados no site
- **−93%** no tempo de provisionar um cliente (de 45 para 3 minutos)
- **3 min** por provisionamento (antes, 45)
- **4 → 25** pessoas com acesso aos dados de clientes (mostrado assim, sem porcentagem)
- **1.000+** clientes com apuração de ponto em tempo real (antes, 5 minutos por consulta)
- **100%** da entrada manual eliminada no pipeline de KPIs (SZ)

## Idiomas
Português (nativo) · Inglês (intermediário — leitura técnica fluente)

## Stack real completa (currículo novo)
- **Back**: C#, .NET / .NET Core / .NET 8, ASP.NET MVC, Windows Forms, Microsserviços, APIs REST, Node.js, Java, CI/CD
- **Front**: HTML, CSS, JavaScript, TypeScript, EJS, React, Tailwind
- **Banco de dados**: SQL Server, PostgreSQL, MySQL, Sequelize ORM, Supabase
- **Infra & SaaS**: Active Directory, IIS, ODBC, Provisionamento SaaS, Cloud
- **BI & Dados**: Power BI, Looker Studio, DAX
- **Boas práticas**: Clean Code, SOLID (SRP), Fail-Fast, ACID, AES
- **Metodologias e ferramentas**: Agile (Scrum / Kanban), Demand Management, Git/GitHub, Jira, ServiceNow, ERP TOTVS Datasul

## Projetos pessoais reais (não são do emprego)
1. **MoneyHub** — controle financeiro com histórico, dashboards, projeções, simulação de gastos, autenticação e geração de relatórios; integra uma API de investimentos para cotações reais de ações e FIIs. Stack: .NET 8 (C#) e Node.js 18+ no back, React, TypeScript e Tailwind no front, Supabase no banco. **Ano e link ainda não informados.**
2. **Rede Social — Comunidade Web** (2025, **em desenvolvimento**) — Node.js, EJS, Sequelize ORM, MySQL. Autenticação, feed de publicações e interações; arquitetura MVC. Repositório: github.com/LaminLeonardo
3. **Sistema de Gestão Comercial** (SENAI, 2022–2024) — comandas/pedidos, estoque, relatórios gerenciais, fluxo de caixa e leitura de código de barras, com MySQL centralizado.
   ⚠️ **IMPORTANTE**: o currículo em PDF diz "Java", mas o Leonardo confirmou que foi feito em **JavaScript e PHP** — usar essa correção, não o que está no PDF.

---

# O que estamos construindo

Um **portfólio pessoal em HTML/CSS/JS puro** (sem frameworks, sem build). Desde a fase 01 (branch `redesign-universo`), o visual é o **"Horizonte de Eventos"**.

## Conceito visual (atual)
- Um **buraco negro desenhado em `<canvas>` 2D puro** fica fixo no fundo (`assets/js/universo.js`): estrelas com desvio gravitacional, disco de acreção com lado mais brilhante (Doppler), arco de luz por cima da sombra, partículas que caem em espiral, ondas de choque e brilho que aumenta quando ele "come" partículas.
- Forte só no hero (à direita; centralizado no topo no celular). Fora do hero entra em "modo leitura": vai para a borda direita (topo no celular), metade fora da tela, menor, mais fraco e mais lento.
- O conteúdo flutua em **painéis escuros translúcidos** (`--panel` com alpha 0,8 e blur de 18 px). Paleta: fundo `#03040A`, laranja `#FFB45E`/`#FF6B3D`, azul-claro `#8FB8FF`, texto `#ECEEF6`/`#A3A9C2`.
- Tipografia: **Unbounded** (títulos), **Manrope** (corpo), **IBM Plex Mono** (rótulos).
- Desempenho: `devicePixelRatio` limitado a 1,5, menos partículas abaixo de 860 px, no máximo 300 partículas de clique. Com `prefers-reduced-motion` a animação continua em modo calmo (~40% da velocidade), nunca parada.

## Estrutura de telas (todas no `index.html`, scroll vertical)
1. **Hero**: nome, "Desenvolvedor Full Stack", ".NET · React · SQL", frase de abertura, "Aberto a oportunidades Full Stack", botões "Ver projetos" e "Baixar currículo", dica "clique no espaço" (some após o primeiro clique).
2. **Sobre** (`#sobre`): bio em 3 parágrafos + ficha (dois contadores calculados via JS: front-end desde 02/2023, .NET desde 03/2025; formação, idiomas, status) num painel; foto em outro. Abaixo, os quatro números: −93%, 3 min, 4 → 25, 1.000+.
3. **Projetos** (`#projetos`): seis cards, nesta ordem: Provisionamento e plataforma de clientes (`case1`), **MoneyHub (`case6`)**, Pipeline de KPIs (`case2`), Rede Social (`case3`), Gestão Comercial (`case5`), Este site (`case4`). Clicar puxa o card e abre o caso num painel por cima. O caso 1 tem o trecho C# ilustrativo, com o aviso de que não é código de produção.
4. **Stack** (`#orbita`): três painéis — interna/uso diário (C#, .NET, SQL Server, APIs REST, PostgreSQL), média/projetos reais (React, TypeScript, ASP.NET MVC, Windows Forms, Supabase, Active Directory, MySQL, IIS) e externa/apoio (Node.js, Tailwind, JavaScript, HTML/CSS, Power BI, Looker Studio, Git, Scrum/Kanban) — e a linha "Boas práticas: Clean Code, SOLID, Fail-Fast, ACID". Clicar numa tecnologia faz o chip cair em espiral no buraco negro e voltar.
5. **Trajetória** (`#trajetoria`): SENAI 2022 (sistema de gestão em JavaScript + PHP), SZ Soluções 2023, Católica SC 2025, BMA 2025 (Desenvolvedor de Software), Hoje.
6. **Recomendações** (`#recomendacoes`): **dois depoimentos reais**, mantidos no original: Daniel Fernando Gonçalves e Carlos Eduardo Chierighini de Siqueira (ambos "trabalhou na mesma equipe que Leonardo"). Só mudam com texto real enviado pelo Leonardo.
7. **Contato** (`#contato`): e-mail, WhatsApp, LinkedIn, GitHub, código-fonte (`github.com/LaminLeonardo/Portifolio`), currículo e QR code do LinkedIn (`qrcodejs` via cdnjs).

## Funcionalidades extras
- **PT/EN**: dicionário `TRANSLATIONS{}` em `assets/js/site.js` + atributos `data-i18n` (texto) e `data-i18n-attr` (atributos). O dicionário é aplicado também ao carregar a página.
- **Deep links** `#case1` a `#case6`, botão "copiar link", Esc fecha o painel e devolve o foco ao card.
- **Pausar universo**: botão na navegação.
- **Modo Recrutador**: ficha de uma tela no estilo do protótipo D (resumo com contato e currículo, "em 30 segundos", experiência em tópicos e competências). Pausa o universo enquanto está aberto.
- **Terminal de logs** (easter egg, tecla `L`), em laranja e azul-claro sobre preto.
- **404.html** no mesmo tema: buraco negro só em CSS e "Esta peça não está em exibição".
- **SEO**: `robots.txt`, `sitemap.xml`, `canonical` e `og:url` com o domínio da Vercel.

## Stack técnica do site
**100% HTML/CSS/JS vanilla — zero frameworks, zero build step.** Arquivos: `index.html` (só HTML), `assets/css/site.css`, `assets/js/universo.js` (canvas), `assets/js/site.js` (interação). Externos: Google Fonts e `qrcodejs@1.0.0` (cdnjs). APIs: Canvas 2D, `requestAnimationFrame`, Web Animations API, Clipboard API, `inert`.

## Deploy
- **No ar** na Vercel: https://laminleonardoportifolio.vercel.app/ (preset "Other", sem build, deploy automático a partir do GitHub).
- Repositório: https://github.com/LaminLeonardo/Portifolio. A `main` publica em produção; outras branches geram link de prévia.

## Pendências que só o Leonardo pode resolver
- [x] Foto real (`foto-leonardo.jpg`)
- [x] Recomendações reais (dois depoimentos publicados)
- [x] Repositório publicado no GitHub
- [x] Domínio real no `robots.txt`/`sitemap.xml`
- [x] Sigla da universidade corrigida para "Católica SC" (Universidade Católica de Santa Catarina)
- [ ] Imagem de prévia (`og:image`/`twitter:image`) real, hoje um placeholder
- [ ] MoneyHub: ano e link do repositório
- [ ] O próprio PDF do currículo ainda traz o título antigo (back-end com nível de cargo), "Java" no SENAI e "4 para 20" no Resumo (a Experiência diz 25)
