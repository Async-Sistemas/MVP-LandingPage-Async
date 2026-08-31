export default defineNuxtConfig({
  // Nuxt 4: código-fonte (components, composables, pages, plugins, app.vue...)
  // agora mora em ./app — só nuxt.config.ts, public/ e package.json ficam na raiz.
  compatibilityDate: '2026-08-31',
  devtools: { enabled: true },

  // Módulos usados no MVP:
  // - @nuxt/ui           -> componentes de UI + Tailwind v4
  // - @nuxt/fonts        -> carrega/otimiza as fontes (Sora, Inter, JetBrains Mono)
  // - @nuxtjs/color-mode -> alterna entre tema claro (padrão) e escuro
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/color-mode'],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',   // tema inicial: claro
    fallback: 'light',
    classSuffix: ''        // gera a classe "dark" (sem sufixo) no <html>
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Async Sistemas — protótipos de landing page para o seu comércio',
      // width=device-width + initial-scale=1 é o que garante que o layout
      // mobile-first (classes sem prefixo) seja de fato o que aparece no celular,
      // em vez do navegador simular uma tela desktop e dar zoom out.
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Async Sistemas cria protótipos de landing page prontos para padarias, barbearias, floriculturas e outros pequenos comércios. Escolha um modelo, personalize e publique.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
    }
  },

  fonts: {
    families: [
      { name: 'Sora', provider: 'google', weights: [500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] }
    ]
  }
})
