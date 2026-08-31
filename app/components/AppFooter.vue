<script setup lang="ts">
const ano = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-paper py-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-ink/50 sm:flex-row sm:px-6 sm:text-left">
      <span class="font-mono uppercase tracking-widest">Async Sistemas — protótipos para pequenos comércios</span>
      <span>© {{ ano }} Async Sistemas. Todos os direitos reservados.</span>
    </div>
  </footer>
</template>
