import { getCaseStudy } from '@/lib/data/case-studies-data'
import CaseStudyDetail from '@/components/customComponents/caseStudy/CaseStudyDetail'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const caseStudy = getCaseStudy(id)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'
  const url = `${baseUrl}/case-study/${id}`

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Arcbizz',
    }
  }

  return {
    title: `${caseStudy.heroTitle} | Arcbizz`,
    description: caseStudy.heroDescription,
    keywords: [
      caseStudy.category,
      caseStudy.quickStats.industry,
      ...caseStudy.quickStats.technologies,
      'case study',
      'software development',
      'web development',
    ],
    openGraph: {
      title: `${caseStudy.heroTitle} | Arcbizz`,
      description: caseStudy.heroDescription,
      url: url,
      siteName: 'Arcbizz',
      images: caseStudy.heroImage
        ? [
          {
            url: caseStudy.heroImage,
            width: 1200,
            height: 630,
            alt: caseStudy.heroTitle,
          },
        ]
        : [],
      type: 'article',
      section: 'Case Study',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.heroTitle} | Arcbizz`,
      description: caseStudy.heroDescription,
      images: caseStudy.heroImage ? [caseStudy.heroImage] : [],
    },
    alternates: {
      canonical: url,
    },
  }
}

function generateCaseStudySchema(caseStudy: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.heroTitle,
    description: caseStudy.heroDescription,
    image: caseStudy.heroImage,
    articleSection: 'Case Study',
    about: {
      '@type': 'Thing',
      name: caseStudy.category,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Arcbizz',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/case-study/${caseStudy.id}`,
    },
    keywords: [
      caseStudy.category,
      caseStudy.quickStats.industry,
      ...caseStudy.quickStats.technologies,
    ].join(', '),
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params
  const caseStudy = getCaseStudy(id)

  if (!caseStudy) {
    notFound()
  }

  const caseStudySchema = generateCaseStudySchema(caseStudy)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <CaseStudyDetail caseStudy={caseStudy} />
    </>
  )
}
