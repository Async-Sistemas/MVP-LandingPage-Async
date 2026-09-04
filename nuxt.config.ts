export default defineNuxtConfig({
  // Nuxt 4: código-fonte (components, composables, pages, plugins, app.vue...)
  // agora mora em ./app — só nuxt.config.ts, public/ e package.json ficam na raiz.
  compatibilityDate: '2026-08-31',
  devtools: { enabled: true },

  // Módulos usados no MVP:
  // - @nuxt/ui           -> componentes de UI + Tailwind v4
  // - @nuxt/fonts        -> carrega/otimiza as fontes (Sora, Inter, JetBrains Mono)
  // - @nuxtjs/color-mode -> alterna entre tema claro (padrão) e escuro
  // - @nuxtjs/seo        -> canonical, Open Graph, Twitter Card, sitemap.xml,
  //                         robots.txt e dados estruturados (schema.org), tudo
  //                         a partir da config `site`/`schemaOrg` abaixo
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/color-mode', '@nuxtjs/seo'],

  css: ['~/assets/css/main.css'],

  // Dados centrais do site: usados pelo @nuxtjs/seo para montar a tag
  // canônica, og:url, og:site_name, sitemap.xml e robots.txt automaticamente.
  site: {
    url: 'https://www.asyncsistemas.com.br',
    name: 'Async Sistemas',
    description:
      'Async Sistemas cria protótipos de landing page prontos para padarias, barbearias, floriculturas e outros pequenos comércios. Escolha um modelo, personalize e publique.',
    defaultLocale: 'pt-BR'
  },

  // Identidade da empresa em schema.org (JSON-LD) — ajuda o Google a entender
  // que a Async Sistemas é uma organização, não só uma página qualquer.
  // Usamos "Organization" (não "LocalBusiness") porque o serviço é prestado
  // remotamente, sem um endereço físico que o cliente visite.
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Async Sistemas',
      logo: '/logo.png',
      description:
        'Criação de protótipos de landing page para pequenos comércios: padarias, barbearias, floriculturas, petshops, cafeterias e salões de beleza.'
    }
  },

  colorMode: {
    preference: 'light',   // tema inicial: claro
    fallback: 'light',
    classSuffix: ''        // gera a classe "dark" (sem sufixo) no <html>
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      // sem o nome da marca aqui: o @nuxtjs/seo já adiciona "| Async Sistemas"
      // no final automaticamente (a partir de site.name), então repetir o
      // nome aqui duplicaria ("Async Sistemas — ... | Async Sistemas")
      title: 'Protótipos de landing page para o seu comércio',
      // width=device-width + initial-scale=1 é o que garante que o layout
      // mobile-first (classes sem prefixo) seja de fato o que aparece no celular,
      // em vez do navegador simular uma tela desktop e dar zoom out.
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Async Sistemas cria protótipos de landing page prontos para padarias, barbearias, floriculturas e outros pequenos comércios. Escolha um modelo, personalize e publique.'
        },
        // combina a cor da barra do navegador (mobile) com o tema ativo
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#08080a', media: '(prefers-color-scheme: dark)' },
        // confirma a propriedade do site no Google Search Console
        { name: 'google-site-verification', content: 'w-4pjwxnWDdcbWpZdy6kya-tg_XQUNiYekOb_lewi50' }
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
