'use client'

import React, { useState } from 'react'
import { Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { CaseStudy } from '@/lib/data/case-studies-data'
import { Button } from '@/components/ui/button'

interface CaseStudyFilterProps {
  caseStudies: CaseStudy[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

const CaseStudyFilter: React.FC<CaseStudyFilterProps> = ({
  caseStudies,
  selectedCategory,
  onCategoryChange,
}) => {
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))]

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

export default CaseStudyFilter

