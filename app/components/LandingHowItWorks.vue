<script setup lang="ts">
const { passos } = useLandingContent()

// título da seção entra em sequência, passos entram em stagger ao rolar até aqui
const headerRef = ref<HTMLElement | null>(null)
const stepsRef = ref<HTMLElement | null>(null)
useScrollReveal(headerRef, { stagger: true })
useScrollReveal(stepsRef, { stagger: true, y: 30, delay: 0.15 })
</script>

<template>
  <section id="como-funciona" class="border-t border-line bg-surface py-14 sm:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div ref="headerRef" class="max-w-xl">
        <span class="font-mono text-xs uppercase tracking-widest text-async-600 dark:text-async-300">como funciona</span>
        <h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Do modelo ao ar em 3 passos
        </h2>
      </div>

      <ol ref="stepsRef" class="mt-8 grid gap-6 border-t border-dashed border-line pt-10 sm:mt-12 sm:gap-8 md:grid-cols-3">
        <li v-for="passo in passos" :key="passo.numero" class="relative">
          <span class="font-mono text-sm text-async-500">{{ passo.numero }}</span>
          <h3 class="mt-2 font-display text-xl font-semibold text-ink">
            {{ passo.titulo }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-ink/70">
            {{ passo.texto }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
