'use client'

import React from 'react'
import { Heart, Users, Zap, Target, Lightbulb, Shield, Coffee, Code2 } from 'lucide-react'

const TeamCulture = () => {
    const cultureValues = [
        {
            icon: Heart,
            title: 'Passion-Driven',
            description: 'We love what we do. Our team is fueled by passion for technology and innovation, bringing energy and enthusiasm to every project.',
            gradient: 'from-rose-50 via-pink-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-pink-950 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-rose-600',
        },
        {
            icon: Users,
            title: 'Collaborative Spirit',
            description: 'Great ideas come from great teamwork. We foster an environment where everyone\'s voice is heard and valued.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-blue-600',
        },
        {
            icon: Zap,
            title: 'Innovation First',
            description: 'We embrace new technologies and creative solutions. Innovation isn\'t just encouraged—it\'s expected.',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-950 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600',
        },
        {
            icon: Target,
            title: 'Results-Oriented',
            description: 'We set ambitious goals and work together to achieve them. Every team member contributes to our collective success.',
            gradient: 'from-emerald-50 via-green-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-green-950 dark:to-emerald-950',
            borderColor: 'border-emerald-400 dark:border-emerald-600',
        },
        {
            icon: Lightbulb,
            title: 'Continuous Learning',
            description: 'The tech world evolves fast, and so do we. We invest in learning, growth, and staying ahead of the curve.',
            gradient: 'from-purple-50 via-indigo-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-indigo-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-indigo-600',
        },
        {
            icon: Shield,
            title: 'Trust & Transparency',
            description: 'We build trust through open communication, honesty, and transparency in everything we do.',
            gradient: 'from-teal-50 via-cyan-50 to-teal-100',
            darkGradient: 'dark:from-teal-950 dark:via-cyan-950 dark:to-teal-950',
            borderColor: 'border-teal-400 dark:border-cyan-600',
        },
    ]

    const teamActivities = [
        {
            icon: Coffee,
            title: 'Team Building',
            description: 'Regular team events, coffee chats, and social gatherings to strengthen our bonds.',
        },
        {
            icon: Code2,
            title: 'Tech Sessions',
            description: 'Weekly tech talks, code reviews, and knowledge sharing sessions.',
        },
        {
            icon: Lightbulb,
            title: 'Innovation Days',
            description: 'Dedicated time for exploring new ideas, tools, and creative solutions.',
        },
        {
            icon: Target,
            title: 'Goal Setting',
            description: 'Clear objectives, regular check-ins, and celebrating wins together.',
        },
    ]

    return (
        <section id="team-culture" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        <span>Our Culture</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        What Makes Us Unique
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our culture is built on shared values, mutual respect, and a commitment to excellence. Here's what defines us as a team.
                    </p>
                </div>

                {/* Culture Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {cultureValues.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} ${value.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} ${value.darkGradient} border ${value.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Team Activities */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                        How We Work Together
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamActivities.map((activity, index) => {
                            const Icon = activity.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-card border border-border rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-foreground">
                                        {activity.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Culture Statement */}
                <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        Building Something Great Together
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        At Arcbizz, we believe that the best work happens when talented people come together with shared values and a common purpose.
                        Our team culture isn't just about what we do—it's about how we do it, why we do it, and who we become in the process.
                        We're not just colleagues; we're collaborators, innovators, and friends building the future of technology together.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TeamCulture

