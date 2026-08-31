import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// O sufixo ".client" garante que este plugin roda só no navegador —
// o GSAP mexe diretamente com o DOM/scroll e não faz sentido no servidor.
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
