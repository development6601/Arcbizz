'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Share2, CheckCircle2, Star, ChevronDown, Sparkles, Target, Zap, TrendingUp, Award, Clock, DollarSign, HelpCircle, Phone, ArrowRight } from 'lucide-react'
import { Service } from '@/lib/data/service-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { useRouter } from 'next/navigation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ServiceDetailProps {
  service: Service
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-primary/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-chart-2 to-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />

        {/* Geometric Grid Lines */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />

        {/* Navigation */}
        <div className="absolute top-14 lg:top-24 left-0 right-0 z-10 container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" className='rounded-full' onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden lg:block">Back</span>
            </Button>
            <Button variant="outline" size="icon" className='rounded-full'>
              <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
            </Button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-0 lg:pt-16">
          <div className="mb-6 animate-fade-in-down">
            <div className="flex items-center justify-center">
              <div className="relative border border-primary/30 text-primary bg-card/70 rounded-full px-6 py-2 flex items-center justify-center gap-2">
                {service.icon && (
                  <DynamicIcon name={service.icon} className="w-5 h-5 text-primary flex-shrink-0" />
                )}
                <span className="font-semibold uppercase text-xs lg:text-sm">{service.category}</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {service.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {service.heroDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {service.pricing && (
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Starting from:</span>
                <span className="font-semibold text-foreground">{service.pricing.startingFrom}</span>
              </div>
            )}
            {service.timeline && (
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Timeline:</span>
                <span className="font-semibold text-foreground">{service.timeline.simple}</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 20s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-5xl animate-fade-in-up">
        {/* Overview */}
        <section className="mb-20 scroll-mt-20 animate-fade-in-up" id="overview">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-foreground">
            Service Overview
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {service.overview.brief}
          </p>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Value Proposition
            </h3>
            <ul className="space-y-3">
              {service.overview.valueProposition.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-20 scroll-mt-20 animate-fade-in-up" id="what-we-offer">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
            {service.whatWeOffer.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.whatWeOffer.items.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 scroll-mt-20" id="process">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
            Our Development Process
          </h2>
          <div className="space-y-6">
            {service.process.phases.map((phase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary font-bold text-lg border border-primary/20">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-0 lg:ml-20">
                  {phase.activities.map((activity, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20 scroll-mt-20" id="features">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
            Key Features & Benefits
          </h2>
          <div className="space-y-6">
            {service.keyFeatures.core && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Core Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.keyFeatures.core.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.keyFeatures.advanced && (
              <div className="bg-card border border-border rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-chart-2/5">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Advanced Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.keyFeatures.advanced.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.keyFeatures.benefits && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Key Benefits</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.keyFeatures.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Technologies */}
        {service.technologies && (
          <section className="mb-20 scroll-mt-20" id="technologies">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Technologies</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Technologies & Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(service.technologies).map(([category, techs], index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4 text-foreground capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-primary/5 text-foreground border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        {service.useCases && service.useCases.length > 0 && (
          <section className="mb-20 scroll-mt-20" id="use-cases">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Industries & Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    {useCase.industry}
                  </h3>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="leading-relaxed">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Deliverables */}
        {service.deliverables && service.deliverables.length > 0 && (
          <section className="mb-20 scroll-mt-20" id="deliverables">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Deliverables</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              What You'll Receive
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-300 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{deliverable}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        {service.whyChooseUs && (
          <section className="mb-20 scroll-mt-20" id="why-choose-us">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              {service.whyChooseUs.title}
            </h2>
            <div className="bg-card border border-border rounded-3xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-chart-2/5">
              <ul className="grid md:grid-cols-2 gap-4">
                {service.whyChooseUs.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        {service.faq && service.faq.length > 0 && (
          <section className="mb-20 scroll-mt-20" id="faq">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {service.faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 hover:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* CTA Section */}
        <section className="mb-20 scroll-mt-20">
          <div className="bg-gradient-to-br from-primary via-chart-2 to-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss your project requirements and how we can help you achieve your goals. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => router.push('/contact-us#contact-form')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 text-background border-background/20 hover:bg-background/20"
                onClick={() => router.push('/services')}
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceDetail

