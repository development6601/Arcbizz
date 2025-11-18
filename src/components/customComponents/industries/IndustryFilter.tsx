'use client'

import React from 'react'
import { Filter } from 'lucide-react'
import { Industry } from '@/lib/data/industries-data'
import { Button } from '@/components/ui/button'

interface IndustryFilterProps {
  industries: Industry[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

const IndustryFilter: React.FC<IndustryFilterProps> = ({
  industries,
  selectedCategory,
  onCategoryChange,
}) => {
  // Get unique categories (using industry names)
  const categories = ['All', ...Array.from(new Set(industries.map(ind => ind.name)))]

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span>Filter by:</span>
      </div>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category === 'All' ? null : category)}
          className={`transition-all duration-300 ${
            (category === 'All' && selectedCategory === null) || selectedCategory === category
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-card text-foreground border-border hover:border-primary/30 hover:text-primary-foreground'
          } border px-4 py-2 text-sm font-medium`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default IndustryFilter

