<script setup lang="ts">
// Imagem exibida quando o link do site é compartilhado (WhatsApp, Instagram,
// LinkedIn etc.) — gerada pelo nuxt-og-image, sem precisar de nenhum arquivo
// de imagem pronto. Usa o renderizador Takumi (sufixo ".takumi.vue"): um
// binário nativo único, mais rápido e mais confiável rodando em functions
// serverless do que o Satori (que depende de várias libs WASM separadas —
// yoga, opentype.js, harfbuzz —, e uma delas ficava de fora do pacote da
// function na Vercel, quebrando a imagem em produção).
defineProps<{
  title: string
  description: string
}>()

// quando essa imagem é gerada sob demanda numa function serverless isolada
// (sem contexto de navegador), uma URL relativa como "/logo.png" não é
// resolvível — por isso montamos a URL absoluta aqui.
const siteConfig = useSiteConfig()
const logoUrl = `${siteConfig.url}/logo.png`
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between bg-[#08080a] p-16"
    style="font-family: Sora, sans-serif"
  >
    <!-- cabeçalho: logo + nome da marca, igual ao AppHeader do site -->
    <div class="flex items-center gap-4">
      <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-white">
        <img :src="logoUrl" width="44" height="44" />
      </div>
      <div class="flex text-3xl font-semibold text-white">
        Async<span class="font-normal text-[#8d929b]">Sistemas</span>
      </div>
    </div>

    <!-- headline + descrição, ecoando o hero da página -->
    <div class="flex flex-col gap-6">
      <div class="flex text-6xl font-semibold leading-tight text-white" style="max-width: 900px">
        {{ title }}
      </div>
      <div class="flex text-2xl text-[#b3b7bd]" style="max-width: 800px">
        {{ description }}
      </div>
    </div>
  </div>
</template>
