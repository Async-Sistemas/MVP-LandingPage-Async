<script setup lang="ts">
const colorMode = useColorMode()
const { navLinks } = useLandingContent()
const { scrollToSection } = useSmoothScroll()

// leve fade + slide-down do cabeçalho ao carregar a página
const headerRef = ref<HTMLElement | null>(null)
useScrollReveal(headerRef, { immediate: true, y: -12 })

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value: boolean) => {
    colorMode.preference = value ? 'dark' : 'light'
  }
})

// controla a visibilidade do menu mobile (USlideover)
const isMobileMenuOpen = ref(false)

// rola suavemente até a seção e, se o menu mobile estiver aberto, fecha ele
function goToSection(href: string) {
  isMobileMenuOpen.value = false
  scrollToSection(href)
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
    <div ref="headerRef" class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <a href="#" class="flex items-center gap-3">
        <span class="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-black p-1.5">
          <img src="/logo.png" alt="Async Sistemas" class="h-full w-full object-contain" />
        </span>
        <span class="font-display text-lg font-semibold tracking-tight text-ink">
          Async<span class="font-normal text-grafite-500">Sistemas</span>
        </span>
      </a>

      <!-- navegação desktop: some abaixo de md e dá lugar ao menu do USlideover -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-mono text-xs uppercase tracking-widest text-ink/70 transition hover:text-ink"
          @click.prevent="goToSection(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <UButton
          :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
          color="neutral"
          variant="ghost"
          square
          :aria-label="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'"
          @click="isDark = !isDark"
        />

        <UButton
          color="async"
          size="sm"
          icon="i-simple-icons-whatsapp"
          class="hidden rounded-sm sm:inline-flex"
          @click="goToSection('#contato')"
        >
          Falar no WhatsApp
        </UButton>

        <!-- menu mobile: só existe visualmente abaixo de md; o gatilho (slot
             default) já abre o USlideover sozinho, sem precisar de @click -->
        <USlideover v-model:open="isMobileMenuOpen" title="Menu">
          <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            square
            aria-label="Abrir menu de navegação"
            class="md:hidden"
          />

          <template #body>
            <nav class="flex flex-col gap-1">
              <a
                v-for="link in navLinks"
                :key="link.href"
                :href="link.href"
                class="rounded-md px-3 py-3 font-mono text-sm uppercase tracking-widest text-ink/80 transition hover:bg-surface hover:text-ink"
                @click.prevent="goToSection(link.href)"
              >
                {{ link.label }}
              </a>
            </nav>

            <UButton
              color="async"
              size="lg"
              icon="i-simple-icons-whatsapp"
              block
              class="mt-6 rounded-sm"
              @click="goToSection('#contato')"
            >
              Falar no WhatsApp
            </UButton>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>
