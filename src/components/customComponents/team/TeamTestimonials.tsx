'use client'

import React from 'react'
import { Quote, Star, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { StaticImageData } from 'next/image'
import { teamMembers, TeamMember } from '@/lib/data/team-data'

interface TeamTestimonial {
    name: string
    role: string
    quote: string
    image: string
    rating: number
}

const TeamTestimonials = () => {
    const testimonials = [
        {
            name: teamMembers[0].name,
            role: teamMembers[0].role,
            quote: 'Working at Arcbizz has been an incredible journey. The collaborative environment and innovative spirit make every day exciting. I\'m proud to be part of a team that truly values excellence and continuous growth.',
            image: teamMembers[0].image,
            rating: 5,
        },
        {
            name: teamMembers[2].name,
            role: teamMembers[2].role,
            quote: 'What I love most about our team is how we support each other. Whether it\'s tackling a complex technical challenge or sharing knowledge, everyone is always willing to help. It\'s a true learning environment.',
            image: teamMembers[2].image,
            rating: 5,
        },
        {
            name: teamMembers[4].name,
            role: teamMembers[4].role,
            quote: 'The best part of working here is seeing our collective impact. Every project we deliver makes a difference, and being part of that success story is incredibly rewarding. Great team, great culture!',
            image: teamMembers[4].image,
            rating: 5,
        },
    ]

    return (
        <section id="team-testimonials" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Quote className="w-4 h-4" />
                        <span>Team Voices</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        What Our Team Says
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Hear directly from our team members about their experience working at Arcbizz.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial: TeamTestimonial, index: number) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6">
                                <Quote className="w-8 h-8 text-primary/20" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <Avatar className="w-12 h-12 ring-2 ring-primary/20 flex-shrink-0 flex items-center justify-center">
                                    <AvatarImage
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className='w-12 h-12 rounded-full object-cover'
                                    />
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 text-muted-foreground">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">
                            Join our team and share your own story
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamTestimonials

