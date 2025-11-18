'use client'

import { useState } from 'react'
import { Monitor, Server, Smartphone, Database, Cloud, Settings, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TechnologyStack = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const categories = [
        { id: 'frontend', name: 'Frontend', icon: Monitor },
        { id: 'backend', name: 'Backend', icon: Server },
        { id: 'mobile', name: 'Mobile', icon: Smartphone },
        { id: 'database', name: 'Database', icon: Database },
        { id: 'cloud', name: 'Cloud', icon: Cloud },
        { id: 'devops', name: 'DevOps', icon: Settings },
    ]

    const technologies = [
        // Frontend
        { name: 'React', category: 'frontend', description: 'A JavaScript library for building user interfaces', experience: 'Expert', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-blue-600' },
        { name: 'Next.js', category: 'frontend', description: 'React framework for production with server-side rendering', experience: 'Expert', gradient: 'from-gray-50 via-black-50 to-gray-100', darkGradient: 'dark:from-gray-950 dark:via-black-800 dark:to-gray-950', borderColor: 'border-gray-400 dark:border-gray-600' },
        { name: 'TypeScript', category: 'frontend', description: 'Typed superset of JavaScript for better code quality', experience: 'Expert', gradient: 'from-blue-50 via-indigo-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-indigo-600' },
        { name: 'Angular', category: 'frontend', description: 'Platform for building mobile and desktop web applications', experience: 'Advanced', gradient: 'from-red-50 via-pink-50 to-red-100', darkGradient: 'dark:from-red-950 dark:via-pink-950 dark:to-red-950', borderColor: 'border-red-400 dark:border-pink-600' },
        { name: 'Vue.js', category: 'frontend', description: 'Progressive JavaScript framework for building UIs', experience: 'Advanced', gradient: 'from-emerald-50 via-emerald-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-emerald-600' },
        { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first CSS framework for rapid UI development', experience: 'Expert', gradient: 'from-cyan-50 via-blue-50 to-cyan-100', darkGradient: 'dark:from-cyan-950 dark:via-blue-950 dark:to-cyan-950', borderColor: 'border-cyan-500 dark:border-blue-600' },
        { name: 'HTML5', category: 'frontend', description: 'Latest version of HTML with modern features', experience: 'Expert', gradient: 'from-orange-50 via-red-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-red-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-red-600' },
        { name: 'CSS3', category: 'frontend', description: 'Advanced styling with animations and responsive design', experience: 'Expert', gradient: 'from-blue-50 via-purple-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-purple-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-purple-600' },
        { name: 'JavaScript', category: 'frontend', description: 'Core programming language for web development', experience: 'Expert', gradient: 'from-yellow-50 via-orange-50 to-yellow-100', darkGradient: 'dark:from-yellow-950 dark:via-orange-950 dark:to-yellow-950', borderColor: 'border-yellow-400 dark:border-orange-600' },
        { name: 'SASS/SCSS', category: 'frontend', description: 'CSS preprocessor for enhanced styling capabilities', experience: 'Expert', gradient: 'from-pink-50 via-purple-50 to-pink-100', darkGradient: 'dark:from-pink-950 dark:via-purple-950 dark:to-pink-950', borderColor: 'border-pink-400 dark:border-purple-600' },

        // Backend
        { name: 'Node.js', category: 'backend', description: 'JavaScript runtime for building scalable server applications', experience: 'Expert    ', gradient: 'from-emerald-50 via-emerald-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-emerald-600' },
        { name: 'Python', category: 'backend', description: 'Versatile programming language for backend development', experience: 'Expert', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },
        { name: 'Java', category: 'backend', description: 'Enterprise-grade programming language for robust applications', experience: 'Advanced', gradient: 'from-orange-50 via-red-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-red-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-red-600' },
        { name: '.NET', category: 'backend', description: 'Microsoft framework for building enterprise applications', experience: 'Advanced', gradient: 'from-purple-50 via-indigo-50 to-purple-100', darkGradient: 'dark:from-purple-950 dark:via-indigo-950 dark:to-purple-950', borderColor: 'border-purple-400 dark:border-indigo-600' },
        { name: 'Go', category: 'backend', description: 'Efficient programming language for concurrent systems', experience: 'Intermediate', gradient: 'from-cyan-50 via-blue-50 to-cyan-100', darkGradient: 'dark:from-cyan-950 dark:via-blue-950 dark:to-cyan-950', borderColor: 'border-cyan-500 dark:border-blue-600' },
        { name: 'PHP', category: 'backend', description: 'Server-side scripting language for web development', experience: 'Expert', gradient: 'from-indigo-50 via-purple-50 to-indigo-100', darkGradient: 'dark:from-indigo-950 dark:via-purple-950 dark:to-indigo-950', borderColor: 'border-indigo-400 dark:border-purple-600' },
        { name: 'Express.js', category: 'backend', description: 'Fast, unopinionated web framework for Node.js', experience: 'Expert', gradient: 'from-gray-50 via-black-50 to-gray-100', darkGradient: 'dark:from-gray-950 dark:via-black-900 dark:to-gray-950', borderColor: 'border-gray-400 dark:border-black-600' },
        { name: 'Django', category: 'backend', description: 'High-level Python web framework', experience: 'Advanced', gradient: 'from-emerald-50 via-emerald-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-emerald-600' },
        { name: 'Spring Boot', category: 'backend', description: 'Java framework for building production-ready applications', experience: 'Advanced', gradient: 'from-emerald-50 via-teal-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-teal-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-teal-600' },

        // Mobile
        { name: 'React Native', category: 'mobile', description: 'Framework for building native mobile apps with React', experience: 'Expert', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },
        { name: 'Flutter', category: 'mobile', description: 'Google\'s UI toolkit for building natively compiled applications', experience: 'Advanced', gradient: 'from-blue-50 via-indigo-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-indigo-600' },
        { name: 'Swift', category: 'mobile', description: 'Programming language for iOS and macOS development', experience: 'Advanced', gradient: 'from-orange-50 via-red-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-red-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-red-600' },
        { name: 'Kotlin', category: 'mobile', description: 'Modern programming language for Android development', experience: 'Advanced', gradient: 'from-purple-50 via-indigo-50 to-purple-100', darkGradient: 'dark:from-purple-950 dark:via-indigo-950 dark:to-purple-950', borderColor: 'border-purple-400 dark:border-indigo-600' },
        { name: 'Ionic', category: 'mobile', description: 'Cross-platform mobile app development framework', experience: 'Intermediate', gradient: 'from-blue-50 via-purple-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-purple-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-purple-600' },
        { name: 'Xamarin', category: 'mobile', description: 'Microsoft framework for cross-platform mobile apps', experience: 'Intermediate', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },

        // Database
        { name: 'PostgreSQL', category: 'database', description: 'Advanced open-source relational database', experience: 'Expert', gradient: 'from-blue-50 via-indigo-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-indigo-600' },
        { name: 'MySQL', category: 'database', description: 'Popular open-source relational database management system', experience: 'Expert', gradient: 'from-orange-50 via-blue-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-blue-600' },
        { name: 'MongoDB', category: 'database', description: 'NoSQL database for modern applications', experience: 'Expert', gradient: 'from-emerald-50 via-emerald-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-emerald-600' },
        { name: 'Redis', category: 'database', description: 'In-memory data structure store for caching', experience: 'Advanced', gradient: 'from-red-50 via-pink-50 to-red-100', darkGradient: 'dark:from-red-950 dark:via-pink-950 dark:to-red-950', borderColor: 'border-red-400 dark:border-pink-600' },
        { name: 'Firebase', category: 'database', description: 'Google\'s platform for mobile and web applications', experience: 'Advanced', gradient: 'from-orange-50 via-yellow-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-yellow-600' },
        { name: 'DynamoDB', category: 'database', description: 'AWS NoSQL database service', experience: 'Intermediate', gradient: 'from-orange-50 via-amber-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-amber-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-amber-600' },

        // Cloud
        { name: 'AWS', category: 'cloud', description: 'Amazon Web Services cloud platform', experience: 'Expert', gradient: 'from-orange-50 via-amber-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-amber-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-amber-600' },
        { name: 'Azure', category: 'cloud', description: 'Microsoft cloud computing platform', experience: 'Advanced', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },
        { name: 'Google Cloud', category: 'cloud', description: 'Google Cloud Platform for scalable infrastructure', experience: 'Advanced', gradient: 'from-blue-50 via-indigo-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-indigo-600' },
        { name: 'Docker', category: 'cloud', description: 'Containerization platform for application deployment', experience: 'Expert', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },
        { name: 'Kubernetes', category: 'cloud', description: 'Container orchestration system for automated deployment', experience: 'Advanced', gradient: 'from-blue-50 via-indigo-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-indigo-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-indigo-600' },
        { name: 'Terraform', category: 'cloud', description: 'Infrastructure as Code tool for cloud provisioning', experience: 'Intermediate', gradient: 'from-purple-50 via-pink-50 to-purple-100', darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950', borderColor: 'border-purple-400 dark:border-pink-600' },

        // DevOps
        { name: 'Git', category: 'devops', description: 'Distributed version control system', experience: 'Expert', gradient: 'from-orange-50 via-red-50 to-orange-100', darkGradient: 'dark:from-orange-950 dark:via-red-950 dark:to-orange-950', borderColor: 'border-orange-400 dark:border-red-600' },
        { name: 'Jenkins', category: 'devops', description: 'Automated CI/CD server for continuous integration', experience: 'Advanced', gradient: 'from-blue-50 via-cyan-50 to-blue-100', darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950', borderColor: 'border-blue-400 dark:border-cyan-600' },
        { name: 'GitHub Actions', category: 'devops', description: 'CI/CD platform integrated with GitHub', experience: 'Expert', gradient: 'from-gray-50 via-black-50 to-gray-100', darkGradient: 'dark:from-gray-950 dark:via-black-950 dark:to-gray-950', borderColor: 'border-gray-400 dark:border-black-600' },
        { name: 'Ansible', category: 'devops', description: 'Automation tool for configuration management', experience: 'Intermediate', gradient: 'from-red-50 via-pink-50 to-red-100', darkGradient: 'dark:from-red-950 dark:via-pink-950 dark:to-red-950', borderColor: 'border-red-400 dark:border-pink-600' },
        { name: 'CI/CD', category: 'devops', description: 'Continuous Integration and Continuous Deployment practices', experience: 'Expert', gradient: 'from-emerald-50 via-emerald-50 to-emerald-100', darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950', borderColor: 'border-emerald-400 dark:border-emerald-600' },
    ]

    const filteredTechnologies = technologies.filter(tech => {
        const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tech.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !selectedCategory || tech.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const groupedTechnologies = categories.map(category => ({
        ...category,
        technologies: filteredTechnologies.filter(t => t.category === category.id)
    })).filter(group => group.technologies.length > 0)

    return (
        <section id="technology-stack" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Settings className="w-4 h-4" />
                        <span>Complete Stack</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Our Technology Stack
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                        Explore our comprehensive technology expertise across all development domains.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-12 rounded-xl border-border bg-background"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === null
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card border border-border text-foreground hover:border-primary/30 hover:text-primary-foreground'
                                }`}
                        >
                            All
                        </Button>
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <Button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-card border border-border text-foreground hover:border-primary/30 hover:text-primary-foreground'
                                        }`}
                                >
                                    {category.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                {/* Technologies by Category */}
                <div className="space-y-12">
                    {groupedTechnologies.map((group) => {
                        const Icon = group.icon
                        return (
                            <div key={group.id}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">{group.name}</h3>
                                    <span className="text-sm text-muted-foreground">({group.technologies.length})</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {group.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="group relative bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} ${tech.darkGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h4 className="text-lg font-bold text-foreground">{tech.name}</h4>
                                                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                                        {tech.experience}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredTechnologies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No technologies found matching your search.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TechnologyStack

