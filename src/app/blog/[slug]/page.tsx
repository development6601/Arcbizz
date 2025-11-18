import { notFound } from 'next/navigation'
import { getPostById, getRelatedPosts } from '@/lib/data/blog-data'
import { ArticleHeader } from '@/components/customComponents/blog-detail/article-header'
import { ArticleContent } from '@/components/customComponents/blog-detail/article-content'
import { TableOfContents } from '@/components/customComponents/blog-detail/table-of-contents'
import { AuthorCard } from '@/components/customComponents/blog-detail/author-card'
import { SocialShare } from '@/components/customComponents/blog-detail/social-share'
import { RelatedPosts } from '@/components/customComponents/blog-detail/related-posts'
import { ReadingProgress } from '@/components/customComponents/blog-detail/reading-progress'
import { NewsletterCTA } from '@/components/customComponents/blog-detail/newsletter-cta'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Author } from '@/lib/types/types'

function generateArticleSchema(post: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title,
    description: post?.seo?.metaDescription,
    image: post?.seo?.ogImage,
    datePublished: post?.publishedAt,
    dateModified: post?.updatedAt || post?.publishedAt,
    author: {
      '@type': 'Person',
      name: post?.author?.name,
      jobTitle: post?.author?.role,
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
      '@id': `${baseUrl}/blog/${post?.id}`,
    },
    articleSection: post?.category?.name,
    keywords: post?.seo?.keywords?.join(', '),
    wordCount: post?.content?.split(/\s+/).length,
    timeRequired: `PT${post?.readingTime}M`,
  }
}

function generateBreadcrumbSchema(post: any) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post?.category?.name,
        item: `${baseUrl}/blog/category/${post?.category?.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post?.title,
        item: `${baseUrl}/blog/${post?.id}`,
      },
    ],
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Note: params.slug actually contains the post ID (e.g., 'blg_f3h2k1p9q8r7t6y5u4')
  // because URLs use /blog/{postId} instead of /blog/{postSlug}
  // In Next.js 15+, params is a Promise that needs to be awaited
  const { slug } = await params
  const post = await getPostById(slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'
  const url = `${baseUrl}/blog/${slug}`

  if (!post) {
    return {
      title: 'Post Not Found | Arcbizz Blog',
    }
  }

  return {
    title: post?.seo?.metaTitle,
    description: post?.seo?.metaDescription,
    keywords: post?.seo?.keywords?.join(', '),
    authors: [{ name: post?.author?.name }],
    openGraph: {
      title: post?.seo?.metaTitle,
      description: post?.seo?.metaDescription,
      url: url,
      siteName: 'Arcbizz',
      images: [
        {
          url: post?.seo?.ogImage,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      type: 'article',
      publishedTime: post?.publishedAt,
      modifiedTime: post?.updatedAt,
      authors: [post?.author?.name],
      section: post?.category?.name,
      tags: post?.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.seo?.metaTitle,
      description: post?.seo?.metaDescription,
      images: [post?.seo?.ogImage],
      creator: `@${post?.author?.social?.twitter || 'arcbizz'}`,
    },
    alternates: {
      canonical: post?.seo?.canonicalUrl || url,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Note: params.slug contains the post ID (not slug) since URLs use /blog/{postId}
  // The ID comes from the URL like: /blog/blg_f3h2k1p9q8r7t6y5u4
  // In Next.js 15+, params is a Promise that needs to be awaited
  const { slug } = await params
  const postId = slug

  if (!postId) {
    notFound()
  }

  const post = await getPostById(postId)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id)
  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-background">
        {/* Reading Progress Bar */}
        <ReadingProgress />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/blog?category=${post?.category?.slug}`}>
                  {post?.category?.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main Layout */}
        <div className="container mx-auto px-4 pb-20 max-w-7xl">
          <div className="grid lg:grid-cols-[80px_1fr_300px] gap-8">
            {/* Left Sidebar - Social Share (Desktop Only) */}
            <aside className="hidden lg:block sticky top-24 h-fit">
              <SocialShare post={post} variant="vertical" />
            </aside>

            {/* Main Content */}
            <article className="max-w-none">
              <ArticleHeader post={post} />
              <ArticleContent content={post.content || ''} />

              {/* Mobile Social Share */}
              <div className="lg:hidden my-8">
                <SocialShare post={post} variant="horizontal" />
              </div>

              {/* Author Card */}
              <AuthorCard author={post.author} />
            </article>

            {/* Right Sidebar - Table of Contents (Desktop Only) */}
            <aside className="hidden lg:block sticky top-24 h-fit">
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <TableOfContents items={post.tableOfContents} />
              )}
            </aside>
          </div>
        </div>

        {/* Newsletter CTA */}
        {/* <NewsletterCTA /> */}

        {/* Related Posts */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      </main>
    </>
  )
}

