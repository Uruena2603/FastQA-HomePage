import { Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { CurrencyProvider } from './context/CurrencyContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './i18n/LanguageContext'
import CheckoutPage from './pages/Checkout'
import Home from './pages/Home'
import AnalyzerPage from './pages/Analyzer'
import { PrivacyPage, TermsPage } from './pages/Legal'
import PricingPage from './pages/Pricing'
import ProductDetailPage from './pages/ProductDetail'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (prefersReduced || !isDesktop) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    document.documentElement.classList.add('lenis', 'lenis-smooth')

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return

    const scrollToSection = () => {
      const element = document.querySelector(location.hash)
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    }

    if (scrollToSection()) return

    const timeout = window.setTimeout(() => {
      scrollToSection()
    }, 160)

    return () => window.clearTimeout(timeout)
  }, [location.hash, location.pathname])

  useEffect(() => {
    if (location.hash) return
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <LanguageProvider>
          <CurrencyProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analizar" element={<AnalyzerPage />} />
              <Route path="/precios" element={<PricingPage />} />
              <Route path="/precios/:productId" element={<ProductDetailPage />} />
              <Route path="/checkout/:productId" element={<CheckoutPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/terminos" element={<TermsPage />} />
            </Routes>
            <Analytics />
            <SpeedInsights />
          </CurrencyProvider>
        </LanguageProvider>
      </ThemeProvider>
    </LazyMotion>
  )
}
