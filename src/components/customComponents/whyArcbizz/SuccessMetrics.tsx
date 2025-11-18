'use client'

import React from 'react'
import { TrendingUp, Clock, Award, Users, Target, Zap, CheckCircle2, BarChart3 } from 'lucide-react'

const SuccessMetrics = () => {
    const metrics = [
        {
            icon: TrendingUp,
            value: '98%',
            label: 'Client Satisfaction Rate',
            description: 'Our clients consistently rate us highly for quality, communication, and results.',
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-900 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600'
        },
        {
            icon: Clock,
            value: '95%',
            label: 'On-Time Delivery',
            description: 'We meet deadlines consistently, ensuring your projects launch on schedule.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-900 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Award,
            value: '100+',
            label: 'Projects Delivered',
            description: 'Successfully completed projects across various industries and technologies.',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-900 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: Users,
            value: '50+',
            label: 'Happy Clients',
            description: 'Growing portfolio of satisfied clients who trust us with their technology needs.',
            gradient: 'from-orange-50 via-red-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-red-900 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-red-600'
        },
        {
            icon: Target,
            value: '10+',
            label: 'Industries Served',
            description: 'Expertise across diverse industries from E-Commerce to Healthcare to FinTech.',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-900 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: Zap,
            value: '48hrs',
            label: 'Average Response Time',
            description: 'Quick response to inquiries and support requests, keeping your projects moving.',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-900 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600'
        },
    ]

    const achievements = [
        {
            title: 'Zero Security Breaches',
            description: '100% security record with no data breaches or security incidents across all projects.',
            icon: CheckCircle2,
        },
        {
            title: 'Scalable Solutions',
            description: 'All our solutions are built to scale, handling growth from startup to enterprise level.',
            icon: BarChart3,
        },
        {
            title: 'Continuous Improvement',
            description: 'Regular updates and optimizations keep your systems running at peak performance.',
            icon: TrendingUp,
        },
    ]

    return (
        <section id="success-metrics" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background animate-fade-in-up">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Award className="w-4 h-4" />
                        <span>Proven Results</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Results That Speak for Themselves
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our track record demonstrates our commitment to excellence and client success. Here's what we've achieved together.
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} ${metric.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10 text-center">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} ${metric.darkGradient} border ${metric.borderColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className={`text-4xl md:text-5xl font-bold mb-2 text-primary`}>
                                        {metric.value}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">
                                        {metric.label}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Achievements Section */}
                <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                        Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-card/50 rounded-2xl border border-border/50"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-foreground">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground text-lg mb-6">
                        Ready to achieve similar results for your business?
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                        >
                            <Target className="w-5 h-5" />
                            Start Your Project
                        </a>
                        <a
                            href="/case-study"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:border-primary/50 transition-all duration-300"
                        >
                            View Case Studies
                            <TrendingUp className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessMetrics

