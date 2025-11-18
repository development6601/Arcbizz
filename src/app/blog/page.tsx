import { BlogHero } from '@/components/customComponents/blog/blog-hero'
import { CategoryFilter } from '@/components/customComponents/blog/category-filter'
import { SearchBar } from '@/components/customComponents/blog/search-bar'
import { BlogTabs } from '@/components/customComponents/blog/blog-tabs'
import { getAllPosts, getFeaturedPost, getCategories } from '@/lib/data/blog-data'
import CTASection from '@/components/customComponents/landingPage/CTASection'

export const metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and industry trends from the Arcbizz team. Explore our latest articles on web development, technology, and digital innovation.',
  keywords: ['blog', 'tech blog', 'web development', 'technology insights', 'software development', 'tutorials'],
  openGraph: {
    title: 'Blog | Arcbizz',
    description: 'Insights, tutorials, and industry trends from the Arcbizz team',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/blog`,
    siteName: 'Arcbizz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Arcbizz',
    description: 'Insights, tutorials, and industry trends from the Arcbizz team',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/blog`,
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string }
}) {
  const allPosts = await getAllPosts()
  const featuredPost = await getFeaturedPost()
  const categories = await getCategories()

  // Filter posts by search query
  let filteredPosts = allPosts
  if (searchParams.search) {
    const searchLower = searchParams.search.toLowerCase()
    filteredPosts = allPosts.filter(
      (post) =>
        post?.title.toLowerCase().includes(searchLower) ||
        post?.excerpt.toLowerCase().includes(searchLower) ||
        post?.content.toLowerCase().includes(searchLower) ||
        post?.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  }

  // Filter by category if specified
  if (searchParams.category) {
    filteredPosts = filteredPosts.filter(
      (post) => post?.category?.slug === searchParams.category
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Hero Section - Featured Post */}
      <BlogHero post={featuredPost} />

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
            <p className="text-muted-foreground mt-2">Insights, tutorials, and industry trends</p>
          </div>
        </div>

        <BlogTabs categories={categories} filteredPosts={filteredPosts} />
      </section>

      {/* Newsletter CTA */}
      <CTASection />
    </main>
  )
}

