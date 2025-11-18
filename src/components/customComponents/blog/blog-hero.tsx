import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/types/types'

interface BlogHeroProps {
  post: BlogPost | null
}

export function BlogHero({ post }: BlogHeroProps) {
  if (!post) return null

  return (
    <section className="relative overflow-hidden animate-fade-in-up">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={post?.featuredImage}
          alt={post?.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-16 pt-16 xl:pt-24">
        <div className="max-w-3xl text-white space-y-6">
          <Badge className={`${post?.category?.color} text-white border-0`}>
            {post?.category?.name}
          </Badge>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            {post?.title}
          </h1>

          <p className="text-md md:text-xl text-gray-200 line-clamp-2">
            {post?.excerpt}
          </p>

          <div className="flex items-center gap-6 text-gray-300 flex-wrap">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 flex-shrink-0 flex items-center justify-center">
                <AvatarImage src={post?.author?.avatar} />
              </Avatar>
              <span className="font-medium text-sm md:text-base">{post?.author?.name}</span>
            </div>
            <div className="flex items-center gap-2  text-sm md:text-base">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post?.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2  text-sm md:text-base">
              <Clock className="h-4 w-4" />
              <span>{post?.readingTime} min read</span>
            </div>
          </div>

          <Link href={`/blog/${post?.id}`}>
            <Button size="lg" className="group">
              Read Full Article
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

