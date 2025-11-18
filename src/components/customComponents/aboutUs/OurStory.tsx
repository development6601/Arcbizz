'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Calendar, Lightbulb, TrendingUp, Award } from 'lucide-react'
import logo from "@/assets/images/fullLogo.png"
import Image from 'next/image'

const OurStory = () => {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observers = cardRefs.current.map((ref, index) => {
            if (!ref) return null

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => new Set([...prev, index]))
                        }
                    })
                },
                { threshold: 0.2, rootMargin: '-50px' }
            )

            observer.observe(ref)
            return observer
        })

        return () => {
            observers.forEach((obs) => obs?.disconnect())
        }
    }, [])

    const milestones = [
        {
            number: '01',
            year: '2023',
            month: '01',
            title: 'The Beginning',
            description: 'Arcbizz was founded with a vision to revolutionize digital solutions. We started as a small team of passionate developers committed to delivering exceptional software.',
            icon: Lightbulb,
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600',
            textColor: 'text-blue-600 dark:text-cyan-400',
            iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        },
        {
            number: '02',
            year: '2023',
            month: '02',
            title: 'First Breakthrough',
            description: 'We delivered our first major project, gaining recognition in the industry. Our commitment to quality and innovation set us apart from the competition.',
            icon: Award,
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-purple-600',
            textColor: 'text-purple-600 dark:text-purple-400',
            iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        },
        {
            number: '03',
            year: '2023',
            month: '03',
            title: 'Rapid Growth',
            description: 'Our client base expanded rapidly as word spread about our innovative solutions. We grew our team and refined our processes to maintain excellence at scale.',
            icon: TrendingUp,
            gradient: 'from-rose-50 via-rose-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-pink-950 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-rose-600',
            textColor: 'text-rose-600 dark:text-rose-400',
            iconBg: 'bg-rose-100 dark:bg-rose-900/30',
        },
        {
            number: '04',
            year: '2023',
            month: '04',
            title: 'Today & Beyond',
            description: 'We continue to innovate and push boundaries. With a growing team and expanding portfolio, we\'re ready to help more businesses achieve their digital transformation goals.',
            icon: Calendar,
            gradient: 'from-orange-50 via-yellow-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-orange-600',
            textColor: 'text-orange-600 dark:text-orange-400',
            iconBg: 'bg-orange-100 dark:bg-orange-900/30',
        },
    ]

    return (
        <section id="our-story" className="relative py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background animate-fade-in-up">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Calendar className="w-4 h-4" />
                        <span>Our Journey</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        Our Story
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                        From a bold vision to a trusted technology partner — discover the journey that shaped Arcbizz into what it is today.
                    </p>
                </div>

                {/* Story Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
                    {/* Left: Main Story */}
                    <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Founded in 2023, Arcbizz emerged from a simple yet powerful idea: <strong className="text-foreground font-semibold">technology should empower businesses, not complicate them</strong>. Our founders, experienced developers and entrepreneurs, saw a gap in the market for a company that truly understood both technology and business needs.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mt-4 md:mt-6">
                                What started as a small team of passionate innovators has grown into a dynamic organization serving clients across various industries. Despite being a young company, we've quickly established ourselves as a trusted partner for businesses seeking cutting-edge digital solutions.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mt-4 md:mt-6">
                                Our journey has been marked by rapid growth, continuous learning, and an unwavering commitment to excellence. Every project we undertake is an opportunity to push boundaries and deliver solutions that make a real difference.
                            </p>
                        </div>
                    </div>

                    {/* Right: Visual Element */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm transition-shadow duration-300">
                            <div className="aspect-square rounded-xl md:rounded-2xl bg-background flex items-center justify-center">
                                <div className="text-center space-y-3 md:space-y-4">
                                    <Image src={logo} alt="Arcbizz Logo" className="w-2/3 mx-auto object-contain" />
                                    <div className="text-4xl font-bold pt-4">2023</div>
                                    <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground">The Year We Started</div>
                                    <div className="flex items-center justify-center gap-2 pt-2 md:pt-4">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-chart-4 rounded-full animate-pulse" />
                                        <span className="text-xs sm:text-sm text-muted-foreground">Growing Strong</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Timeline with Connected Cards */}
                <div className="relative mt-16 md:mt-20">
                    {/* Dashed Timeline Line - Desktop */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-0"
                        style={{
                            width: '2px',
                            height: 'calc(100% - 80px)',
                            top: '40px',
                            background: `repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 8px, transparent 8px, transparent 16px)`,
                            opacity: 0.3,
                        }}
                    />

                    {/* Milestones */}
                    <div className="space-y-16 md:space-y-20 lg:space-y-24 pt-0 lg:pt-28">
                        {milestones.map((milestone, index) => {
                            const Icon = milestone.icon
                            const isEven = index % 2 === 0
                            const isVisible = visibleCards.has(index)
                            const cardRotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1'

                            return (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        cardRefs.current[index] = el
                                    }}
                                    className={`relative flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 transition-all duration-300 ${isEven ? 'lg:flex-row-reverse' : ''
                                        } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Content Card with Enhanced 3D Effect */}
                                    <div className={`w-full lg:w-5/12 z-10 ${isEven ? 'lg:text-right' : ''}`}>
                                        <div
                                            className={`relative bg-card/80 backdrop-blur-sm border-2 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 
                                                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 
                                                ${milestone.gradient} ${milestone.darkGradient} ${milestone.borderColor} 
                                                bg-gradient-to-br ${cardRotation} hover:rotate-0
                                                shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                                                border-opacity-50 hover:border-opacity-100`}
                                        >
                                            {/* Number Badge */}
                                            <div className={`absolute -top-4 ${!isEven ? 'lg:-right-4 -right-4' : '-left-4'} 
                                                w-12 h-12 md:w-14 md:h-14 rounded-full 
                                                bg-gradient-to-br from-primary to-primary/80 
                                                flex items-center justify-center 
                                                shadow-lg border-4 border-background z-20`}>
                                                <span className="text-lg md:text-xl font-bold text-primary-foreground">
                                                    {milestone.number}
                                                </span>
                                            </div>

                                            {/* Date Marker */}
                                            <div className={`mb-4 md:mb-6 ${isEven ? 'lg:text-right' : ''}`}>
                                                <div className={`text-xs md:text-sm font-semibold ${milestone.textColor} mb-2`}>
                                                    {milestone.year} {milestone.month}
                                                </div>
                                            </div>

                                            {/* Icon & Title */}
                                            <div className={`flex items-center gap-3 md:gap-4 mb-4 md:mb-6 ${isEven ? 'lg:justify-end' : ''}`}>
                                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${milestone.iconBg} flex items-center justify-center shadow-md`}>
                                                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${milestone.textColor}`} />
                                                </div>
                                                <div>
                                                    <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${milestone.textColor}`}>
                                                        {milestone.title}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Dot - Desktop */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full border-4 border-background shadow-xl hidden lg:block z-10" />

                                    {/* Connecting Line from Card to Timeline - Desktop */}
                                    <div
                                        className="absolute z-0 top-3 left-1/2 transform -translate-x-1/2 w-1/2 h-0.75 hidden lg:block "
                                        style={{
                                            background: `repeating-linear-gradient(to right, var(--primary) 0px, var(--primary) 8px, transparent 8px, transparent 16px)`,
                                            opacity: 0.25,
                                        }}
                                    />

                                    {/* Empty Space for Alignment - Desktop */}
                                    <div className="hidden lg:block w-5/12" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default OurStory

