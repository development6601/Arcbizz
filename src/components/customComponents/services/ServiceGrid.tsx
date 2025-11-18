import ServiceCard from './ServiceCard'
import { Service } from '@/lib/data/service-data'
import { Search } from 'lucide-react'

interface ServiceGridProps {
  services: Service[]
  showFeatured?: boolean
}

export function ServiceGrid({ services, showFeatured = false }: ServiceGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          No Services Found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    )
  }

  // Get featured service (first one) if showFeatured is true
  const featuredService = showFeatured ? services[0] : null
  const otherServices = showFeatured ? services.slice(1) : services

  return (
    <>
      {/* Featured Service */}
      {featuredService && (
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Featured Service</span>
          </div>
          <ServiceCard service={featuredService} variant="featured" />
        </div>
      )}

      {/* Other Services Grid */}
      {otherServices.length > 0 && (
        <div>
          {featuredService && (
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              More Services
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="default" />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

