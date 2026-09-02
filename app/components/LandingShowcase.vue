<script setup lang="ts">
const { prototipos } = useLandingContent()

// título da seção entra em sequência, cards entram em stagger ao rolar até aqui
const headerRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
useScrollReveal(headerRef, { stagger: true })
useScrollReveal(gridRef, { stagger: true, y: 30, delay: 0.15 })
</script>

<template>
  <section id="modelos" class="border-t border-line bg-paper py-14 sm:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div ref="headerRef" class="max-w-xl">
        <span class="font-mono text-xs uppercase tracking-widest text-async-600 dark:text-async-300">modelos</span>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Protótipos por tipo de comércio
        </h2>
        <p class="mt-4 text-ink/70">
          Cada modelo já nasce pensado para um segmento. Você troca fotos, textos e cores
          pela identidade da sua loja — a estrutura que converte visita em cliente já está pronta.
        </p>
      </div>

      <div ref="gridRef" class="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <PrototypeCard
          v-for="item in prototipos"
          :key="item.nome"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>
