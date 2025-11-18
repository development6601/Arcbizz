'use client'

import React from 'react'
import { Quote, Users, Coffee, Code2, Lightbulb, Heart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LifeAtCompany = () => {
    const testimonials = [
        {
            name: 'Alex Kumar',
            role: 'Senior Frontend Developer',
            quote: 'Working at Arcbizz has been an incredible journey. The startup energy is contagious, and I\'ve learned more in one year here than I did in three years at my previous company. The team truly values innovation and gives you the freedom to experiment.',
            avatar: 'AK',
        },
        {
            name: 'Priya Sharma',
            role: 'Product Designer',
            quote: 'What I love most is how collaborative everyone is. My ideas are always heard, and I get to work on projects that actually matter. The growth opportunities are real, and the work-life balance is genuinely respected.',
            avatar: 'PS',
        },
        {
            name: 'Rahul Patel',
            role: 'Backend Developer',
            quote: 'The best part is seeing your code in production quickly. We move fast, but we also maintain quality. The mentorship I\'ve received has been invaluable, and I\'m excited about where we\'re heading as a company.',
            avatar: 'RP',
        },
    ]

    const cultureHighlights = [
        {
            icon: Coffee,
            title: 'Weekly Team Lunches',
            description: 'We gather every Friday for team lunches where we share updates, celebrate wins, and just hang out.',
        },
        {
            icon: Code2,
            title: 'Tech Talks & Hackathons',
            description: 'Regular internal tech talks, hackathons, and innovation days where we explore new technologies.',
        },
        {
            icon: Lightbulb,
            title: 'Innovation Time',
            description: 'Dedicated time each week to work on personal projects, learn new skills, or explore creative ideas.',
        },
        {
            icon: Users,
            title: 'Mentorship Culture',
            description: 'Everyone is both a mentor and a mentee. We learn from each other and grow together.',
        },
    ]

    return (
        <section id="life-at-company" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Heart className="w-4 h-4" />
                        <span>Life at Arcbizz</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        What It's Like to Work Here
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our team members have to say about working at Arcbizz.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <Quote className="w-8 h-8 text-primary/20 mb-4" />
                            <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Culture Highlights */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                        Our Culture in Action
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cultureHighlights.map((highlight, index) => {
                            const Icon = highlight.icon
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-card border border-border rounded-3xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-foreground">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Company Values Callout */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Building Something Great Together
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                        We're not just building software—we're building a company culture where everyone can thrive. 
                        As a startup, every team member has a direct impact on our success. Your voice matters, your ideas matter, 
                        and your growth matters. Join us in creating something extraordinary.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => {
                            const positionsSection = document.getElementById('open-positions');
                            positionsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore Open Positions
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default LifeAtCompany

