import { Helmet } from 'react-helmet-async'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '../constants/seo'

interface SeoHelmetProps {
  title?: string
  description?: string
  path?: string
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}

export default function SeoHelmet({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path = '/',
  structuredData,
}: SeoHelmetProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  )
}
