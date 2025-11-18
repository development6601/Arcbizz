'use client'

import React from 'react'
import Link from 'next/link'
import { Code2, Smartphone, Globe, Database, Palette, Cloud, Shield, Zap, ArrowRight } from 'lucide-react'

const DeveloperServices = () => {
    const services = [
        {
            icon: Code2,
            title: 'Full-Stack Developers',
            slug: 'full-stack-developers',
            description: 'Expert developers skilled in both frontend and backend technologies. Build complete web applications from scratch.',
            technologies: ['React', 'Node.js', 'Python', 'TypeScript'],
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-900 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Smartphone,
            title: 'Mobile App Developers',
            slug: 'mobile-app-developers',
            description: 'Native and cross-platform mobile app development for iOS and Android. Create engaging mobile experiences.',
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-900 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: Globe,
            title: 'Frontend Developers',
            slug: 'frontend-developers',
            description: 'Specialized in creating beautiful, responsive user interfaces. Experts in modern JavaScript frameworks.',
            technologies: ['React', 'Vue.js', 'Next.js', 'Angular'],
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-900 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600'
        },
        {
            icon: Database,
            title: 'Backend Developers',
            slug: 'backend-developers',
            description: 'Build robust, scalable server-side applications. Expertise in APIs, databases, and cloud infrastructure.',
            technologies: ['Node.js', 'Python', 'Java', 'Go'],
            gradient: 'from-orange-50 via-red-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-red-900 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-red-600'
        },
        {
            icon: Palette,
            title: 'UI/UX Developers',
            slug: 'ui-ux-developers',
            description: 'Combine design and development skills. Create pixel-perfect interfaces that users love.',
            technologies: ['Figma', 'React', 'CSS3', 'Sass'],
            gradient: 'from-pink-50 via-rose-50 to-pink-100',
            darkGradient: 'dark:from-pink-950 dark:via-rose-900 dark:to-pink-950',
            borderColor: 'border-pink-400 dark:border-rose-600'
        },
        {
            icon: Cloud,
            title: 'DevOps Engineers',
            slug: 'devops-engineers',
            description: 'Streamline deployment and infrastructure. Experts in CI/CD, cloud platforms, and automation.',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-900 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-blue-600'
        },
        {
            icon: Shield,
            title: 'Security Specialists',
            slug: 'security-specialists',
            description: 'Protect your applications from threats. Security-focused developers who prioritize safety.',
            technologies: ['OWASP', 'Penetration Testing', 'Encryption'],
            gradient: 'from-red-50 via-orange-50 to-red-100',
            darkGradient: 'dark:from-red-950 dark:via-orange-900 dark:to-red-950',
            borderColor: 'border-red-400 dark:border-orange-600'
        },
        {
            icon: Zap,
            title: 'AI/ML Engineers',
            slug: 'ai-ml-engineers',
            description: 'Build intelligent applications with machine learning. Experts in data science and AI integration.',
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
            gradient: 'from-yellow-50 via-orange-50 to-yellow-100',
            darkGradient: 'dark:from-yellow-950 dark:via-orange-900 dark:to-yellow-950',
            borderColor: 'border-yellow-400 dark:border-orange-600'
        },
    ]

    return (
        <section id="developer-services" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Code2 className="w-4 h-4" />
                        <span>Our Services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Types of Developers You Can Hire
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We offer a wide range of developer expertise to match your project needs. Find the perfect talent for your team.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Link
                                key={index}
                                href={`/hire-developers/${service.slug}`}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 block"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} ${service.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.darkGradient} border ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 pt-4 border-t border-border group-hover:gap-3 transition-all">
                                        <span>View Developers</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DeveloperServices

