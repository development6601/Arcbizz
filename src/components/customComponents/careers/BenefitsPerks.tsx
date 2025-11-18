'use client'

import React from 'react'
import { Heart, Home, DollarSign, Clock, GraduationCap, Award, Users2, Laptop, Briefcase, Coffee, Plane, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BenefitsPerks = () => {
    const benefits = [
        {
            icon: Home,
            title: 'Remote Work Options',
            description: 'Work from anywhere with flexible remote and hybrid arrangements.',
            category: 'work',
        },
        {
            icon: Clock,
            title: 'Flexible Hours',
            description: 'Manage your own schedule and work when you\'re most productive.',
            category: 'work',
        },
        {
            icon: DollarSign,
            title: 'Competitive Salary',
            description: 'We offer competitive compensation packages that reflect your skills and contributions.',
            category: 'compensation',
        },
        {
            icon: Award,
            title: 'Performance Bonuses',
            description: 'Recognize and reward exceptional performance with quarterly bonuses.',
            category: 'compensation',
        },
        {
            icon: GraduationCap,
            title: 'Learning & Development',
            description: 'Access to courses, conferences, books, and a dedicated learning budget.',
            category: 'growth',
        },
        {
            icon: Laptop,
            title: 'Latest Tools & Equipment',
            description: 'Get the best hardware and software tools to do your best work.',
            category: 'resources',
        },
        {
            icon: Heart,
            title: 'Health & Wellness',
            description: 'Health insurance coverage and wellness programs to keep you healthy.',
            category: 'wellness',
        },
        {
            icon: Coffee,
            title: 'Team Events',
            description: 'Regular team building activities, company outings, and celebrations.',
            category: 'culture',
        },
        {
            icon: Plane,
            title: 'Time Off',
            description: 'Generous paid time off and holidays to recharge and relax.',
            category: 'wellness',
        },
        {
            icon: Users2,
            title: 'Mentorship Programs',
            description: 'Learn from experienced team members and grow your career with guidance.',
            category: 'growth',
        },
        {
            icon: Activity,
            title: 'Gym & Fitness',
            description: 'Support for gym memberships and fitness activities.',
            category: 'wellness',
        },
        {
            icon: Briefcase,
            title: 'Career Growth Path',
            description: 'Clear career progression paths and regular performance reviews.',
            category: 'growth',
        },
    ]

    const categories = [
        { id: 'all', label: 'All Benefits' },
        { id: 'work', label: 'Work Flexibility' },
        { id: 'compensation', label: 'Compensation' },
        { id: 'growth', label: 'Growth & Learning' },
        { id: 'wellness', label: 'Wellness' },
        { id: 'culture', label: 'Culture' },
        { id: 'resources', label: 'Resources' },
    ]

    const [activeCategory, setActiveCategory] = React.useState('all')

    const filteredBenefits = activeCategory === 'all'
        ? benefits
        : benefits.filter(benefit => benefit.category === activeCategory)

    return (
        <section id="benefits-perks" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Award className="w-4 h-4" />
                        <span>What We Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Benefits & Perks
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We believe in taking care of our team. Here's what you can expect when you join Arcbizz.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            variant="outline"
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 border-primary hover:bg-primary/90 hover:text-primary-foreground'
                                    : 'bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
                                }`}
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBenefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
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

                {/* Bottom Note */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground text-base">
                        <span className="font-semibold text-foreground">Note:</span> Benefits may vary based on location and role. We're always looking to improve our benefits package based on team feedback.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BenefitsPerks

