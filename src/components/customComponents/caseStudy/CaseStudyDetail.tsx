'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Share2, CheckCircle2, Star, ChevronDown, Sparkles, Target, Zap, TrendingUp, Award } from 'lucide-react'
import { CaseStudy } from '@/lib/data/case-studies-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { useRouter } from 'next/navigation'

interface CaseStudyDetailProps {
  caseStudy: CaseStudy
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseStudy }) => {
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
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              {caseStudy.category}
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {caseStudy.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {caseStudy.heroDescription}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Client:</span>
              <span className="font-semibold text-foreground">{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-semibold text-foreground">{caseStudy.timeline.split('(')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Team:</span>
              <span className="font-semibold text-foreground">{caseStudy.teamSize}</span>
            </div>
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

      {/* Quick Stats Bar (Sticky) */}
      <div className="sticky top-12 sm:top-16 xl:top-22 z-40 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              { label: 'Industry', value: caseStudy.quickStats.industry },
              { label: 'Location', value: caseStudy.quickStats.location },
              { label: 'Platform', value: caseStudy.quickStats.platform },
              { label: 'Users', value: caseStudy.quickStats.users },
              { label: 'Timeline', value: caseStudy.timeline.split('(')[1]?.replace(')', '') || caseStudy.timeline }
            ].map((stat, index) => (
              <div key={index} className="px-2">
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground line-clamp-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-5xl animate-fade-in-up">
        {/* Project Overview */}
        <section className="mb-20 scroll-mt-20 animate-fade-in-up" id="overview">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Overview</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-foreground">
              Project Overview
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {caseStudy.overview.brief}
          </p>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Our Mission
            </h3>
            <ul className="space-y-3">
              {caseStudy.overview.mission.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-20 scroll-mt-20 animate-fade-in-up" id="challenge">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Challenge</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-foreground">
              The Challenge
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {caseStudy.challenge.painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-destructive/20 rounded-3xl p-6 md:p-8 bg-gradient-to-br from-destructive/5 to-destructive/10">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-destructive" />
              Business Impact
            </h3>
            <ul className="space-y-2">
              {caseStudy.challenge.businessImpact.map((impact, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20 scroll-mt-20" id="approach">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Our Approach
            </h2>
          </div>
          <div className="space-y-6">
            {caseStudy.approach.phases.map((phase, index) => (
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

        {/* Development Phase */}
        <section className="mb-20 scroll-mt-20" id="development">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Development Phase
            </h2>
          </div>
          <div className="space-y-6 mb-8">
            {caseStudy.development.architecture.map((arch, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {arch.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {arch.tech.map((tech, idx) => (
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
          <div className="space-y-6">
            {caseStudy.development.technicalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-chart-2/5"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <ul className="space-y-3">
                  {highlight.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20 scroll-mt-20" id="features">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Key Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(caseStudy.keyFeatures).map(([key, features], index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <ul className="space-y-2">
                  {features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-20 scroll-mt-20" id="results">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Results & Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-chart-2/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Before</span>
                  <span className="text-sm text-muted-foreground">After</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-semibold text-foreground">
                    {metric.before}
                  </span>
                  <span className="text-xl font-semibold text-primary">
                    {metric.after}
                  </span>
                </div>
                {metric.improvement && (
                  <p className="text-sm text-primary font-medium mt-2">
                    {metric.improvement}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {caseStudy.results.businessImpact.map((impact, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <DynamicIcon name={impact.icon} className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {impact.value}
                </div>
                <div className="text-sm text-muted-foreground">{impact.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 bg-gradient-to-br from-primary/5 to-chart-2/5">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Technical Achievements
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {caseStudy.results.technicalAchievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="mb-20 scroll-mt-20" id="testimonial">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5">
            <div className="flex items-start gap-1 mb-6">
              {[...Array(caseStudy.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg md:text-2xl font-medium text-foreground mb-8 leading-relaxed italic">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20 flex-shrink-0">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.testimonial.role}, {caseStudy.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="mb-20 scroll-mt-20" id="technologies">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Technologies</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Technologies & Tools
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(caseStudy.technologies).map(([category, techs], index) => (
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

        {/* Team & Credits */}
        <section className="mb-20 scroll-mt-20" id="team">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-foreground">
              Team & Credits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Arcbizz Team
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.team.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold border border-primary/20">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-chart-2/5">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Project Duration</p>
                  <p className="text-lg font-semibold text-foreground">
                    {caseStudy.team.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Budget</p>
                  <p className="text-lg font-semibold text-foreground">
                    {caseStudy.team.budget}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Client Satisfaction
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < parseInt(caseStudy.team.satisfaction)
                          ? 'fill-primary text-primary'
                          : 'text-muted-foreground/30'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 scroll-mt-20">
          <div className="bg-gradient-to-br from-primary via-chart-2 to-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results. Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="bg-background/10 text-background border-background/20 hover:bg-background/20">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CaseStudyDetail
