'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Clock, Users, MapPin } from 'lucide-react'
import { CaseStudy } from '@/lib/data/case-studies-data'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  variant?: 'default' | 'featured'
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link href={`/case-study/${caseStudy.id}`} className="group block">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left: Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {caseStudy.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{caseStudy.timeline.split('(')[0]}</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {caseStudy.heroTitle}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                  {caseStudy.heroDescription}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{caseStudy.quickStats.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{caseStudy.quickStats.users}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{caseStudy.timeline.split('(')[1]?.replace(')', '') || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{caseStudy.quickStats.industry}</span>
                  </div>
                </div>

                {/* Key Result */}
                {caseStudy.results.businessImpact[0] && (
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <DynamicIcon name={caseStudy.results.businessImpact[0].icon} className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-2xl font-bold text-primary">{caseStudy.results.businessImpact[0].value}</div>
                      <div className="text-sm text-muted-foreground">{caseStudy.results.businessImpact[0].label}</div>
                    </div>
                  </div>
                )}

                <Link
                  href={`/case-study/${caseStudy.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Visual Element */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-2/10 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="text-2xl font-bold text-primary/20">{caseStudy.category}</div>
                      <div className="text-lg font-semibold text-foreground">{caseStudy.client}</div>
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
    <Link href={`/case-study/${caseStudy.id}`} className="group block h-full">
      <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {caseStudy.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{caseStudy.timeline.split('(')[1]?.replace(')', '') || 'N/A'}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {caseStudy.heroDescription}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="px-6 pb-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">Client</div>
                <div className="text-sm font-semibold text-foreground line-clamp-1">{caseStudy.client}</div>
              </div>
              <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">Industry</div>
                <div className="text-sm font-semibold text-foreground line-clamp-1">{caseStudy.quickStats.industry}</div>
              </div>
            </div>
          </div>

          {/* Key Metric */}
          {caseStudy.results.businessImpact[0] && (
            <div className="px-6 pb-4 mt-auto">
              <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-3">
                  <DynamicIcon name={caseStudy.results.businessImpact[0].icon} className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-xl font-bold text-primary">{caseStudy.results.businessImpact[0].value}</div>
                    <div className="text-xs text-muted-foreground">{caseStudy.results.businessImpact[0].label}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 pb-6 pt-2 border-t border-border mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{caseStudy.teamSize}</span>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CaseStudyCard

