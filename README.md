# Async Sistemas — landing page (MVP)

Protótipo de landing page, somente frontend, mobile-first, para apresentar
modelos de site a pequenos comércios (padaria, barbearia, floricultura,
petshop, cafeteria, salão de beleza). Construído com **Nuxt 4** (última major
estável), tema claro por padrão com opção de alternar para o tema escuro, e
menu de navegação dedicado para telas pequenas.

## Módulos utilizados

- **@nuxt/ui** — componentes de interface (`UButton`, `UIcon`, `USlideover`,
  `UApp`) e integra o Tailwind CSS v4 automaticamente.
- **@nuxt/fonts** — carrega e otimiza as fontes usadas no tema: `Sora`
  (títulos), `Inter` (texto) e `JetBrains Mono` (rótulos).
- **@nuxtjs/color-mode** — alterna entre tema claro (padrão) e escuro,
  persistindo a preferência do usuário.
- **gsap** — anima o scroll suave até cada seção quando um link de navegação
  é clicado (`composables/useSmoothScroll.ts`).

Nenhuma dependência de backend, API ou banco de dados — é só front-end
estático, gerado com `nuxt generate` (SSG).

## Estrutura

A partir do Nuxt 4, o código-fonte mora em `app/` — só `nuxt.config.ts`,
`public/` e os arquivos de configuração do projeto ficam na raiz.

```
nuxt.config.ts                     # config do Nuxt (módulos, meta tags, fontes)
public/logo.png                    # logo enviada (usada no cabeçalho)
app/
  app.vue                          # raiz da aplicação (UApp + NuxtPage)
  app.config.ts                    # tema do Nuxt UI (cores primária/secundária)
  pages/index.vue                  # monta a página única
  components/
    AppHeader.vue                  # cabeçalho fixo: logo, navegação desktop, menu mobile (USlideover) e toggle de tema
    LandingHero.vue                # seção principal (headline + CTAs)
    PrototypeCard.vue              # cartão de protótipo (usado na vitrine)
    LandingShowcase.vue            # grade de protótipos por segmento
    LandingHowItWorks.vue          # passos "como funciona"
    LandingCta.vue                 # chamada final para contato
    AppFooter.vue                  # rodapé
  composables/
    useLandingContent.ts           # links de navegação, protótipos, passos e número de WhatsApp — fonte única de dados
    useSmoothScroll.ts             # rolagem suave até uma seção via GSAP
  plugins/gsap.client.ts           # registra o GSAP (só no navegador)
  assets/css/main.css              # paleta de cores (clara + variante .dark) e tipografia
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a versão estática de produção (deploy em qualquer hospedagem
estática — Netlify, Vercel, GitHub Pages etc.):

```bash
npm run generate
```

Os arquivos ficam em `.output/public`.

## Mobile-first

O layout é construído mobile-first: as classes Tailwind sem prefixo definem
o estilo para telas pequenas, e os prefixos `sm:`/`md:`/`lg:` só ajustam o
que muda em telas maiores. O item mais importante dessa abordagem é o menu
de navegação do `AppHeader.vue` — abaixo de `md` a navegação horizontal
desaparece e dá lugar a um botão de menu que abre um `USlideover` com os
mesmos links e o CTA de WhatsApp.

## Tema claro/escuro

O botão de sol/lua no cabeçalho (`AppHeader.vue`) alterna a preferência do
usuário via `useColorMode()`. As cores de fundo/texto usam os tokens
`--color-paper` e `--color-ink`, definidos em `assets/css/main.css` e
sobrescritos dentro do seletor `.dark` — por isso o tema muda em todo o site
sem precisar duplicar classes `dark:` em cada componente.

## Personalização rápida

- **Logo**: troque o arquivo `public/logo.png`.
- **Cores**: ajuste os tokens `--color-*` em `app/assets/css/main.css`
  (escala `async` = azul primário, `grafite` = cinza/prata secundário).
- **Textos, protótipos, passos e links de navegação**: edite
  `app/composables/useLandingContent.ts` — é a única fonte desses dados,
  usada tanto no menu desktop quanto no mobile.
- **Número do WhatsApp**: troque a constante `WHATSAPP_NUMBER` em
  `app/composables/useLandingContent.ts` (hoje é um placeholder,
  `5500000000000`).
