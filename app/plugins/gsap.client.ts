import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// O sufixo ".client" garante que este plugin roda só no navegador —
// o GSAP mexe diretamente com o DOM/scroll e não faz sentido no servidor.
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // O ScrollTrigger calcula a posição de cada seção assim que o componente
  // monta. As fontes (@nuxt/fonts) ainda carregam de forma assíncrona depois
  // disso, e a troca da fonte fallback pela fonte final pode mudar a altura
  // do texto — recalcular uma vez, assim que as fontes terminarem de
  // carregar, evita que essas posições fiquem desatualizadas.
  document.fonts?.ready?.then(() => ScrollTrigger.refresh())

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
