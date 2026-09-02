<script setup lang="ts">
const { scrollToSection } = useSmoothScroll()

// entrada em sequência do selo, título, parágrafo, botões e rodapé da hero
const heroContentRef = ref<HTMLElement | null>(null)
useScrollReveal(heroContentRef, { immediate: true, stagger: true, y: 20 })
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- brilho decorativo em arco, ecoando o traço azul da logo -->
    <div class="arc-glow pointer-events-none absolute inset-x-0 top-0 h-72" />

    <div class="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div ref="heroContentRef" class="max-w-2xl">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-async-600 dark:text-async-300"
        >
          <UIcon name="i-lucide-store" class="h-3.5 w-3.5" />
          protótipos prontos para o seu comércio
        </span>

        <h1 class="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Sua loja merece uma
          <span class="text-async-500">vitrine</span>
          na internet.
        </h1>

        <p class="mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
          A Async Sistemas cria projetos e monta protótipos de página para todo tipo de comercios e etc. Escolha o que combina
          com sua loja, personalize com sua marca e publique ainda essa semana.
        </p>

        <!-- botões em coluna cheia no mobile (alvo de toque maior); lado a lado a partir de sm -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <UButton
            color="async"
            size="lg"
            trailing-icon="i-lucide-arrow-down"
            block
            class="rounded-sm sm:w-auto"
            @click="scrollToSection('#modelos')"
          >
            Ver protótipos
          </UButton>
          <UButton
            color="neutral"
            variant="outline"
            size="lg"
            block
            class="rounded-sm sm:w-auto"
            @click="scrollToSection('#contato')"
          >
            Falar com a gente
          </UButton>
        </div>

        <p class="mt-6 font-mono text-xs uppercase tracking-widest text-ink/50">
          sem mensalidade para ver os modelos · resposta em até 1 dia útil
        </p>
      </div>
    </div>
  </section>
</template>
