import { getService } from '@/lib/data/service-data'  
import ServiceDetail from '@/components/customComponents/services/ServiceDetail'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found - Arcbizz',
      description: 'The requested service page could not be found.',
    }
  }

  return {
    title: `${service.seo.metaTitle} | Arcbizz`,
    description: service.seo.metaDescription,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/services/${service.slug}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: service.heroTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.metaTitle,
      description: service.seo.metaDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/services/${service.slug}`,
    },
  }
}

function generateServiceSchema(service: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.heroTitle,
    "description": service.heroDescription,
    "provider": {
      "@type": "Organization",
      "name": "Arcbizz",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://arcbizz.com",
    },
    "areaServed": "Worldwide",
    "serviceType": service.category,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": service.pricing?.startingFrom?.replace(/[^0-9]/g, '') || "15000",
      "availability": "https://schema.org/InStock",
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema(service)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetail service={service} />
    </>
  )
}

