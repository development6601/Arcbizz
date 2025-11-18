'use client'

import React from 'react'
import { Zap, Shield, Users, Target, Clock, TrendingUp, Award, Heart } from 'lucide-react'

const KeyBenefits = () => {
    const benefits = [
        {
            icon: Zap,
            title: 'Fast Delivery',
            description: 'We understand time is money. Our agile development process ensures rapid delivery without compromising quality. Get your project to market faster.',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-900 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600'
        },
        {
            icon: Shield,
            title: 'Proven Security',
            description: 'Your data and applications are protected with industry-leading security practices. We follow OWASP guidelines and implement best-in-class security measures.',
            gradient: 'from-red-50 via-orange-50 to-red-100',
            darkGradient: 'dark:from-red-950 dark:via-orange-900 dark:to-red-950',
            borderColor: 'border-red-400 dark:border-orange-600'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Work with seasoned professionals who bring years of experience and deep technical expertise. Our team stays current with the latest technologies and best practices.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-900 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Target,
            title: 'Result-Driven',
            description: 'We focus on delivering measurable business outcomes. Every project is aligned with your goals, ensuring maximum ROI and business impact.',
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-900 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600'
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock support means your business never stops. Our dedicated support team is always available to assist you whenever you need help.',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-900 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: TrendingUp,
            title: 'Scalable Solutions',
            description: 'Build for today, scale for tomorrow. Our solutions are designed to grow with your business, handling increased load and complexity seamlessly.',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-900 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: Award,
            title: 'Quality Assured',
            description: 'Rigorous testing and quality assurance processes ensure bug-free, reliable software. We maintain the highest standards in every line of code.',
            gradient: 'from-pink-50 via-rose-50 to-pink-100',
            darkGradient: 'dark:from-pink-950 dark:via-rose-900 dark:to-pink-950',
            borderColor: 'border-pink-400 dark:border-rose-600'
        },
        {
            icon: Heart,
            title: 'Client-Centric',
            description: 'Your success is our priority. We work closely with you, listen to your needs, and adapt our approach to ensure we exceed your expectations.',
            gradient: 'from-rose-50 via-pink-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-pink-900 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-pink-600'
        },
    ]

    return (
        <section id="key-benefits" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background animate-fade-in-up">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Award className="w-4 h-4" />
                        <span>Our Advantages</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Why Choose Arcbizz?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover what makes us the preferred choice for businesses seeking exceptional technology solutions.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} ${benefit.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} ${benefit.darkGradient} border ${benefit.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default KeyBenefits

