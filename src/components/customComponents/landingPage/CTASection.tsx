'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Rocket, Loader2, CheckCircle2 } from 'lucide-react'
import { newsletterSubscriptionValidationSchema } from '@/lib/validationSchemas'

interface NewsletterFormData {
    email: string
}

const CTASection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formik = useFormik<NewsletterFormData>({
        initialValues: {
            email: '',
        },
        validationSchema: newsletterSubscriptionValidationSchema,
        onSubmit: async (values) => {
            // Log form data to console
            console.log('Newsletter Subscription Submitted Data:', values)
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            setIsSubmitted(true)
            formik.resetForm()

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        },
    })

    return (
        <section id="cta" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background animate-fade-in-up">
            <div className="container mx-auto max-w-7xl relative z-10 animate-fade-in-up">
                <div className="flex gap-12 md:gap-16 items-center lg:flex-row flex-col animate-fade-in-up">
                    {/* Left Content */}
                    <div className="relative animate-fade-in-up">
                        {/* Top Geometric Decoration - V shape opening upward */}
                        <svg
                            className="absolute -top-20 left-0 w-72 h-32 opacity-20 text-purple-400/60"
                            viewBox="0 0 280 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Horizontal line at top */}
                            <line x1="40" y1="20" x2="240" y2="20" stroke="currentColor" strokeWidth="1" />
                            {/* V shape opening upward */}
                            <path
                                d="M 40 20 L 140 80 L 240 20"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                            Optimize Your Digital
                            <span className="block mt-2">Business With Arcbizz</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Simplify Digital Management with Our Expertise
                        </p>

                        {/* Bottom Geometric Decoration - V shape opening downward */}
                        <svg
                            className="absolute -bottom-12 right-0 w-72 h-32 opacity-20 text-purple-400/60"
                            viewBox="0 0 280 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Horizontal line at bottom */}
                            <line x1="40" y1="100" x2="240" y2="100" stroke="currentColor" strokeWidth="1" />
                            {/* V shape opening downward */}
                            <path
                                d="M 40 100 L 140 40 L 240 100"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Right Newsletter Form */}
                    <div className="flex flex-col animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-foreground mb-2">Newsletter</h3>
                        <p className="text-base text-muted-foreground mb-6">
                            Subscribe to our newsletter to get the latest Arcbizz news
                        </p>

                        <form onSubmit={formik.handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="flex-1">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`h-11 rounded-md border-border bg-background flex-shrink-0 ${formik.touched.email && formik.errors.email ? 'border-destructive' : ''}`}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-sm text-destructive mt-1">{formik.errors.email}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                disabled={formik.isSubmitting || isSubmitted}
                                className="h-11 px-6 rounded-md font-semibold whitespace-nowrap"
                            >
                                {formik.isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Subscribing...
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4 mr-2" />
                                        Subscribed!
                                    </>
                                ) : (
                                    'Subscribe'
                                )}
                            </Button>
                        </form>
                        {isSubmitted && (
                            <p className="text-sm text-green-600 dark:text-green-400">
                                Thank you for subscribing to our newsletter!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection