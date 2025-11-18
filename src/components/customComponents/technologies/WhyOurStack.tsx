'use client'

import React from 'react'
import Link from 'next/link'
import { Zap, Shield, TrendingUp, Users, RefreshCw, Target } from 'lucide-react'

const WhyOurStack = () => {
    const reasons = [
        {
            icon: Zap,
            title: 'Performance First',
            description: 'We choose technologies that deliver optimal performance and scalability. Our stack is optimized for speed, efficiency, and handling high-traffic applications.',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-950 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600'
        },
        {
            icon: Shield,
            title: 'Security & Reliability',
            description: 'Security is built into every technology we use. We prioritize frameworks and tools with strong security features and active maintenance communities.',
            gradient: 'from-emerald-50 via-emerald-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950',
            borderColor: 'border-emerald-400 dark:border-emerald-600'
        },
        {
            icon: TrendingUp,
            title: 'Industry Proven',
            description: 'Our technology choices are based on industry standards and proven track records. We use technologies trusted by leading companies worldwide.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Users,
            title: 'Strong Community Support',
            description: 'We leverage technologies with active communities, extensive documentation, and rich ecosystems. This ensures long-term support and continuous improvement.',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: RefreshCw,
            title: 'Future-Proof',
            description: 'Our technology stack is forward-thinking and adaptable. We stay updated with the latest trends and adopt technologies that will remain relevant for years to come.',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: Target,
            title: 'Best Fit Solutions',
            description: 'We don\'t use a one-size-fits-all approach. We carefully select technologies that best match your project requirements, budget, and long-term goals.',
            gradient: 'from-rose-50 via-pink-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-pink-950 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-pink-600'
        },
    ]

    return (
        <section id="why-our-stack" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Target className="w-4 h-4" />
                        <span>Why Choose Our Stack</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Strategic Technology Choices
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our technology stack isn't just a collection of tools—it's a carefully curated selection designed to deliver the best results for your business.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} ${reason.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} ${reason.darkGradient} border ${reason.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {reason.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                            Ready to Build with Modern Technologies?
                        </h3>
                        <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                            Let's discuss how our technology expertise can help bring your vision to life. We'll recommend the perfect stack for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact-us" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-center">
                                Start a Project
                            </Link>
                            <Link href="/case-study" className="px-6 py-3 bg-card border border-border text-foreground rounded-xl font-semibold hover:border-primary/30 transition-all duration-300 text-center">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyOurStack

