'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { allPosts } from '@/lib/data/blog-data'
import { formatDate } from '@/lib/utils/blog-utils'
import { BlogPost } from '@/lib/types/types'

const Blog = () => {
    // Get latest 3 published posts
    const posts: BlogPost[] = React.useMemo(() => {
        return allPosts
            .filter(post => post?.status === 'published')
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, 6)
    }, [])

    return (
        <section id="blog" className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-primary/30 via-transparent to-primary/30 animate-fade-in-up">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background animate-fade-in-up" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-fade-in-up" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-fade-in-up" />

            <div className="container mx-auto relative z-10 max-w-7xl animate-fade-in-up">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>Latest Articles</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Insights & Updates
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Stay informed with our latest blog posts, tutorials, and industry insights
                    </p>
                </div>

                {/* Blog Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up">
                        {posts.map((post) => (
                            <Link
                                key={post?.id}
                                href={`/blog/${post?.id}`}
                                className="group"
                            >
                                <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post?.featuredImage}
                                            alt={post?.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 left-4">
                                            <Badge className={`${post?.category?.color} text-white border-0`}>
                                                {post?.category?.name}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                            <Calendar className="h-3 w-3" />
                                            <span>{formatDate(post?.publishedAt)}</span>
                                            <span className="mx-2">•</span>
                                            <Clock className="h-3 w-3" />
                                            <span>{post?.readingTime} min read</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post?.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                                            {post?.excerpt}
                                        </p>

                                        {/* Author & Read More */}
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-8">
                                                    <AvatarImage src={post?.author?.avatar} />
                                                    <AvatarFallback>
                                                        {post?.author?.name[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="text-sm">
                                                    <p className="font-medium text-foreground">
                                                        {post?.author?.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>

                                    {/* Decorative Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No blog posts available at the moment.</p>
                    </div>
                )}

                {/* View All Button */}
                <div className="text-center animate-fade-in-up">
                    <Link href="/blog">
                        <Button size="lg" className="group">
                            View All Articles
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blog

