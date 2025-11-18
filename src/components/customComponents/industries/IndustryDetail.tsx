'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Share2, CheckCircle2, ChevronDown, AlertCircle, Lightbulb, Code2, Briefcase, TrendingUp, Award, BarChart, Zap } from 'lucide-react'
import { Industry, getCaseStudiesByCategory } from '@/lib/data/industries-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { useRouter } from 'next/navigation'
import CaseStudyCard from '@/components/customComponents/caseStudy/CaseStudyCard'

interface IndustryDetailProps {
  industry: Industry
}

const IndustryDetail: React.FC<IndustryDetailProps> = ({ industry }) => {
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

  // Get related case studies by category
  const relatedCaseStudies = getCaseStudiesByCategory(industry.name)

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
            <div className="flex items-center justify-center gap-3">
              <div className="relative border border-primary/30 text-primary bg-card/70 rounded-full px-6 py-2 flex items-center justify-center gap-2">
                {industry.icon && (
                  <DynamicIcon name={industry.icon} className="w-5 h-5 text-primary flex-shrink-0" />
                )}
                <span className="font-semibold uppercase text-xs lg:text-sm">{industry.name}</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {industry.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {industry.heroDescription}
          </p>

          {/* Key Statistics */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {industry.statistics.slice(0, 3).map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl px-4 py-2">
                {stat.icon && (
                  <DynamicIcon name={stat.icon} className="w-5 h-5 text-primary" />
                )}
                <div className="text-left">
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
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

      {/* Overview Section */}
      <section className="py-20 px-4 bg-background animate-fade-in-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {industry.overview.description}
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.overview.keyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5 animate-fade-in-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              <span>Common Challenges</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Industry Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the unique pain points in your industry is the first step to delivering effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground mb-3">{challenge.description}</p>
                {challenge.impact && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-red-500">{challenge.impact}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              <span>Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We Solve Your Challenges
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions designed to address your specific industry needs and drive measurable results.
            </p>
          </div>

          <div className="space-y-6">
            {industry.solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-4 lg:p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4 sm:flex-row flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground mb-4">{solution.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              <span>Technology Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across modern technology stacks tailored for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.technologies.map((techCategory, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-4 text-foreground">{techCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techCategory.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-background/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Real-World Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our solutions are applied across various use cases in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the transformative benefits of working with industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {benefit.icon && (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={benefit.icon} className="w-6 h-6 text-primary" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart className="w-4 h-4" />
              <span>Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the measurable impact our solutions deliver for businesses in your industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industry.statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                {stat.icon && (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <DynamicIcon name={stat.icon} className="w-6 h-6 text-primary" />
                  </div>
                )}
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Case Studies</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Related Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore real-world examples of our work in this industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} variant="default" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card border border-border rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                </Button>
              </Link>
              <Link href="/case-study">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustryDetail

