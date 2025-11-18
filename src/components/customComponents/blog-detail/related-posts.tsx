import { BlogCard } from '@/components/customComponents/blog/blog-card'
import { BlogPost } from '@/lib/types/types'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Related Articles</h2>
        <p className="text-muted-foreground">Discover more insights and tutorials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
    </section>
  )
}

