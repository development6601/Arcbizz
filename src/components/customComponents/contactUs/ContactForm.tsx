'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { contactFormValidationSchema } from '@/lib/validationSchemas'

interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    message: string
}

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formik = useFormik<ContactFormData>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: 'Message for Arcbizz'
        },
        validationSchema: contactFormValidationSchema,
        onSubmit: async (values) => {
            // Log form data to console
            console.log('ContactForm Submitted Data:', values)
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            setIsSubmitted(true)
            formik.resetForm({
                values: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: 'Message for Arcbizz'
                }
            })

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        },
    })

    return (
        <section id="contact-form" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Send className="w-4 h-4" />
                        <span>Send Us a Message</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-muted-foreground text-lg">
                                    Your message has been sent successfully. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                {/* First Name & Last Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-foreground block">
                                            First Name <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="John"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`h-12 ${formik.touched.firstName && formik.errors.firstName ? 'border-destructive' : ''}`}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName && (
                                            <p className="text-sm text-destructive">{formik.errors.firstName}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-foreground block">
                                            Last Name <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Doe"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`h-12 ${formik.touched.lastName && formik.errors.lastName ? 'border-destructive' : ''}`}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName && (
                                            <p className="text-sm text-destructive">{formik.errors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-foreground block">
                                            Email <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`h-12 ${formik.touched.email && formik.errors.email ? 'border-destructive' : ''}`}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <p className="text-sm text-destructive">{formik.errors.email}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phoneNumber" className="text-sm font-semibold text-foreground block">
                                            Phone Number <span className="text-destructive">*</span>
                                        </label>
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            value={formik.values.phoneNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={`h-12 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-destructive' : ''}`}
                                        />
                                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                            <p className="text-sm text-destructive">{formik.errors.phoneNumber}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground block">
                                        Message <span className="text-destructive">*</span>
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Message for Arcbizz"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`min-h-[150px] resize-none ${formik.touched.message && formik.errors.message ? 'border-destructive' : ''}`}
                                        onFocus={(e) => {
                                            if (e.target.value === 'Message for Arcbizz') {
                                                formik.setFieldValue('message', '')
                                            }
                                        }}
                                    />
                                    {formik.touched.message && formik.errors.message && (
                                        <p className="text-sm text-destructive">{formik.errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full md:w-auto min-w-[200px] h-12 text-base font-semibold"
                                        disabled={formik.isSubmitting}
                                    >
                                        {formik.isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm

