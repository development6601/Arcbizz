'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { caseStudies, CaseStudy } from '@/lib/data/case-studies-data'
import shopSmartImage from '@/assets/images/case-study/ShopSmart.png'
import securePayImage from '@/assets/images/case-study/SecurePay.png'
import medicareImage from '@/assets/images/case-study/Medicare.png'
import brightMindsImage from '@/assets/images/case-study/BrightMinds.png'

interface Story {
  id: string
  slug: string
  category: string
  title: string
  description: string
  metrics: { label: string; value: string }[]
  results: string[]
  client: {
    name: string
    role: string
    avatar: string
  }
  techStack: string[]
  gradient: string
  darkGradient: string
  mockup: 'smartphone' | 'laptop' | 'tablet'
  borderColor: string
  buttonBackgroundColor: string
}

// Category-based styling configuration
const categoryStyles: Record<string, {
  gradient: string
  darkGradient: string
  borderColor: string
  buttonBackgroundColor: string
  mockup: 'smartphone' | 'laptop' | 'tablet'
}> = {
  'E-Commerce': {
    gradient: 'from-slate-100 via-blue-50 to-slate-200',
    darkGradient: 'dark:from-slate-700 dark:via-slate-700 dark:to-slate-800',
    borderColor: 'border-blue-400 dark:border-blue-600',
    buttonBackgroundColor: 'bg-blue-400 dark:bg-blue-600',
    mockup: 'smartphone'
  },
  'FinTech': {
    gradient: 'from-gray-100 via-purple-50 to-gray-200',
    darkGradient: 'dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    borderColor: 'border-purple-400 dark:border-purple-600',
    buttonBackgroundColor: 'bg-purple-400 dark:bg-purple-600',
    mockup: 'laptop'
  },
  'Healthcare': {
    gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
    darkGradient: 'dark:from-indigo-950 dark:via-indigo-900 dark:to-indigo-950',
    borderColor: 'border-indigo-400 dark:border-indigo-600',
    buttonBackgroundColor: 'bg-indigo-400 dark:bg-indigo-600',
    mockup: 'laptop'
  },
  'EdTech': {
    gradient: 'from-sky-50 via-sky-50 to-sky-100',
    darkGradient: 'dark:from-sky-950 dark:via-sky-900 dark:to-sky-950',
    borderColor: 'border-sky-400 dark:border-sky-600',
    buttonBackgroundColor: 'bg-sky-400 dark:bg-sky-600',
    mockup: 'laptop'
  },
  'Real Estate': {
    gradient: 'from-amber-50 via-orange-50 to-amber-100',
    darkGradient: 'dark:from-amber-950 dark:via-amber-900 dark:to-amber-950',
    borderColor: 'border-amber-400 dark:border-amber-600',
    buttonBackgroundColor: 'bg-amber-400 dark:bg-amber-600',
    mockup: 'smartphone'
  },
  'Restaurant': {
    gradient: 'from-rose-50 via-pink-50 to-rose-100',
    darkGradient: 'dark:from-rose-950 dark:via-pink-900 dark:to-rose-950',
    borderColor: 'border-rose-400 dark:border-rose-600',
    buttonBackgroundColor: 'bg-rose-400 dark:bg-rose-600',
    mockup: 'smartphone'
  }
}

// Default styling for unknown categories
const defaultStyle = {
  gradient: 'from-gray-50 via-gray-100 to-gray-200',
  darkGradient: 'dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
  borderColor: 'border-gray-400 dark:border-gray-600',
  buttonBackgroundColor: 'bg-gray-400 dark:bg-gray-600',
  mockup: 'laptop' as const
}

// Helper to get image URL from Next.js image import
const getImageUrl = (img: any): string => {
  if (typeof img === 'string') return img
  return img?.src || img?.default?.src || String(img)
}

// Map story titles/slugs to image imports
const getImage = (title: string, slug: string): any | null => {
  const titleLower = title.toLowerCase()
  const slugLower = slug.toLowerCase()

  // Map based on title or slug keywords
  if (titleLower.includes('shopsmart') || slugLower.includes('shopsmart')) {
    return shopSmartImage
  }
  if (titleLower.includes('securepay') || slugLower.includes('securepay')) {
    return securePayImage
  }
  if (titleLower.includes('medicare') || slugLower.includes('medicare')) {
    return medicareImage
  }
  if (titleLower.includes('brightminds') || slugLower.includes('brightminds')) {
    return brightMindsImage
  }

  return null
}

// Transform CaseStudy to Story format
const transformCaseStudyToStory = (caseStudy: CaseStudy): Story => {
  const style = categoryStyles[caseStudy.category] || defaultStyle

  // Extract metrics from businessImpact (take first 2, or use defaults if not enough)
  const metrics = caseStudy.results.businessImpact.length >= 2
    ? caseStudy.results.businessImpact.slice(0, 2).map(impact => ({
      label: impact.label,
      value: impact.value
    }))
    : [
      { label: 'Users', value: caseStudy.quickStats.users || 'N/A' },
      { label: 'Platform', value: caseStudy.quickStats.platform || 'N/A' }
    ]

  // Use technicalAchievements as results, clean up emoji if present
  // If no technicalAchievements, use a default message
  const results = caseStudy.results.technicalAchievements.length > 0
    ? caseStudy.results.technicalAchievements.map(achievement =>
      achievement.replace(/^[⚡🎯🔒📱♿🌐]+\s*/, '').trim()
    )
    : ['High performance', 'Scalable architecture', 'Modern technology stack']

  // Combine all technologies, limit to 4 for display
  const allTechs = [
    ...caseStudy.technologies.frontend,
    ...caseStudy.technologies.backend,
    ...(caseStudy.technologies.mobile || []),
  ]
  const techStack = allTechs.length > 0
    ? allTechs.slice(0, 4)
    : caseStudy.quickStats.technologies.slice(0, 4)

  // Generate avatar URL from testimonial author name
  const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(caseStudy.testimonial.author)}`

  return {
    id: caseStudy.id,
    slug: caseStudy.slug,
    category: caseStudy.category,
    title: caseStudy.title,
    description: caseStudy.heroDescription,
    metrics,
    results,
    client: {
      name: caseStudy.testimonial.author,
      role: caseStudy.testimonial.role,
      avatar
    },
    techStack,
    gradient: style.gradient,
    darkGradient: style.darkGradient,
    borderColor: style.borderColor,
    buttonBackgroundColor: style.buttonBackgroundColor,
    mockup: style.mockup
  }
}

// Component to display mockup with image or fallback
const MockupDisplay = ({ story }: { story: Story }) => {
  const [imageError, setImageError] = useState(false)
  const imageImport = getImage(story.title, story.slug)
  const imageUrl = imageImport ? getImageUrl(imageImport) : null
  const shouldShowImage = imageUrl && !imageError

  return (
    <div className="relative transform hover:scale-105 transition-transform duration-500 w-full h-full">
      {/* Device Frame Container */}
      <div
        className={`relative mx-auto h-full ${story.mockup === 'smartphone'
          ? 'w-64 h-[500px]'
          : story.mockup === 'tablet'
            ? 'w-96 h-[480px]'
            : story.mockup === 'laptop'
              ? 'w-full h-[600px]'
              : 'w-full h-full'
          }`}
      >
        {/* Screen */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Image or Mockup Content Preview */}
          {shouldShowImage ? (
            <div className="absolute inset-0 flex items-center justify-center p-1">
              <Image
                src={imageUrl}
                alt={story.title}
                fill
                className="object-contain rounded-lg"
                onError={() => setImageError(true)}
                unoptimized
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6">
              <div className="w-full space-y-3">
                {/* Mock Bars */}
                <div className="h-4 md:h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full"></div>
                <div className="h-3 md:h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full w-3/4"></div>
                <div className="h-3 md:h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full w-1/2"></div>
              </div>

              {/* App Icon Placeholder */}
              <div className="mt-6 md:mt-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 rounded-2xl shadow-lg"></div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

const UserStories = () => {
  const router = useRouter()

  // Transform case studies to stories format
  const stories = useMemo(() => {
    return caseStudies.slice(0, 4).map(transformCaseStudyToStory)
  }, [])

  return (
    <section
      className="relative bg-gradient-to-b from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-10 lg:py-16 px-4 animate-fade-in-up"
      aria-label="Success Stories Section"
    >
      {/* Section Header */}
      <div className="text-center sticky top-[-80px] animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Success Stories</span>
        </div>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
          Our Success Stories
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real Results. Real Impact. Real Innovation.
        </p>
      </div>

      {/* Sticky Cards Container */}
      <div className="relative animate-fade-in-up">
        {stories.map((story, index) => {
          const topOffset = 20 + index * 80
          const scale = 1 - index * 0.01
          return (
            <article
              key={story.id}
              className="sticky will-change-transform transition-all duration-500 ease-out"
              style={{
                top: `${topOffset}px`,
                transform: `scaleY(${scale})`,
                zIndex: 10 + index,
              }}
              aria-label={`Success story: ${story.title}`}
            >
              <div
                className={`flex items-center justify-center px-4 py-20`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className={`relative w-full max-w-7xl bg-gradient-to-br border ${story.gradient} ${story.darkGradient} ${story.borderColor} rounded-3xl dark:shadow-gray-950/50 overflow-hidden transition-transform duration-500`}
                  style={{
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {/* Striped Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
                    <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
                  </div>

                  {/* Card Content Grid */}
                  <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 py-4 md:py-6 lg:py-8 px-8 md:px-10 lg:px-12">
                    {/* Left: Content */}
                    <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                      <p className={`text-xs md:text-sm font-semibold italic text-gray-800 dark:text-gray-100 bg-white/20 dark:bg-white/10  rounded-full px-4 py-1.5 w-fit border ${story.borderColor}`}>
                        {story.category}
                      </p>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
                        {story.title}
                      </h3>

                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                        {story.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                        {story.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="bg-white/30 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20 dark:border-white/10"
                          >
                            <p className="text-xs uppercase text-gray-700 dark:text-gray-300 mb-1 font-medium">
                              {metric.label}
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Results List */}
                      {/* <div className="pt-2">
                        <ul className="space-y-2">
                          {story.results.map((result, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm md:text-base text-gray-800 dark:text-gray-100"
                            >
                              <svg
                                className="w-5 h-5 text-gray-900 dark:text-gray-50 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div> */}

                      {/* Tech Stack Tags */}
                      {/* <div className="flex flex-wrap gap-2 pt-2">
                        {story.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-white/40 dark:bg-white/15 backdrop-blur-sm rounded-full text-gray-900 dark:text-gray-100 font-medium border border-white/20 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div> */}

                      {/* Client Info */}
                      <div className="flex items-center gap-3 md:gap-4 pt-4 bg-white/30 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-white/20 dark:border-white/10">
                        <img
                          src={story.client.avatar}
                          alt={story.client.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 dark:border-white/30"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-bold text-gray-900 dark:text-gray-50 text-base md:text-lg">
                            {story.client.name}
                          </p>
                          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                            {story.client.role}
                          </p>
                        </div>
                      </div>

                      {/* View Case Study Button */}
                      <Link
                        href={`/case-study/${story.id}`}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-2 md:py-3 backdrop-blur-sm text-background rounded-xl  hover:opacity-80 dark:hover:bg-gray-800 transition-all duration-300 mt-4 group ${story.buttonBackgroundColor}`}
                      >
                        <span>Read more</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Right: Mockup */}
                    <div className="flex items-center justify-center md:block hidden">
                      <MockupDisplay story={story} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Bottom Spacing */}
      <div className="flex justify-center z-10 animate-fade-in-up">
        <Button className="group cursor-pointer" size="lg" onClick={() => router.push('/case-study')}>
          View more success stories
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default UserStories;