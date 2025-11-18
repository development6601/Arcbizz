'use client'

import React, { useState, useMemo } from 'react'
import IndustryCard from './IndustryCard'
import IndustryFilter from './IndustryFilter'
import { Industry } from '@/lib/data/industries-data'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface IndustryListProps {
  industries: Industry[]
}

const IndustryList: React.FC<IndustryListProps> = ({ industries }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter industries
  const filteredIndustries = useMemo(() => {
    let filtered = industries

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(ind => ind.name === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        industry =>
          industry.name.toLowerCase().includes(query) ||
          industry.title.toLowerCase().includes(query) ||
          industry.heroTitle.toLowerCase().includes(query) ||
          industry.heroDescription.toLowerCase().includes(query) ||
          industry.overview.description.toLowerCase().includes(query) ||
          industry.overview.keyPoints.some(point => point.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [industries, selectedCategory, searchQuery])

  // Get featured industry (first one)
  const featuredIndustry = filteredIndustries[0]
  const otherIndustries = filteredIndustries.slice(1)

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
                placeholder="Search industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl border-border bg-background"
              />
            </div>
          </div>

          {/* Category Filter */}
          <IndustryFilter
            industries={industries}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            {filteredIndustries.length === 0 ? (
              <span>No industries found.</span>
            ) : (
              <span>
                Showing <span className="font-semibold text-foreground">{filteredIndustries.length}</span> industr{filteredIndustries.length !== 1 ? 'ies' : 'y'}
              </span>
            )}
          </p>
        </div>

        {/* Featured Industry */}
        {featuredIndustry && (
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Featured</span>
            </div>
            <IndustryCard industry={featuredIndustry} variant="featured" />
          </div>
        )}

        {/* Other Industries Grid */}
        {otherIndustries.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              {featuredIndustry ? 'More Industries' : 'All Industries'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherIndustries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} variant="default" />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No Industries Found
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
              variant="outline"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default IndustryList

