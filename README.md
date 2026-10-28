# Leonardo Lamin — Portfólio

Portfólio pessoal com o visual **"Horizonte de Eventos"**: um buraco negro animado em canvas fica no fundo da página e reage aos cliques. **100% HTML/CSS/JS vanilla — zero frameworks, zero build step.**

🔗 Deploy: https://laminleonardoportifolio.vercel.app/

## Sobre

Desenvolvedor Full Stack (.NET · React · SQL) que constrói do banco à tela, com ~3 anos de front-end e .NET em produção desde 03/2025. Busca uma vaga Full Stack com .NET e React ou Angular. O conteúdo flutua em painéis escuros translúcidos sobre o espaço. Clicar no espaço, num projeto ou numa tecnologia solta partículas que caem em espiral no buraco negro, e ele brilha mais a cada "refeição".

## Stack técnica

- HTML5, CSS3, JavaScript (vanilla)
- Canvas 2D puro para o buraco negro (sem bibliotecas)
- Google Fonts (Unbounded, Manrope, IBM Plex Mono) via CDN
- [qrcodejs 1.0.0](https://cdnjs.com/libraries/qrcodejs) via cdnjs (QR code do LinkedIn)

## Funcionalidades

- Buraco negro em canvas: estrelas com desvio gravitacional, disco de acreção com lado mais brilhante, arco de luz, partículas de clique e ondas de choque
- Botão "Pausar universo" e modo calmo com `prefers-reduced-motion` (a animação desacelera, não para)
- Projetos que são "puxados" pelo buraco negro e abrem num painel por cima
- Deep links `#case1` a `#case5`, botão "copiar link" e Esc devolvendo o foco ao card
- Stack em órbitas (param no hover; clicar numa tecnologia solta partículas)
- Toggle PT/EN (i18n próprio, sem biblioteca)
- Modo Recrutador: ficha de uma tela só, que pausa o universo enquanto está aberta
- Terminal de logs — easter egg (tecla `L`)
- Acessibilidade: foco visível, link "pular para o conteúdo", diálogos com `aria-modal` e fundo `inert`
- Responsivo, sem rolagem horizontal em 375 px

## Estrutura do repositório

```
.
├── index.html                 # só o HTML da página
├── assets/
│   ├── css/site.css           # todo o estilo
│   └── js/
│       ├── universo.js        # canvas do buraco negro (API window.Universo)
│       └── site.js            # i18n (TRANSLATIONS), casos, recrutador, terminal, órbitas
├── 404.html                   # página de erro temática (reconhecida pela Vercel)
├── foto-leonardo.jpg
├── LeonardoLaminResume.pdf    # baixado pelos botões de currículo
├── robots.txt
├── sitemap.xml
├── CONTEXTO-PROJETO.md        # fonte da verdade do conteúdo
└── README.md
```

## Deploy (Vercel)

1. Repositório importado na Vercel
2. Framework preset: **Other** (sem build step)
3. Root directory: `/`
4. Nenhuma variável de ambiente

Cada push na `main` publica em produção. Branches geram link de prévia.

## Pendências

- [ ] Imagem de prévia real (`og:image` / `twitter:image`) — hoje é um placeholder

## Contato

- E-mail: LeonardoLamin.Tech@gmail.com
- LinkedIn: [linkedin.com/in/leonardolamin](https://linkedin.com/in/leonardolamin)
- GitHub: [github.com/LaminLeonardo](https://github.com/LaminLeonardo)
