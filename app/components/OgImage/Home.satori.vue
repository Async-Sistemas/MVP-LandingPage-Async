<script setup lang="ts">
// Imagem exibida quando o link do site é compartilhado (WhatsApp, Instagram,
// LinkedIn etc.) — gerada em build time pelo nuxt-og-image, sem precisar de
// nenhum arquivo de imagem pronto. Renderizada pelo Satori, que só entende um
// subconjunto de CSS (flexbox), por isso o layout aqui é simples de propósito.
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between bg-[#08080a] p-16"
    style="font-family: Sora, sans-serif"
  >
    <!-- cabeçalho: logo + nome da marca, igual ao AppHeader do site -->
    <div class="flex items-center gap-4">
      <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-white">
        <img src="/logo.png" width="44" height="44" />
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
