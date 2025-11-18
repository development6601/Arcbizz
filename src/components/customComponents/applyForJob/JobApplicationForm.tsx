'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, Loader2, CheckCircle2, User, Mail, Phone, FileText, Briefcase, Link as LinkIcon, Upload } from 'lucide-react'
import { jobApplicationFormValidationSchema } from '@/lib/validationSchemas'

interface ApplicationFormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    experience: string
    portfolio: string
    coverLetter: string
    resume: File | null
}

const availablePositions = [
    'Frontend Developer',
    'Backend Developer',
    'Full-Stack Developer',
    'Mobile App Developer',
    'UI/UX Designer',
    'DevOps Engineer',
    'Product Manager',
]

const JobApplicationForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [resumeFileName, setResumeFileName] = useState('')


    const formik = useFormik<ApplicationFormData>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            experience: '',
            portfolio: '',
            coverLetter: '',
            resume: null,
        },
        validationSchema: jobApplicationFormValidationSchema,
        onSubmit: async (values) => {
            // Log form data to console
            console.log('JobApplicationForm Submitted Data:', {
                ...values,
                resume: values.resume ? {
                    name: values.resume.name,
                    size: values.resume.size,
                    type: values.resume.type
                } : null
            })

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            setIsSubmitted(true)

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
                formik.resetForm()
                setResumeFileName('')
            }, 5000)
        },
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            formik.setFieldValue('resume', file)
            setResumeFileName(file.name)
        }
    }

    return (
        <section id="application-form" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <FileText className="w-4 h-4" />
                        <span>Application Form</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        Apply for a Position
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Fill out the form below to apply for a position at Arcbizz. We'll review your application and get back to you soon.
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
                                Application Submitted!
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Thank you for your interest. We've received your application and will review it shortly.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                We'll contact you via email within 5-7 business days.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Personal Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-foreground">
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
                                        <label htmlFor="lastName" className="text-sm font-semibold text-foreground">
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
                                            placeholder="john@example.com"
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
                            </div>

                            {/* Position & Experience */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    Position & Experience
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="position" className="text-sm font-semibold text-foreground">
                                            Position Applied For <span className="text-destructive">*</span>
                                        </label>
                                        <Select
                                            value={formik.values.position}
                                            onValueChange={(value) => formik.setFieldValue('position', value)}
                                        >
                                            <SelectTrigger
                                                id="position"
                                                className={`w-full h-12 ${formik.touched.position && formik.errors.position ? 'border-destructive' : ''}`}
                                            >
                                                <SelectValue placeholder="Select a position" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {availablePositions.map((pos) => (
                                                    <SelectItem key={pos} value={pos}>
                                                        {pos}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {formik.touched.position && formik.errors.position && (
                                            <p className="text-sm text-destructive">{formik.errors.position}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="experience" className="text-sm font-semibold text-foreground">
                                            Years of Experience <span className="text-destructive">*</span>
                                        </label>
                                        <Select
                                            value={formik.values.experience}
                                            onValueChange={(value) => formik.setFieldValue('experience', value)}
                                        >
                                            <SelectTrigger
                                                id="experience"
                                                className={`w-full h-12 ${formik.touched.experience && formik.errors.experience ? 'border-destructive' : ''}`}
                                            >
                                                <SelectValue placeholder="Select experience" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0-1">0-1 years</SelectItem>
                                                <SelectItem value="1-3">1-3 years</SelectItem>
                                                <SelectItem value="3-5">3-5 years</SelectItem>
                                                <SelectItem value="5-7">5-7 years</SelectItem>
                                                <SelectItem value="7+">7+ years</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {formik.touched.experience && formik.errors.experience && (
                                            <p className="text-sm text-destructive">{formik.errors.experience}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="portfolio" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <LinkIcon className="w-4 h-4" />
                                        Portfolio/Website
                                    </label>
                                    <Input
                                        id="portfolio"
                                        name="portfolio"
                                        type="url"
                                        placeholder="https://yourportfolio.com"
                                        value={formik.values.portfolio}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`h-12 ${formik.touched.portfolio && formik.errors.portfolio ? 'border-destructive' : ''}`}
                                    />
                                    {formik.touched.portfolio && formik.errors.portfolio && (
                                        <p className="text-sm text-destructive">{formik.errors.portfolio}</p>
                                    )}
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div className="space-y-2">
                                <label htmlFor="resume" className="text-sm font-semibold text-foreground flex items-center gap-2">
                                    <Upload className="w-4 h-4" />
                                    Resume/CV <span className="text-destructive">*</span>
                                </label>
                                <div className="flex items-center gap-4">
                                    <label
                                        htmlFor="resume"
                                        className={`flex-1 h-12 px-4 rounded-lg border bg-background flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors ${formik.touched.resume && formik.errors.resume ? 'border-destructive' : 'border-border'}`}
                                    >
                                        <span className="text-muted-foreground">
                                            {resumeFileName || 'Choose file (PDF, DOC, DOCX - Max 5MB)'}
                                        </span>
                                    </label>
                                    <input
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        onBlur={formik.handleBlur}
                                        className="hidden"
                                    />
                                </div>
                                {formik.touched.resume && formik.errors.resume && (
                                    <p className="text-sm text-destructive">{formik.errors.resume}</p>
                                )}
                            </div>

                            {/* Cover Letter */}
                            <div className="space-y-2">
                                <label htmlFor="coverLetter" className="text-sm font-semibold text-foreground">
                                    Cover Letter <span className="text-destructive">*</span>
                                </label>
                                <Textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                    value={formik.values.coverLetter}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    rows={6}
                                    className={`resize-none ${formik.touched.coverLetter && formik.errors.coverLetter ? 'border-destructive' : ''}`}
                                />
                                {formik.touched.coverLetter && formik.errors.coverLetter && (
                                    <p className="text-sm text-destructive">{formik.errors.coverLetter}</p>
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
                                        Submitting Application...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Submit Application
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

export default JobApplicationForm

