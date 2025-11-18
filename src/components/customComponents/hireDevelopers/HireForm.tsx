'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, Loader2, CheckCircle2, Building2, Mail, Phone, FileText } from 'lucide-react'
import { hireFormValidationSchema } from '@/lib/validationSchemas'

interface HireFormData {
    companyName: string
    contactName: string
    email: string
    phone: string
    projectType: string
    budget: string
    timeline: string
    requirements: string
}

const HireForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const formik = useFormik<HireFormData>({
        initialValues: {
            companyName: '',
            contactName: '',
            email: '',
            phone: '',
            projectType: '',
            budget: '',
            timeline: '',
            requirements: '',
        },
        validationSchema: hireFormValidationSchema,
        onSubmit: async (values) => {
            // Log form data to console
            console.log('HireForm Submitted Data:', values)
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            setIsSubmitted(true)
            
            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                formik.resetForm()
            }, 5000)
        },
    })

    return (
        <section id="hire-form" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <FileText className="w-4 h-4" />
                        <span>Get Started</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Request a Developer
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Fill out the form below and we'll get back to you within 24 hours with developer recommendations.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                Request Submitted!
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                We've received your request and will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {/* Company Name & Contact Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="companyName" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        Company Name <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="companyName"
                                        name="companyName"
                                        type="text"
                                        placeholder="Your Company"
                                        value={formik.values.companyName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`h-12 ${formik.touched.companyName && formik.errors.companyName ? 'border-destructive' : ''}`}
                                    />
                                    {formik.touched.companyName && formik.errors.companyName && (
                                        <p className="text-sm text-destructive">{formik.errors.companyName}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contactName" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        Contact Name <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="contactName"
                                        name="contactName"
                                        type="text"
                                        placeholder="Your Name"
                                        value={formik.values.contactName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`h-12 ${formik.touched.contactName && formik.errors.contactName ? 'border-destructive' : ''}`}
                                    />
                                    {formik.touched.contactName && formik.errors.contactName && (
                                        <p className="text-sm text-destructive">{formik.errors.contactName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
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
                                    <label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`h-12 ${formik.touched.phone && formik.errors.phone ? 'border-destructive' : ''}`}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="text-sm text-destructive">{formik.errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            {/* Project Type & Budget */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="text-sm font-semibold text-foreground">
                                        Project Type <span className="text-destructive">*</span>
                                    </label>
                                    <Select
                                        value={formik.values.projectType}
                                        onValueChange={(value) => formik.setFieldValue('projectType', value)}
                                    >
                                        <SelectTrigger 
                                            id="projectType"
                                            className={`w-full h-12 ${formik.touched.projectType && formik.errors.projectType ? 'border-destructive' : ''}`}
                                        >
                                            <SelectValue placeholder="Select project type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web-development">Web Development</SelectItem>
                                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                                            <SelectItem value="full-stack">Full-Stack Project</SelectItem>
                                            <SelectItem value="backend">Backend Development</SelectItem>
                                            <SelectItem value="frontend">Frontend Development</SelectItem>
                                            <SelectItem value="devops">DevOps</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {formik.touched.projectType && formik.errors.projectType && (
                                        <p className="text-sm text-destructive">{formik.errors.projectType}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="budget" className="text-sm font-semibold text-foreground">
                                        Budget Range <span className="text-destructive">*</span>
                                    </label>
                                    <Select
                                        value={formik.values.budget}
                                        onValueChange={(value) => formik.setFieldValue('budget', value)}
                                    >
                                        <SelectTrigger 
                                            id="budget"
                                            className={`w-full h-12 ${formik.touched.budget && formik.errors.budget ? 'border-destructive' : ''}`}
                                        >
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {formik.touched.budget && formik.errors.budget && (
                                        <p className="text-sm text-destructive">{formik.errors.budget}</p>
                                    )}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-2">
                                <label htmlFor="timeline" className="text-sm font-semibold text-foreground">
                                    Project Timeline <span className="text-destructive">*</span>
                                </label>
                                <Select
                                    value={formik.values.timeline}
                                    onValueChange={(value) => formik.setFieldValue('timeline', value)}
                                >
                                    <SelectTrigger 
                                        id="timeline"
                                        className={`w-full h-12 ${formik.touched.timeline && formik.errors.timeline ? 'border-destructive' : ''}`}
                                    >
                                        <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="asap">ASAP</SelectItem>
                                        <SelectItem value="1-month">Within 1 Month</SelectItem>
                                        <SelectItem value="2-3-months">2-3 Months</SelectItem>
                                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                                        <SelectItem value="6-months-plus">6+ Months</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formik.touched.timeline && formik.errors.timeline && (
                                    <p className="text-sm text-destructive">{formik.errors.timeline}</p>
                                )}
                            </div>

                            {/* Requirements */}
                            <div className="space-y-2">
                                <label htmlFor="requirements" className="text-sm font-semibold text-foreground">
                                    Project Requirements <span className="text-destructive">*</span>
                                </label>
                                <Textarea
                                    id="requirements"
                                    name="requirements"
                                    placeholder="Describe your project, required skills, team size, and any specific requirements..."
                                    value={formik.values.requirements}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    rows={6}
                                    className={`resize-none ${formik.touched.requirements && formik.errors.requirements ? 'border-destructive' : ''}`}
                                />
                                {formik.touched.requirements && formik.errors.requirements && (
                                    <p className="text-sm text-destructive">{formik.errors.requirements}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-12 text-base font-semibold"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Submit Request
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HireForm

