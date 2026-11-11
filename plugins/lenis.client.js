import Lenis from 'lenis'

export default ({ app }, inject) => {
  // Cek preferensi aksesibilitas
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Inisialisasi Lenis dengan konfigurasi performa dan durasi seimbang
  const lenis = new Lenis({
    duration: prefersReducedMotion ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !prefersReducedMotion,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.2,
    infinite: false,
  })

  // Loop requestAnimationFrame mandiri dan efisien
  let rafId
  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  // Tangani anchor link terprogram (misal: href="#section-id")
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const targetEl = document.querySelector(href)
      if (targetEl) {
        e.preventDefault()
        lenis.scrollTo(targetEl, {
          offset: 0,
          duration: prefersReducedMotion ? 0 : 1.2,
        })
      }
    })
  }

  // Reset scroll posisi saat navigasi halaman Nuxt
  if (app && app.router) {
    app.router.afterEach(() => {
      lenis.scrollTo(0, { immediate: true })
    })
  }

  // Cleanup handler jika window di-unload
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    })
  }

  // Inject ke konteks Vue (bisa diakses via this.$lenis)
  inject('lenis', lenis)
}
