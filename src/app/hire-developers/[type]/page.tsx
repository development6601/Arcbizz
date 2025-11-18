import type { Metadata } from "next";
import { notFound } from 'next/navigation'
import DevelopersByType from "@/components/customComponents/hireDevelopers/DevelopersByType";
import HireForm from "@/components/customComponents/hireDevelopers/HireForm";
import CTASection from "@/components/customComponents/landingPage/CTASection";

// Valid developer types
const validTypes = [
    'full-stack-developers',
    'mobile-app-developers',
    'frontend-developers',
    'backend-developers',
    'ui-ux-developers',
    'devops-engineers',
    'security-specialists',
    'ai-ml-engineers',
]

const typeTitles: Record<string, string> = {
    'full-stack-developers': 'Full-Stack Developers',
    'mobile-app-developers': 'Mobile App Developers',
    'frontend-developers': 'Frontend Developers',
    'backend-developers': 'Backend Developers',
    'ui-ux-developers': 'UI/UX Developers',
    'devops-engineers': 'DevOps Engineers',
    'security-specialists': 'Security Specialists',
    'ai-ml-engineers': 'AI/ML Engineers',
}

interface PageProps {
    params: Promise<{
        type: string
    }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { type } = await params
    const title = typeTitles[type] || 'Developers'
    
    return {
        title: `Hire ${title} - Arcbizz | Available Developers`,
        description: `Browse and hire ${title.toLowerCase()} from Arcbizz. View profiles, skills, and contact our expert developers ready to join your team.`,
        openGraph: {
            title: `Hire ${title} - Arcbizz`,
            description: `Browse and hire ${title.toLowerCase()} from Arcbizz. View profiles and contact our expert developers.`,
            url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/hire-developers/${type}`,
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Hire ${title} - Arcbizz`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Hire ${title} - Arcbizz`,
            description: `Browse and hire ${title.toLowerCase()} from Arcbizz.`,
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'}/hire-developers/${type}`,
        },
    };
}

export default async function DeveloperTypePage({ params }: PageProps) {
    const { type } = await params

    // Validate type
    if (!validTypes.includes(type)) {
        notFound()
    }

    return (
        <>
            <DevelopersByType type={type} />
            <HireForm />
            <CTASection />
        </>
    );
}

