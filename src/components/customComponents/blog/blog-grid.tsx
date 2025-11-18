import { BlogCard } from './blog-card'
import { BlogPost } from '@/lib/types/types'

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  console.log('posts:==>',posts)
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post?.id} post={post as BlogPost} />  
      ))}
    </div>
  )
}

