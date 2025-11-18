import { BlogCard } from './blog-card'
import { BlogPost } from '@/lib/types/types'

interface FeaturedPostsProps {
  posts: BlogPost[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post?.id} post={post as BlogPost} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  )
}

