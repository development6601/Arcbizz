'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Industry } from '@/lib/data/industries-data'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

interface IndustryCardProps {
  industry: Industry
  variant?: 'default' | 'featured'
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link href={`/industries/${industry.slug}`} className="group block">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left: Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  {industry.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <DynamicIcon name={industry.icon} className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {industry.name}
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {industry.heroTitle}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                  {industry.heroDescription}
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  {industry.overview.keyPoints.slice(0, 4).map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Key Stat */}
                {industry.statistics[0] && (
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {industry.statistics[0].icon && (
                      <DynamicIcon name={industry.statistics[0].icon} className="h-8 w-8 text-primary" />
                    )}
                    <div>
                      <div className="text-2xl font-bold text-primary">{industry.statistics[0].value}</div>
                      <div className="text-sm text-muted-foreground">{industry.statistics[0].label}</div>
                    </div>
                  </div>
                )}

                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Industry
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Visual Element */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-2/10 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      {industry.icon && (
                        <DynamicIcon name={industry.icon} className="w-16 h-16 text-primary/30 mx-auto" />
                      )}
                      <div className="text-lg font-semibold text-foreground">{industry.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/industries/${industry.slug}`} className="group block h-full">
      <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              {industry.icon && (
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DynamicIcon name={industry.icon} className="w-5 h-5 text-primary" />
                </div>
              )}
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {industry.name}
              </Badge>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {industry.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {industry.heroDescription}
            </p>
          </div>

          {/* Key Points */}
          <div className="px-6 pb-4 flex-1">
            <div className="space-y-2">
              {industry.overview.keyPoints.slice(0, 3).map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground line-clamp-1">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metric */}
          {industry.statistics[0] && (
            <div className="px-6 pb-4 mt-auto">
              <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-3">
                  {industry.statistics[0].icon && (
                    <DynamicIcon name={industry.statistics[0].icon} className="h-6 w-6 text-primary" />
                  )}
                  <div>
                    <div className="text-xl font-bold text-primary">{industry.statistics[0].value}</div>
                    <div className="text-xs text-muted-foreground">{industry.statistics[0].label}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 pb-6 pt-2 border-t border-border mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{industry.solutions.length} Solutions</span>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default IndustryCard

