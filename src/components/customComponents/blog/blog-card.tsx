import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar, Clock, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/types/types'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'horizontal'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  console.log('post:==>',post)
  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${post?.id}`}>
        <Card className="overflow-hidden hover:shadow-xl transition-shadow group ">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-full">
              <Image
                src={post?.featuredImage}
                alt={post?.title || ''}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 flex flex-col justify-center">
              <Badge className={`${post?.category?.color} w-fit mb-4 text-white border-0`}>
                {post?.category?.name}
              </Badge>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                {post?.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post?.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post?.author?.avatar} />
                    <AvatarFallback>{post?.author?.name[0]}</AvatarFallback>
                  </Avatar>
                  <span>{post?.author?.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post?.readingTime} min</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post?.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col py-0 gap-0">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post?.featuredImage}
            alt={post?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${post?.category?.color} border-0 text-white`}>
              {post?.category?.name}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post?.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 flex-1">{post?.excerpt}</p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post?.author?.avatar} />
                <AvatarFallback>{post?.author?.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-foreground">{post?.author?.name}</p>
                <p className="text-muted-foreground">{post?.author?.role} dd</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post?.readingTime}m</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{post?.views}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

