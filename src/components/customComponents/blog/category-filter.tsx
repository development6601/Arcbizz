'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { BlogCategory } from '@/lib/types/types'
import { useRouter } from 'next/navigation'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

interface CategoryFilterProps {
  categories: BlogCategory[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()

  const handleCategorySelect = (slug: string) => {
    if (slug === 'all') {
      router.push('/blog')
    } else {
      router.push(`/blog/category/${slug}`)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          All Categories
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => handleCategorySelect('all')}>
          All Categories
        </DropdownMenuItem>
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            onClick={() => handleCategorySelect(category.slug)}
          >
            <DynamicIcon name={category.icon} className="mr-2 h-4 w-4" />
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

