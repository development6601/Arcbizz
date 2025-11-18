'use client'

import React from 'react'
import { FileText, Search, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

const ApplicationProcess = () => {
    const steps = [
        {
            icon: FileText,
            title: '1. Submit Application',
            description: 'Fill out our application form with your details, resume, and cover letter. Make sure to highlight your relevant experience.',
            gradient: 'from-blue-50 via-cyan-50 to-blue-100',
            darkGradient: 'dark:from-blue-950 dark:via-cyan-900 dark:to-blue-950',
            borderColor: 'border-blue-400 dark:border-cyan-600'
        },
        {
            icon: Search,
            title: '2. Initial Review',
            description: 'Our HR team reviews your application and qualifications. This typically takes 3-5 business days.',
            gradient: 'from-purple-50 via-pink-50 to-purple-100',
            darkGradient: 'dark:from-purple-950 dark:via-pink-900 dark:to-purple-950',
            borderColor: 'border-purple-400 dark:border-pink-600'
        },
        {
            icon: MessageSquare,
            title: '3. Interview Process',
            description: 'If selected, you\'ll be invited for interviews. This may include technical assessments and cultural fit discussions.',
            gradient: 'from-green-50 via-emerald-50 to-green-100',
            darkGradient: 'dark:from-green-950 dark:via-emerald-900 dark:to-green-950',
            borderColor: 'border-green-400 dark:border-emerald-600'
        },
        {
            icon: CheckCircle2,
            title: '4. Offer & Onboarding',
            description: 'Successful candidates receive an offer. Once accepted, we begin the onboarding process to welcome you to the team.',
            gradient: 'from-orange-50 via-red-50 to-orange-100',
            darkGradient: 'dark:from-orange-950 dark:via-red-900 dark:to-orange-950',
            borderColor: 'border-orange-400 dark:border-red-600'
        },
    ]

    return (
        <section id="application-process" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>How It Works</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Application Process
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We've designed a straightforward application process to help you showcase your skills and find the right fit.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0" style={{ width: 'calc(100% - 4rem)' }}>
                                        <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                                    </div>
                                )}

                                <div className="group relative h-full bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} ${step.darkGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} ${step.darkGradient} border ${step.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Timeline Info */}
                <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        What to Expect
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                        We aim to respond to all applications within 5-7 business days. The entire process from application to offer typically takes 2-4 weeks, depending on the position and interview schedule.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Quick Response Time</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Transparent Process</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Regular Updates</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApplicationProcess

