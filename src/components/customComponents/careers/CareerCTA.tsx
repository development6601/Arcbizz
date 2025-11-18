'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, ArrowRight, FileText, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { jobAlertsSubscriptionValidationSchema } from '@/lib/validationSchemas'

interface JobAlertsFormData {
    email: string
}

const CareerCTA = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formik = useFormik<JobAlertsFormData>({
        initialValues: {
            email: '',
        },
        validationSchema: jobAlertsSubscriptionValidationSchema,
        onSubmit: async (values) => {
            // Log form data to console
            console.log('Job Alerts Subscription Submitted Data:', values)
            
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
        <section id="career-cta" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Content */}
                    <div className="relative">
                        {/* Top Geometric Decoration */}
                        <svg
                            className="absolute -top-20 left-0 w-72 h-32 opacity-20 text-primary/60"
                            viewBox="0 0 280 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="40" y1="20" x2="240" y2="20" stroke="currentColor" strokeWidth="1" />
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
                            Ready to Start Your
                            <span className="block mt-2">Journey With Us?</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                            We're always looking for talented individuals who are passionate about technology and innovation. 
                            Whether you see a role that matches your skills or want to introduce yourself, we'd love to hear from you.
                        </p>

                        {/* Contact Options */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                size="lg"
                                onClick={() => {
                                    window.location.href = 'mailto:info@arcbizz.com?subject=Career Inquiry'
                                }}
                                className="xl:h-12 xl:!px-6 xl:text-base"
                            >
                                <Mail className="!w-5 !h-5" />
                                Send Us Your Resume
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => {
                                    window.location.href = 'tel:+918758027188'
                                }}
                                className="xl:h-12 xl:!px-6 xl:text-base"
                            >
                                <Phone className="!w-5 !h-5" />
                                Call Us
                            </Button>
                        </div>

                        {/* Bottom Geometric Decoration */}
                        <svg
                            className="absolute -bottom-12 right-0 w-72 h-32 opacity-20 text-primary/60"
                            viewBox="0 0 280 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="40" y1="100" x2="240" y2="100" stroke="currentColor" strokeWidth="1" />
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
                    <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">Get Job Alerts</h3>
                                <p className="text-sm text-muted-foreground">Stay updated with new opportunities</p>
                            </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Subscribe to receive notifications when we post new job openings that match your interests.
                        </p>

                        <form onSubmit={formik.handleSubmit} className="space-y-4">
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`h-12 rounded-lg border-border bg-background ${formik.touched.email && formik.errors.email ? 'border-destructive' : ''}`}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-sm text-destructive mt-1">{formik.errors.email}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                disabled={formik.isSubmitting || isSubmitted}
                                className="w-full h-12 rounded-lg font-semibold"
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
                                    <>
                                        Subscribe to Job Alerts
                                        <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                        {isSubmitted && (
                            <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                                Thank you for subscribing to job alerts!
                            </p>
                        )}

                        <div className="mt-6 pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground">
                                By subscribing, you agree to receive job alerts from Arcbizz. 
                                You can unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-lg">
                        <span className="font-semibold text-foreground">Questions?</span> Feel free to reach out to our team at{' '}
                        <a 
                            href="mailto:info@arcbizz.com" 
                            className="text-primary hover:underline font-medium"
                        >
                            info@arcbizz.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CareerCTA

