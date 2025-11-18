'use client'

import React from 'react'
import { Target, Heart, Zap, Shield, Users, Lightbulb, HeartHandshake, Goal } from 'lucide-react'

const MissionValues = () => {
    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We strive for excellence in every project, setting high standards and continuously improving our processes to deliver exceptional results.',
            gradient: 'from-slate-100 via-blue-50 to-slate-200',
            darkGradient: 'dark:from-slate-900 dark:via-slate-950 dark:to-slate-900',
            borderColor: 'border-blue-400 dark:border-blue-600',
        },
        {
            icon: Heart,
            title: 'Client-Centric',
            description: 'Your success is our success. We put our clients at the center of everything we do, ensuring their needs and goals are always our top priority.',
            gradient: 'from-teal-50 via-cyan-50 to-teal-100',
            darkGradient: 'dark:from-teal-950 dark:via-cyan-950 dark:to-teal-950',
            borderColor: 'border-cyan-500 dark:border-cyan-600',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and innovative approaches to solve complex problems and create solutions that drive real business value.',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-indigo-600',
        },
        {
            icon: Shield,
            title: 'Integrity',
            description: 'We conduct business with honesty, transparency, and ethical practices. Trust is the foundation of every relationship we build.',
            gradient: 'from-emerald-50 via-emerald-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-green-950 dark:to-emerald-950',
            borderColor: 'border-emerald-400 dark:border-emerald-600',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We believe in the power of teamwork. By working closely with clients and fostering internal collaboration, we achieve better outcomes together.',
            gradient: 'from-amber-50 via-orange-50 to-amber-100',
            darkGradient: 'dark:from-amber-950 dark:via-orange-950 dark:to-amber-950',
            borderColor: 'border-amber-400 dark:border-amber-600',
        },
        {
            icon: Lightbulb,
            title: 'Continuous Learning',
            description: 'The tech landscape evolves rapidly. We stay ahead by continuously learning, adapting, and exploring new technologies and methodologies.',
            gradient: 'from-rose-50 via-pink-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-purple-950 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-rose-600',
        },
    ]

    return (
        <section id="mission-values" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background animate-fade-in-up">
            <div className="container mx-auto relative z-10">
                {/* Mission Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Target className="w-4 h-4" />
                        <span>Our Purpose</span>
                    </div>
                    <div className="max-w-7xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                            Mission, Vision & Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <Goal className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    To empower businesses with innovative technology solutions that drive growth, efficiency, and success. We're committed to delivering exceptional value through cutting-edge development, thoughtful design, and unwavering support.
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <Lightbulb className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    To become the most trusted technology partner for businesses worldwide, recognized for our innovation, excellence, and commitment to client success. We envision a future where technology seamlessly enables business growth and transformation.
                                </p>
                            </div>
                            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <HeartHandshake className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    To foster a culture of integrity, collaboration, and continuous improvement in everything we do. We believe in building lasting relationships with our clients, empowering our teams, and maintaining transparency as we deliver solutions that make a meaningful impact on businesses and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        <span>What We Stand For</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        These fundamental principles guide every decision we make and every solution we create.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => {
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
            </div>
        </section>
    )
}

export default MissionValues

