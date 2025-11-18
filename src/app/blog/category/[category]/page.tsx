import { BlogHero } from '@/components/customComponents/blog/blog-hero'
import { BlogGrid } from '@/components/customComponents/blog/blog-grid'
import { CategoryFilter } from '@/components/customComponents/blog/category-filter'
import { SearchBar } from '@/components/customComponents/blog/search-bar'
import { Badge } from '@/components/ui/badge'
import { getAllPosts, getCategories, getPostsByCategory } from '@/lib/data/blog-data'
import { notFound } from 'next/navigation'
import CTASection from '@/components/customComponents/landingPage/CTASection'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categories = await getCategories()
  const category = categories.find((c) => c.slug === params.category)

  if (!category) {
    return {
      title: 'Category Not Found | Arcbizz Blog',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'
  const url = `${baseUrl}/blog/category/${params.category}`

  return {
    title: `${category.name} Articles`,
    description: category.description,
    keywords: [category.name, 'blog', 'articles', 'tech blog'],
    openGraph: {
      title: `${category.name} Articles | Arcbizz Blog`,
      description: category.description,
      url: url,
      siteName: 'Arcbizz',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Articles | Arcbizz Blog`,
      description: category.description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string }
  searchParams: { search?: string }
}) {
  const categories = await getCategories()
  const category = categories.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  let posts = await getPostsByCategory(params.category)

  // Filter by search query if provided
  if (searchParams.search) {
    const searchLower = searchParams.search.toLowerCase()
    posts = posts.filter(
      (post) =>
        post?.title.toLowerCase().includes(searchLower) || 
        post?.excerpt.toLowerCase().includes(searchLower) ||
        post?.content.toLowerCase().includes(searchLower) ||
        post?.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Badge className={`${category.color} text-white text-lg py-2 px-4 border-0 flex items-center gap-2`}>
              <DynamicIcon name={category?.icon} className="h-5 w-5" />
              {category?.name}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {category?.name} Articles
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">{category?.description}</p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <SearchBar />
          <CategoryFilter categories={categories} />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our latest {category.name.toLowerCase()} content
            </p>
          </div>
        </div>

        <BlogGrid posts={posts} />
      </section>

      {/* Newsletter CTA */}
      <CTASection />
    </main>
  )
}

