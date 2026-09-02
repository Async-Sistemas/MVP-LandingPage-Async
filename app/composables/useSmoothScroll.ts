/**
 * Rola a página até um seletor (ex: '#modelos') com easing do GSAP,
 * descontando a altura do header fixo.
 */
export function useSmoothScroll() {
  const scrollToSection = (target: string, offset = 80) => {
    if (!import.meta.client) return

    const { $gsap } = useNuxtApp()
    $gsap.to(window, {
      duration: 1.1,
      ease: 'power3.inOut',
      scrollTo: { y: target, offsetY: offset },
      // cancela um scroll em andamento se o usuário clicar em outro link
      // no meio da animação, em vez de deixar as duas tentativas brigarem
      overwrite: true
    })
  }

  return { scrollToSection }
}
