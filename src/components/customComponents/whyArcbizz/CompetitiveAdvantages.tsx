'use client'

import React from 'react'
import { CheckCircle2, Code2, Rocket, DollarSign, Globe, Headphones } from 'lucide-react'

const CompetitiveAdvantages = () => {
    const advantages = [
        {
            icon: Code2,
            title: 'Cutting-Edge Technology',
            description: 'We leverage the latest technologies and frameworks to build modern, efficient solutions that give you a competitive edge.',
            points: [
                'Modern tech stack',
                'Latest frameworks & tools',
                'Cloud-native architecture',
                'AI/ML integration capabilities'
            ],
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-900 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Rocket,
            title: 'Agile Methodology',
            description: 'Our agile approach ensures flexibility, transparency, and faster time-to-market. You stay in control throughout the development process.',
            points: [
                'Sprint-based development',
                'Regular progress updates',
                'Quick iterations',
                'Adaptive planning'
            ],
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-900 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: DollarSign,
            title: 'Cost-Effective Solutions',
            description: 'Get maximum value for your investment. We offer competitive pricing without compromising on quality or features.',
            points: [
                'Transparent pricing',
                'No hidden costs',
                'Flexible engagement models',
                'ROI-focused approach'
            ],
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-900 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600'
        },
        {
            icon: Globe,
            title: 'Global Reach, Local Touch',
            description: 'We serve clients worldwide while maintaining personalized service. Experience global expertise with local understanding.',
            points: [
                'Worldwide client base',
                '24/7 availability',
                'Multi-timezone support',
                'Cultural understanding'
            ],
            gradient: 'from-orange-50 via-red-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-red-900 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-red-600'
        },
        {
            icon: Headphones,
            title: 'Dedicated Support',
            description: 'Our commitment doesn\'t end at launch. We provide ongoing support, maintenance, and updates to keep your systems running smoothly.',
            points: [
                'Post-launch support',
                'Regular maintenance',
                'Performance monitoring',
                'Continuous improvements'
            ],
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-900 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: CheckCircle2,
            title: 'Proven Track Record',
            description: 'Our portfolio speaks for itself. We\'ve successfully delivered projects across industries, earning trust and recognition.',
            points: [
                '100+ successful projects',
                '50+ satisfied clients',
                '98% client satisfaction',
                'Industry recognition'
            ],
            gradient: 'from-pink-50 via-rose-50 to-pink-100',
            darkGradient: 'dark:from-pink-950 dark:via-rose-900 dark:to-pink-950',
            borderColor: 'border-pink-400 dark:border-rose-600'
        },
    ]

    return (
        <section id="competitive-advantages" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background animate-fade-in-up">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Rocket className="w-4 h-4" />
                        <span>What Sets Us Apart</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Our Competitive Advantages
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We don't just build software—we build partnerships. Here's what makes us different from the rest.
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => {
                        const Icon = advantage.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} ${advantage.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.gradient} ${advantage.darkGradient} border ${advantage.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {advantage.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {advantage.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CompetitiveAdvantages

