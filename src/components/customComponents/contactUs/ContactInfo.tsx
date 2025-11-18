'use client'

import React from 'react'
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: Mail,
            title: 'Email Address',
            content: 'info@arcbizz.com',
            link: 'mailto:info@arcbizz.com',
            description: 'Send us an email anytime',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Phone,
            title: 'Phone Number',
            content: '+91 87580 27188',
            link: 'tel:+918758027188',
            description: 'Mon-Fri 9am-6pm IST',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-950 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: MapPin,
            title: 'Office Address',
            content: 'C2 / 514-515, Pragati IT Park',
            link: '#',
            description: 'Mota varachha, Surat, Gujarat.',
            gradient: 'from-emerald-50 via-emerald-50 to-emerald-100',
            darkGradient: 'dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-950',
            borderColor: 'border-emerald-400 dark:border-emerald-600'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            content: 'Monday - Friday',
            link: '#',
            description: '9:00 AM - 6:00 PM (IST)',
            gradient: 'from-orange-50 via-yellow-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-yellow-950 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-yellow-600'
        },
    ]

    return (
        <section id="contact-info" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact Information</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Other Ways to Reach Us
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Choose the method that works best for you. We're here to help.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactDetails.map((detail, index) => {
                        const Icon = detail.icon
                        return (
                            <a
                                key={index}
                                href={detail.link}
                                className="group block"
                            >
                                <Card className="relative h-full p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} ${detail.darkGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${detail.gradient} ${detail.darkGradient} border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300`}>
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">
                                            {detail.title}
                                        </h3>
                                        <p className="text-base font-semibold text-primary mb-2">
                                            {detail.content}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {detail.description}
                                        </p>
                                    </div>
                                </Card>
                            </a>
                        )
                    })}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            We're Here to Help
                        </h3>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Whether you have a question about our services, need technical support, or want to discuss a potential project, our team is ready to assist you. We typically respond to all inquiries within 24 hours.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span>24/7 Support Available</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                                <span>Fast Response Time</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                                <span>Expert Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo

