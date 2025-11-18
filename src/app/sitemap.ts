import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/data/blog-data'
import { caseStudies } from '@/lib/data/case-studies-data'
import { getAllIndustries } from '@/lib/data/industries-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'
  
  // Get all blog posts
  const posts = await getAllPosts()
  
  // Create sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post?.id}`,
    lastModified: post?.updatedAt ? new Date(post?.updatedAt) : new Date(post?.publishedAt),
    changeFrequency: 'weekly',
    priority: post?.featured ? 0.9 : 0.7,
  }))
  
  // Create sitemap entries for blog categories
  const categories = [...new Set(posts.map(post => post?.category?.slug))]
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  
  // Create sitemap entries for case studies
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-study/${caseStudy.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  // Create sitemap entries for industries
  const industries = getAllIndustries()
  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hire-developers`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apply-for-job`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-arcbizz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
  
  return [...staticPages, ...categoryEntries, ...blogEntries, ...caseStudyEntries, ...industryEntries]
}

