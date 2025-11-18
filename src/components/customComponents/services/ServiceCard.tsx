'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Service } from '@/lib/data/service-data'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured'
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link href={`/services/${service.slug}`} className="group block">
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
                    {service.category}
                  </Badge>
                  {service.icon && (
                    <DynamicIcon name={service.icon} className="w-5 h-5 text-primary" />
                  )}
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {service.heroTitle}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Key Features */}
                {service.keyFeatures.core && service.keyFeatures.core.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {service.keyFeatures.core.slice(0, 4).map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pricing Info */}
                {service.pricing && (
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <div>
                      <div className="text-lg font-bold text-primary">Starting from {service.pricing.startingFrom}</div>
                      <div className="text-sm text-muted-foreground">{service.pricing.model}</div>
                    </div>
                  </div>
                )}

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Right: Visual Element */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-2/10 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      {service.icon && (
                        <DynamicIcon name={service.icon} className="w-16 h-16 text-primary/30 mx-auto" />
                      )}
                      <div className="text-lg font-semibold text-foreground">{service.category}</div>
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
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <div className="relative bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {service.category}
              </Badge>
              {service.icon && (
                <DynamicIcon name={service.icon} className="w-5 h-5 text-primary" />
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {service.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {service.keyFeatures.core && service.keyFeatures.core.length > 0 && (
            <div className="px-6 pb-4">
              <ul className="space-y-2">
                {service.keyFeatures.core.slice(0, 3).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing Info */}
          {service.pricing && (
            <div className="px-6 pb-4 mt-auto">
              <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl p-4 border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-1">Starting from</div>
                <div className="text-xl font-bold text-foreground">{service.pricing.startingFrom}</div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="px-6 pb-6 pt-2 border-t border-border mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">View Details</span>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard

