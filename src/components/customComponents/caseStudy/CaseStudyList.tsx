'use client'

import React, { useState, useMemo } from 'react'
import CaseStudyCard from './CaseStudyCard'
import CaseStudyFilter from './CaseStudyFilter'
import { CaseStudy } from '@/lib/data/case-studies-data'  
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CaseStudyListProps {
  caseStudies: CaseStudy[]
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ caseStudies }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    let filtered = caseStudies

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(cs => cs.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        cs =>
          cs.title.toLowerCase().includes(query) ||
          cs.heroTitle.toLowerCase().includes(query) ||
          cs.heroDescription.toLowerCase().includes(query) ||
          cs.client.toLowerCase().includes(query) ||
          cs.category.toLowerCase().includes(query) ||
          cs.quickStats.industry.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [caseStudies, selectedCategory, searchQuery])

  // Get featured case study (first one)
  const featuredCaseStudy = filteredCaseStudies[0]
  const otherCaseStudies = filteredCaseStudies.slice(1)

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl border-border bg-background"
              />
            </div>
          </div>

          {/* Category Filter */}
          <CaseStudyFilter
            caseStudies={caseStudies}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            {filteredCaseStudies.length === 0 ? (
              <span>No case studies found.</span>
            ) : (
              <span>
                Showing <span className="font-semibold text-foreground">{filteredCaseStudies.length}</span> case study{filteredCaseStudies.length !== 1 ? 'ies' : ''}
              </span>
            )}
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Featured</span>
            </div>
            <CaseStudyCard caseStudy={featuredCaseStudy} variant="featured" />
          </div>
        )}

        {/* Other Case Studies Grid */}
        {otherCaseStudies.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              {featuredCaseStudy ? 'More Case Studies' : 'All Case Studies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} variant="default" />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No Case Studies Found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory(null)
              }}
              className="text-primary hover:underline font-medium"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CaseStudyList

