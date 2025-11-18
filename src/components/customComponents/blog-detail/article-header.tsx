import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Clock, Eye, Tag } from 'lucide-react'
import Image from 'next/image'
import { BlogPost } from '@/lib/types/types'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { formatDate } from '@/lib/utils/blog-utils'

interface ArticleHeaderProps {
  post: BlogPost
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="space-y-6 mb-12">
      {/* Category Badge */}
      <Badge className={`${post?.category?.color} text-base py-1.5 px-4 text-white border-0 rounded-full`}>
        {post?.category?.name}
      </Badge>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
        {post?.title}
      </h1>

      {/* Excerpt */}
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
        {post?.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-gray-100">
            <AvatarImage src={post?.author?.avatar} className="object-cover h-full w-full rounded-full object-center" />
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{post?.author?.name}</p>
            <p className="text-sm text-muted-foreground">{post?.author?.role}</p>
          </div>
        </div>

        {/* Published Date */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{formatDate(post?.publishedAt)}</span>
        </div>

        {/* Reading Time */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{post?.readingTime} min read</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span className="text-sm">{post?.views.toLocaleString()} views</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <Image
            src={post?.featuredImage}
            alt={post?.title}
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      {/* Tags */}
      {post?.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {post?.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="font-normal px-3 py-1 rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </header>
  )
}

