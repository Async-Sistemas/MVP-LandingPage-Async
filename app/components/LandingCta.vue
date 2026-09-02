<script setup lang="ts">
const { whatsappUrl } = useLandingContent()

// texto e botão entram em sequência ao rolar até a seção de contato
const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { stagger: true, y: 20 })
</script>

<template>
  <section id="contato" class="bg-black py-14 text-white sm:py-20">
    <div ref="contentRef" class="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:gap-8 sm:px-6 md:flex-row md:items-center md:justify-between">
      <div class="flex items-start gap-5">
        <span
          class="mt-1 hidden h-16 w-16 flex-none items-center justify-center rounded-full border border-async-400/50 font-mono text-[10px] font-semibold uppercase tracking-widest text-async-300 sm:flex"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-async-400 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-async-400" />
          </span>
          <span class="sr-only">online</span>
        </span>
        <div>
          <h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos abrir a vitrine da sua loja?
          </h2>
          <p class="mt-3 max-w-md text-white/70">
            Entre em contato informando qual é o seu comércio. A Async Sistemas responde
            com os protótipos que mais combinam com o seu negócio.
          </p>
        </div>
      </div>

      <UButton
        :href="whatsappUrl"
        target="_blank"
        color="async"
        size="xl"
        icon="i-simple-icons-whatsapp"
        block
        class="rounded-sm md:w-auto"
      >
        Chamar no WhatsApp
      </UButton>
    </div>
  </section>
</template>
