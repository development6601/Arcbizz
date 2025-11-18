'use client'

import React from 'react'
import { Award, Users, Rocket, Target, TrendingUp, Code2, Heart, Star } from 'lucide-react'

const TeamStats = () => {
    const stats = [
        {
            icon: Users,
            value: '6+',
            label: 'Team Members',
            description: 'Diverse talents working together',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600',
            color: 'text-blue-400 dark:text-cyan-600'
        },
        {
            icon: Award,
            value: '100+',
            label: 'Projects Delivered',
            description: 'Successfully completed projects',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600',
            color: 'text-purple-400 dark:text-pink-600'
        },
        {
            icon: Rocket,
            value: '10+',
            label: 'Years Combined Experience',
            description: 'Collective expertise and knowledge',
            gradient: 'from-orange-50 via-red-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-red-950 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-red-600',
            color: 'text-orange-400 dark:text-red-600'
        },
        {
            icon: Target,
            value: '50+',
            label: 'Happy Clients',
            description: 'Satisfied customers worldwide',
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-950 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600',
            color: 'text-green-400 dark:text-emerald-600'
        },
        {
            icon: Code2,
            value: '15+',
            label: 'Technologies Mastered',
            description: 'Cutting-edge tech stack',
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600',
            color: 'text-indigo-400 dark:text-blue-600'
        },
        {
            icon: Star,
            value: '98%',
            label: 'Client Satisfaction',
            description: 'Exceeding expectations',
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-950 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600',
            color: 'text-yellow-400 dark:text-orange-600'
        },
    ]

    const achievements = [
        {
            title: 'Innovation Award',
            description: 'Recognized for outstanding innovation in software development',
            year: '2024',
        },
        {
            title: 'Client Excellence',
            description: 'Maintained 98% client satisfaction rate across all projects',
            year: '2024',
        },
        {
            title: 'Team Growth',
            description: 'Expanded from 3 to 6 talented team members',
            year: '2023-2024',
        },
        {
            title: 'Project Milestone',
            description: 'Successfully delivered 100+ projects across various industries',
            year: '2024',
        },
    ]

    return (
        <section id="team-stats" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>Our Achievements</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Team by the Numbers
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our collective achievements speak to the dedication, expertise, and passion of our team.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} ${stat.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} ${stat.darkGradient} border ${stat.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.gradient} ${stat.darkGradient}  ${stat.color}`}>
                                        {stat.value}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-foreground">
                                        {stat.label}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Achievements Section */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
                        Recent Milestones
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {achievement.year}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-foreground">
                                    {achievement.title}
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        Join Our Growing Team
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        Be part of a team that's making a real impact. Help us reach our next milestones and grow together.
                    </p>
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                    >
                        View Open Positions
                        <Rocket className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TeamStats

