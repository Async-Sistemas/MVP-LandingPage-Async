<script setup lang="ts">
// ativa o Google Analytics (ID configurado em nuxt.config.ts, em
// scripts.registry.googleAnalytics) em todas as páginas do site
useScriptGoogleAnalytics()
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
