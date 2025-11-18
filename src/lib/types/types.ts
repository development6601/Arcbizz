export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // Markdown or HTML
  featuredImage: string
  category: BlogCategory
  tags: string[]
  author: Author
  publishedAt: string
  updatedAt?: string
  readingTime: number // in minutes
  views: number
  likes: number
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  seo: SEOMetadata
  tableOfContents?: TOCItem[]
}

export interface Author {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  email?: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  postsCount: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  color: string // Tailwind color class
  postCount: number
}

export interface SEOMetadata {
  metaTitle: string
  metaDescription: string
  ogImage: string
  keywords: string[]
  canonicalUrl?: string
}

export interface TOCItem {
  id: string
  title: string
  level: number // h2 = 2, h3 = 3, etc.
  children?: TOCItem[]
}

export interface RelatedPost {
  id: string
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  category: string
  readingTime: number
  publishedAt: string
}

