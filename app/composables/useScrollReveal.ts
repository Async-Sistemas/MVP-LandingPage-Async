interface ScrollRevealOptions {
  /** distância (px) de onde os elementos entram; padrão 24 */
  y?: number
  /** atraso (s) antes de iniciar a animação; padrão 0 */
  delay?: number
  /** anima os filhos diretos do elemento em sequência, em vez do elemento inteiro */
  stagger?: boolean
  /** roda assim que o componente monta, sem esperar o elemento entrar na tela
   *  (usado para conteúdo já visível no primeiro paint, como header/hero) */
  immediate?: boolean
}

/**
 * Anima a entrada (fade + leve translateY) de um elemento — ou dos seus
 * filhos diretos, em sequência — usando GSAP.
 *
 * Por padrão dispara via ScrollTrigger quando o elemento entra na viewport
 * (uma vez só); com `immediate: true` roda direto ao montar o componente.
 *
 * Usa `gsap.set()` + `.to()` (em vez de `.from()`): fixa o estado inicial
 * explicitamente e anima até o estado final, evitando os casos em que o
 * `.from()` precisa "olhar pra trás" pro valor natural do elemento — mais
 * previsível quando combinado com ScrollTrigger.
 *
 * Respeita `prefers-reduced-motion`: se o usuário pediu menos movimento no
 * sistema operacional, o conteúdo aparece direto, sem animação.
 */
export function useScrollReveal(elRef: Ref<HTMLElement | null>, options: ScrollRevealOptions = {}) {
  onMounted(() => {
    if (!import.meta.client || !elRef.value) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const { $gsap } = useNuxtApp()
    const targets = options.stagger ? Array.from(elRef.value.children) : elRef.value

    $gsap.set(targets, { opacity: 0, y: options.y ?? 24 })

    const toVars = {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: options.delay ?? 0,
      ease: 'power2.out',
      stagger: options.stagger ? 0.12 : 0
    }

    if (options.immediate) {
      $gsap.to(targets, toVars)
    } else {
      $gsap.to(targets, {
        ...toVars,
        scrollTrigger: {
          trigger: elRef.value,
          start: 'top 85%',
          once: true
        }
      })
    }
  })
}
