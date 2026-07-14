import { SITE_NAME, SITE_URL } from '../constants/seo'
import type { Locale } from '../i18n/LanguageContext'

interface FaqEntry {
  q: string
  a: string
}

interface BuildHomeStructuredDataArgs {
  locale: Locale
  description: string
  faqItems: FaqEntry[]
}

export function buildHomeStructuredData({
  locale,
  description,
  faqItems,
}: BuildHomeStructuredDataArgs) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description,
        inLanguage: locale,
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description,
        logo: `${SITE_URL}/logo.png`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  }
}
