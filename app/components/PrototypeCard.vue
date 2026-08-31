<script setup lang="ts">
defineProps<{
  nome: string
  segmento: string
  descricao: string
  icone: string
  corDestaque: string
}>()
</script>

<template>
  <article class="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition hover:-translate-y-1 hover:shadow-lg hover:shadow-async-500/10">
    <div class="h-1 w-full" :style="{ backgroundColor: corDestaque }" />

    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="flex items-center justify-between">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-md text-white"
          :style="{ backgroundColor: corDestaque }"
        >
          <UIcon :name="icone" class="h-5 w-5" />
        </span>
        <span class="font-mono text-[11px] uppercase tracking-widest text-ink/40">
          {{ segmento }}
        </span>
      </div>

      <h3 class="font-display text-xl font-semibold text-ink">
        {{ nome }}
      </h3>
      <p class="flex-1 text-sm leading-relaxed text-ink/70">
        {{ descricao }}
      </p>

      <a
        href="#contato"
        class="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-async-600 transition group-hover:gap-2 dark:text-async-300"
      >
        Ver protótipo
        <UIcon name="i-lucide-arrow-right" class="h-3.5 w-3.5" />
      </a>
    </div>
  </article>
</template>
