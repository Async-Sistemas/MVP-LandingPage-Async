<script setup lang="ts">
// imagem de compartilhamento (Open Graph) desta página — ver
// app/components/OgImage/Home.satori.vue
defineOgImage('Home', {
  title: 'Sua loja merece uma vitrine na internet.',
  description: 'Protótipos de landing page prontos para o seu comércio.'
})
</script>

<template>
  <div class="min-h-screen bg-paper font-sans text-ink">
    <AppHeader />
    <main>
      <LandingHero />
      <LandingShowcase />
      <LandingHowItWorks />
      <LandingCta />
    </main>
    <AppFooter />
  </div>
</template>
