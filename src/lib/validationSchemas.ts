import * as Yup from 'yup'

/**
 * Validation schema for Hire Form
 */
export const hireFormValidationSchema = Yup.object({
    companyName: Yup.string()
        .required('Company name is required')
        .trim(),
    contactName: Yup.string()
        .required('Contact name is required')
        .trim(),
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .trim(),
    phone: Yup.string()
        .required('Phone number is required')
        .trim(),
    projectType: Yup.string()
        .required('Project type is required'),
    budget: Yup.string()
        .required('Budget range is required'),
    timeline: Yup.string()
        .required('Project timeline is required'),
    requirements: Yup.string()
        .required('Project requirements are required')
        .trim(),
})

/**
 * Validation schema for Job Application Form
 */
export const jobApplicationFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required')
        .trim(),
    lastName: Yup.string()
        .required('Last name is required')
        .trim(),
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .trim(),
    phone: Yup.string()
        .required('Phone number is required')
        .trim(),
    position: Yup.string()
        .required('Please select a position'),
    experience: Yup.string()
        .required('Years of experience is required'),
    portfolio: Yup.string()
        .trim()
        .test('url', 'Please enter a valid URL', (value) => {
            if (!value || value.length === 0) return true
            try {
                new URL(value)
                return true
            } catch {
                return false
            }
        }),
    coverLetter: Yup.string()
        .required('Cover letter is required')
        .trim(),
    resume: Yup.mixed<File>()
        .required('Resume is required')
        .test('fileSize', 'File size must be less than 5MB', (value) => {
            if (!value) return false
            return (value as File).size <= 5 * 1024 * 1024
        })
        .test('fileType', 'Only PDF, DOC, and DOCX files are allowed', (value) => {
            if (!value) return false
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
            return allowedTypes.includes((value as File).type)
        }),
})

/**
 * Validation schema for Contact Form
 */
export const contactFormValidationSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required')
        .trim(),
    lastName: Yup.string()
        .required('Last name is required')
        .trim(),
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .trim(),
    phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
        .trim(),
    message: Yup.string()
        .required('Message is required')
        .test('not-default', 'Message is required', (value) => {
            return value !== 'Message for Arcbizz' && value.trim().length > 0
        })
        .trim(),
})

/**
 * Validation schema for Newsletter Subscription Form
 */
export const newsletterSubscriptionValidationSchema = Yup.object({
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .trim(),
})

/**
 * Validation schema for Job Alerts Subscription Form
 */
export const jobAlertsSubscriptionValidationSchema = Yup.object({
    email: Yup.string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .trim(),
})

