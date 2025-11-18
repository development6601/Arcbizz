'use client'

import React from 'react'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import CustomSlider from '../slider/Slider'
import testimonial1 from '@/assets/images/landing/testimonials/testimonials-1.jpg'
import testimonial2 from '@/assets/images/landing/testimonials/testimonials-2.jpg'
import testimonial3 from '@/assets/images/landing/testimonials/testimonials-3.jpg'
import testimonial4 from '@/assets/images/landing/testimonials/testimonials-4.jpg'
import testimonial5 from '@/assets/images/landing/testimonials/testimonials-5.jpg'
import testimonial6 from '@/assets/images/landing/testimonials/testimonials-6.jpg'
import testimonial7 from '@/assets/images/landing/testimonials/testimonials-7.jpg'

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    image: any
    rating: number
    quote: string
    highlight?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'Chief Technology Officer',
        company: 'TechFlow Inc.',
        image: testimonial1,
        rating: 5,
        quote: 'Arcbizz transformed our entire development workflow. The platform\'s intuitive interface and powerful features reduced our deployment time by 60%. Their team\'s expertise and support made the transition seamless.',
        highlight: '60% Faster Deployment'
    },
    {
        id: 2,
        name: 'David Chen',
        role: 'VP of Engineering',
        company: 'CloudScale Solutions',
        image: testimonial2,
        rating: 5,
        quote: 'Outstanding software platform that scaled beautifully with our growing business. The real-time analytics and automation capabilities have been game-changers. Highly recommend for any tech-forward organization.',
        highlight: 'Scalable Solution'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Product Director',
        company: 'InnovateHub',
        image: testimonial3,
        rating: 5,
        quote: 'The best investment we\'ve made this year. Arcbizz\'s comprehensive suite of tools streamlined our entire development process. The ROI was evident within the first month of implementation.',
        highlight: 'Visible ROI in 30 Days'
    },
    {
        id: 4,
        name: 'Michael Thompson',
        role: 'Founder & CEO',
        company: 'StartupVenture',
        image: testimonial4,
        rating: 5,
        quote: 'As a startup, we needed a solution that could grow with us. Arcbizz delivered exactly that - powerful yet affordable, feature-rich yet easy to use. Their customer support is top-notch.',
        highlight: 'Perfect for Startups'
    },
    {
        id: 5,
        name: 'Jennifer Williams',
        role: 'Head of Development',
        company: 'Digital Dynamics',
        image: testimonial5,
        rating: 4,
        quote: 'The integration was flawless, and the impact was immediate. Our team productivity increased by 45%, and we\'ve seen significant improvements in code quality and delivery speed.',
        highlight: '45% Productivity Boost'
    },
    {
        id: 6,
        name: 'Robert Kim',
        role: 'Chief Innovation Officer',
        company: 'NextGen Systems',
        image: testimonial6,
        rating: 5,
        quote: 'Arcbizz exceeded all our expectations. The platform\'s AI-powered features and intelligent automation have revolutionized how we build and deploy applications. Truly cutting-edge technology.',
        highlight: 'AI-Powered Features'
    },
    {
        id: 7,
        name: 'Neil Saidi',
        role: 'CTO',
        company: 'FutureTech Corp',
        image: testimonial7,
        rating: 5,
        quote: 'Exceptional platform with incredible performance. The team at Arcbizz understood our needs and delivered a solution that perfectly aligns with our vision. The ongoing support is remarkable.',
        highlight: 'Exceptional Performance'
    }
]

const Testimonials = () => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700'
                    }`}
            />
        ))
    }

    return (
        <section id="testimonials" className="relative py-20 px-4 overflow-hidden bg-background animate-fade-in-up">
            <div className="container mx-auto relative z-10 max-w-7xl animate-fade-in-up">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Quote className="w-4 h-4" />
                        <span>Client Testimonials</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what industry leaders have to say about working with us.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative pb-16 animate-fade-in-up">
                    <CustomSlider
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={4000}
                        infinite={true}
                        dots={true}
                        arrows={true}
                        speed={600}
                        pauseOnHover={true}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    dots: true,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    dots: true,
                                },
                            },
                        ]}
                        className="testimonials-slider"
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-4 h-full">
                                <div className="group relative h-full">
                                    {/* Testimonial Card */}
                                    <div className="relative bg-card border border-border rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20">
                                        {/* Quote Icon */}
                                        <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Quote className="w-6 h-6 text-primary" />
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="flex items-center gap-1 mb-6">
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Highlight Badge */}
                                        {testimonial.highlight && (
                                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                                                {testimonial.highlight}
                                            </div>
                                        )}

                                        {/* Testimonial Quote */}
                                        <p className="text-foreground text-base leading-relaxed mb-6 flex-grow">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Customer Info */}
                                        <div className="flex items-center gap-4 pt-6 border-t border-border">
                                            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background flex-shrink-0">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-foreground mb-1 truncate">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground truncate">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-xs text-muted-foreground/80 truncate">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CustomSlider>
                </div>

                {/* Stats Section */}
                {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
                        <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Testimonials

