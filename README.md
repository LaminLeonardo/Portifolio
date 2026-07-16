# Leonardo Lamin — Portfólio

Portfólio pessoal em formato de galeria virtual imersiva. **100% HTML/CSS/JS vanilla — zero frameworks, zero build step.**

🔗 Deploy: (adicionar link após publicar na Vercel)

## Sobre

Desenvolvedor Backend .NET buscando posição Júnior, com ~3 anos de experiência prévia em front-end. O site é dividido em duas atmosferas visuais que se misturam conforme o scroll: um Ato 1 sóbrio/profissional (âmbar/azul-aço) e um Ato 2 cyberpunk (ciano/magenta), simbolizando a transição de front-end para backend/.NET.

Cada seção é tratada como uma "Peça" de uma galeria — numeração de catalogação de museu.

## Stack técnica

- HTML5, CSS3, JavaScript (vanilla)
- Google Fonts (Fraunces, Inter, JetBrains Mono) via CDN
- [qrcodejs](https://cdnjs.com/) via cdnjs
- APIs nativas: View Transitions API, Intersection Observer, Clipboard API

## Funcionalidades

- Corredor 3D no hero (perspectiva + mousemove)
- Cor ambiente interpolada em HSL conforme o scroll
- Timeline de trajetória com scroll-snap horizontal
- Galeria de projetos com casos em tela cheia (morph via View Transitions API, fallback de fade)
- Toggle PT/EN (i18n próprio, sem biblioteca)
- Modo Recrutador (versão condensada de uma tela só)
- Terminal de logs — easter egg (tecla `L`)
- HUD de status com relógio ao vivo
- Acessibilidade: `prefers-reduced-motion`, foco visível, `aria-hidden` no HUD
- Responsivo (mobile-first nos breakpoints críticos)

## Estrutura do repositório

```
.
├── index.html          # site completo (single-page)
├── 404.html             # página de erro (reconhecida automaticamente pela Vercel)
├── foto-leonardo.jpg    # retrato usado no hero
├── robots.txt
├── sitemap.xml
├── curriculo-leonardo.pdf   # baixado pelo botão "Documento" no site
└── README.md
```

## Deploy (Vercel)

1. Importar o repositório na Vercel
2. Framework preset: **Other** (sem build step)
3. Root directory: `/`
4. Nenhuma variável de ambiente necessária

Após o deploy, atualizar a URL real em `robots.txt` e `sitemap.xml` (hoje com placeholder `seudominio.com`).

## Pendências

- [x] Foto real no hero (`foto-leonardo.jpg`)
- [ ] Depoimentos reais na seção Recomendações
- [ ] Confirmar `curriculo-leonardo.pdf` está na raiz do repositório
- [ ] Trocar `seudominio.com` pelo domínio real após o deploy

## Contato

- E-mail: LeonardoLamin.Tech@gmail.com
- LinkedIn: [linkedin.com/in/leonardolamin](https://linkedin.com/in/leonardolamin)
- GitHub: [github.com/LaminLeonardo](https://github.com/LaminLeonardo)
