import SeoHelmet from '../components/SeoHelmet'
import { buildHomeStructuredData } from '../lib/structured-data'
import { useLanguage, useT } from '../i18n/LanguageContext'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import AnalyzerTeaser from '../components/AnalyzerTeaser'
import PricingTeaser from '../components/PricingTeaser'
import Services from '../components/Services'
import About from '../components/About'
import Method from '../components/Method'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const t = useT()
  const { locale } = useLanguage()
  const faqItems = t<{ q: string; a: string }[]>('faq.items')

  return (
    <>
      <SeoHelmet
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        structuredData={buildHomeStructuredData({
          locale,
          description: t('seo.homeDescription'),
          faqItems: Array.isArray(faqItems) ? faqItems : [],
        })}
      />
      <main>
        <Hero />
        <Trust />
        <AnalyzerTeaser />
        <PricingTeaser />
        <Services />
        <About />
        <Method />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
