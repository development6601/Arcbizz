'use client'

import React from 'react'
import { Heart, BookOpen, Users, Zap, Target, TrendingUp, Coffee, Lightbulb, HeartHandshake } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WhyWorkWithUs = () => {
    const culturePoints = [
        {
            icon: Zap,
            title: 'Fast-Paced Growth',
            description: 'As a startup, we move fast and adapt quickly. You\'ll have the opportunity to take on significant responsibilities early and see your impact immediately.',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-950 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600'
        },
        {
            icon: BookOpen,
            title: 'Continuous Learning',
            description: 'We invest in your growth with learning budgets, mentorship programs, and opportunities to work with cutting-edge technologies.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Users,
            title: 'Collaborative Culture',
            description: 'Work in a supportive environment where every voice is heard. We believe great ideas come from anywhere, and we encourage open dialogue.',
            gradient: 'from-purple-50 via-indigo-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-indigo-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-indigo-600'
        },
        {
            icon: Heart,
            title: 'Work-Life Balance',
            description: 'We understand that a happy team is a productive team. Enjoy flexible hours, remote work options, and a culture that respects your time.',
            gradient: 'from-pink-50 via-rose-50 to-pink-100',
            darkGradient: 'dark:from-pink-950 dark:via-rose-950 dark:to-pink-950',
            borderColor: 'border-pink-400 dark:border-rose-600'
        },
        {
            icon: Target,
            title: 'Meaningful Impact',
            description: 'Your work directly shapes our company\'s future. See your ideas turn into reality and make a real difference in how we grow and serve our clients.',
            gradient: 'from-emerald-50 via-emerald-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950',
            borderColor: 'border-emerald-400 dark:border-emerald-600'
        },
        {
            icon: TrendingUp,
            title: 'Rapid Career Advancement',
            description: 'With our fast growth trajectory, opportunities for promotion and new challenges appear regularly. Grow your career at the speed of our company.',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: Coffee,
            title: 'Startup Energy',
            description: 'Experience the excitement of building something from the ground up. Every day brings new challenges, learning opportunities, and chances to innovate.',
            gradient: 'from-amber-50 via-orange-50 to-amber-100',
            darkGradient: 'dark:from-amber-950 dark:via-orange-950 dark:to-amber-950',
            borderColor: 'border-amber-400 dark:border-orange-600'
        },
        {
            icon: Lightbulb,
            title: 'Innovation First',
            description: 'We\'re not bound by legacy systems or old ways of thinking. Experiment, innovate, and bring your creative solutions to the table.',
            gradient: 'from-violet-50 via-purple-50 to-violet-100',
            darkGradient: 'dark:from-violet-950 dark:via-purple-950 dark:to-violet-950',
            borderColor: 'border-violet-400 dark:border-purple-600'
        },
    ]

    return (
        <section id="why-work-with-us" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <HeartHandshake className="w-4 h-4" />
                        <span>Why Choose Arcbizz</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Why Work With Us
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join a team where innovation meets opportunity, and your growth is our priority. Here's what makes working at Arcbizz special.
                    </p>
                </div>

                {/* Culture Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {culturePoints.map((point, index) => {
                        const Icon = point.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} ${point.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} ${point.darkGradient} border ${point.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {point.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground text-lg mb-6">
                        Ready to be part of our journey?
                    </p>
                    <Button
                        size="lg"
                        onClick={() => {
                            const positionsSection = document.getElementById('open-positions');
                            positionsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore Open Positions
                        <TrendingUp className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default WhyWorkWithUs

