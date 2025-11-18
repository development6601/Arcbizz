import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Twitter, Linkedin, Github, Globe } from 'lucide-react'
import { Author } from '@/lib/types/types'
import Link from 'next/link'

interface AuthorCardProps {
  author: Author | undefined
}

export function AuthorCard({ author = {} as Author }: AuthorCardProps) {

  if (!author) return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 animate-pulse">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div className="flex-1">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-16 w-full mb-4" />

            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-20 w-20 flex-shrink-0 flex items-center justify-center">
            <AvatarImage src={author.avatar} className="object-cover h-full w-full rounded-full" />
          </Avatar>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">{author.name}</h3>
            <p className="text-muted-foreground mb-2">{author.role}</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">{author.bio}</p>

            {author.social && ( 
              <div className="flex items-center gap-3">
                {author.social.twitter && (
                  <Link href={`https://twitter.com/${author.social.twitter}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {author.social.linkedin && (
                  <Link href={`https://linkedin.com/in/${author.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {author.social.github && (
                  <Link href={`https://github.com/${author.social.github}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {author.social.website && (
                  <Link href={`https://${author.social.website}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Globe className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

