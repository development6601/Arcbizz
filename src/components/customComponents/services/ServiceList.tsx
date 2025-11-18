'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { ServiceGrid } from './ServiceGrid'
import { Service } from '@/lib/data/service-data'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

interface ServiceListProps {
    services: Service[]
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const categoryParam = searchParams.get('category')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
    const [searchQuery, setSearchQuery] = useState('')

    // Get unique categories
    const categories = useMemo(() => {
        const cats = services.map(s => s.category)
        return Array.from(new Set(cats))
    }, [services])

    // Filter services
    const filteredServices = useMemo(() => {
        let filtered = services

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(s => s.category === selectedCategory)
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                s =>
                    s.title.toLowerCase().includes(query) ||
                    s.heroTitle.toLowerCase().includes(query) ||
                    s.shortDescription.toLowerCase().includes(query) ||
                    s.heroDescription.toLowerCase().includes(query) ||
                    s.category.toLowerCase().includes(query) ||
                    (s.keyFeatures.core && s.keyFeatures.core.some((f: string) => f.toLowerCase().includes(query)))
            )
        }

        return filtered
    }, [services, selectedCategory, searchQuery])

    const handleCategoryClick = (category: string | null) => {
        setSelectedCategory(category)

        // Update URL params
        if (category && category !== "all") {
            router.push(`/services?category=${category}`, { scroll: false })
        } else {
            router.push('/services', { scroll: false })
        }
    }

    // Sync with URL params
    useEffect(() => {
        if (categoryParam) {
            setSelectedCategory(categoryParam)

            setTimeout(() => {
                const element = document.getElementById('services-list')
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 150)
        } else {
            setSelectedCategory(null)
        }
    }, [categoryParam])

    return (
        <section id="services-list" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Search and Filter Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12 rounded-xl border-border bg-background"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                            variant={selectedCategory === null ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleCategoryClick(null)}
                        >
                            All Services
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8 text-center">
                    <p className="text-muted-foreground">
                        {filteredServices.length === 0 ? (
                            <span>No services found.</span>
                        ) : (
                            <span>
                                Showing <span className="font-semibold text-foreground">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </p>
                </div>

                {/* Services Grid */}
                <ServiceGrid services={filteredServices} showFeatured={filteredServices.length > 0} />

                {/* Clear Filters Button for Empty State */}
                {filteredServices.length === 0 && (
                    <div className="text-center mt-6">
                        <Button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedCategory(null)
                                router.push('/services')
                            }}
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

export default ServiceList


