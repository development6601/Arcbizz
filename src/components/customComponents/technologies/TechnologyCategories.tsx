'use client'

import React from 'react'
import { Monitor, Server, Smartphone, Database, Cloud, Settings, Code2 } from 'lucide-react'

const TechnologyCategories = () => {
    const categories = [
        {
            icon: Monitor,
            title: 'Frontend Development',
            description: 'We build stunning, responsive user interfaces using modern frameworks and libraries that deliver exceptional user experiences.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Angular', 'Vue.js', 'Tailwind CSS'],
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',   
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-blue-600',
            count: '15+',
        },
        {
            icon: Server,
            title: 'Backend Development',
            description: 'Robust server-side solutions built with scalable architectures and best practices for performance and security.',
            technologies: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'PHP']    ,
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-purple-600',
            count: '12+',
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices.',
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin'],
            gradient: 'from-emerald-50 via-emerald-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', 
            borderColor: 'border-emerald-400 dark:border-emerald-600',
            count: '8+',
        },
        {
            icon: Database,
            title: 'Databases',
            description: 'Expertise in both relational and NoSQL databases to store, manage, and retrieve data efficiently.',
            technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB'],
            gradient: 'from-orange-50 via-yellow-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-orange-600',
            count: '10+',
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps',
            description: 'Cloud-native solutions with automated deployment pipelines for scalable and reliable infrastructure.',
            technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
            gradient: 'from-indigo-50 via-blue-50 to-indigo-100',
            darkGradient: 'dark:from-indigo-950 dark:via-blue-950 dark:to-indigo-950',
            borderColor: 'border-indigo-400 dark:border-indigo-600',
            count: '12+',
        },
        {
            icon: Settings,
            title: 'DevOps & Tools',
            description: 'CI/CD pipelines, version control, and automation tools to streamline development and deployment processes.',
            technologies: ['Git', 'Jenkins', 'GitHub Actions', 'Ansible', 'CI/CD', 'Monitoring'],
            gradient: 'from-rose-50 via-pink-50 to-rose-100',
            darkGradient: 'dark:from-rose-950 dark:via-pink-950 dark:to-rose-950',
            borderColor: 'border-rose-400 dark:border-rose-600',
            count: '8+',
        },
    ]

    return (
        <section id="technology-categories" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Code2 className="w-4 h-4" />
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Technology Categories
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We work across multiple technology domains to deliver comprehensive solutions tailored to your needs.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const Icon = category.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} ${category.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} ${category.darkGradient} border ${category.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <div className="text-2xl font-bold text-primary">{category.count}</div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {category.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                                        {category.description}
                                    </p>
                                    
                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs font-medium bg-background/50 border border-border rounded-full text-foreground/70 group-hover:border-primary/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TechnologyCategories

