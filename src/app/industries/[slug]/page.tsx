import { getIndustry } from '@/lib/data/industries-data'
import IndustryDetail from '@/components/customComponents/industries/IndustryDetail'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'
  const url = `${baseUrl}/industries/${slug}`

  if (!industry) {
    return {
      title: 'Industry Not Found | Arcbizz',
    }
  }

  return {
    title: industry.seo.metaTitle || `${industry.heroTitle} | Arcbizz`,
    description: industry.seo.metaDescription || industry.heroDescription,
    keywords: industry.seo.keywords,
    openGraph: {
      title: industry.seo.metaTitle || `${industry.heroTitle} | Arcbizz`,
      description: industry.seo.metaDescription || industry.heroDescription,
      url: url,
      siteName: 'Arcbizz',
      images: industry.heroImage
        ? [
          {
            url: industry.heroImage,
            width: 1200,
            height: 630,
            alt: industry.heroTitle,
          },
        ]
        : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.seo.metaTitle || `${industry.heroTitle} | Arcbizz`,
      description: industry.seo.metaDescription || industry.heroDescription,
      images: industry.heroImage ? [industry.heroImage] : [],
    },
    alternates: {
      canonical: url,
    },
  }
}

function generateIndustrySchema(industry: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.heroTitle,
    description: industry.heroDescription,
    image: industry.heroImage,
    provider: {
      '@type': 'Organization',
      name: 'Arcbizz',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: industry.name,
    url: `${baseUrl}/industries/${industry.slug}`,
  }
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    notFound()
  }

  const industrySchema = generateIndustrySchema(industry)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      <IndustryDetail industry={industry} />
    </>
  )
}

