"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BlogGrid } from '@/components/customComponents/blog/blog-grid'
import { BlogPost, BlogCategory } from '@/lib/types/types'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { ListCheck } from 'lucide-react'

interface BlogTabsProps {
    categories: BlogCategory[]
    filteredPosts: BlogPost[]
}

export function BlogTabs({ categories, filteredPosts }: BlogTabsProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const [currentCategory, setCurrentCategory] = useState(category || 'all')

    const handleTabChange = (value: string) => {
        if (value === 'all') {
            router.push('/blog')
        } else {
            router.push(`/blog?category=${value}`)
        }
        setCurrentCategory(value)
    }

    useEffect(() => {
        if (category) {
            handleTabChange(category)
        }
    }, [category, router])

    return (
        <Tabs defaultValue="all" value={currentCategory} className="w-full" onValueChange={handleTabChange}>
            <TabsList className="mb-8 flex-wrap h-auto">
                <TabsTrigger value="all"><ListCheck className="h-4 w-4" />All Posts</TabsTrigger>
                {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.slug} className="gap-2">
                        <DynamicIcon name={category.icon} className="h-4 w-4" />
                        {category.name}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent value="all">
                <BlogGrid posts={filteredPosts} />
            </TabsContent>

            {categories.map((category) => (
                <TabsContent key={category.id} value={category.slug}>
                    <BlogGrid
                        posts={filteredPosts.filter((p) => p?.category?.slug === category.slug)}
                    />
                </TabsContent>
            ))}
        </Tabs>
    )
}

