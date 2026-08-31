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
      scrollTo: { y: target, offsetY: offset }
    })
  }

  return { scrollToSection }
}
