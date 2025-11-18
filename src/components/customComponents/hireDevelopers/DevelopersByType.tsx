'use client'

import React from 'react'
import { Users, Linkedin, Github, Mail, ArrowLeft, Phone, Calendar } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { teamMembers, TeamMember } from '@/lib/data/team-data'


// Map developer types to team member roles
const typeToRolesMap: Record<string, string[]> = {
    'full-stack-developers': ['Lead Developer', 'Senior Developer', 'CTO'],
    'mobile-app-developers': ['Lead Developer', 'Senior Developer'],
    'frontend-developers': ['Lead Developer', 'UI/UX Designer'],
    'backend-developers': ['Senior Developer', 'CTO', 'Lead Developer'],
    'ui-ux-developers': ['UI/UX Designer'],
    'devops-engineers': ['Senior Developer', 'CTO'],
    'security-specialists': ['CTO', 'Senior Developer'],
    'ai-ml-engineers': ['CTO', 'Senior Developer'],
}

// Developer type titles mapping
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

interface DevelopersByTypeProps {
    type: string
}

const DevelopersByType: React.FC<DevelopersByTypeProps> = ({ type }) => {
    // Get roles that match this developer type
    const matchingRoles = typeToRolesMap[type] || []

    // Filter team members based on their roles
    const filteredDevelopers = teamMembers.filter((member: TeamMember) =>
        matchingRoles.some(role => member.role.includes(role) || role.includes(member.role))
    )

    // If no exact match, show all developers (fallback)
    const developers = filteredDevelopers.length > 0
        ? filteredDevelopers
        : teamMembers

    const typeTitle = typeTitles[type] || 'Developers'

    return (
        <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/hire-developers">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Developer Types
                        </Button>
                    </Link>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Users className="w-4 h-4" />
                        <span>Available Developers</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        {typeTitle}
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Meet our talented {typeTitle.toLowerCase()} ready to join your team. Click on any developer to learn more or contact them directly.
                    </p>
                </div>

                {/* Results Count */}
                <div className="mb-8 text-center">
                    <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{developers.length}</span> developer{developers.length !== 1 ? 's' : ''} available
                    </p>
                </div>

                {/* Developers Grid */}
                {developers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {developers.map((developer: TeamMember) => (
                            <div
                                key={developer.id}
                                className="group relative bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Avatar */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <Avatar className="w-24 h-24 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                                                <AvatarImage
                                                    src={developer.image}
                                                    alt={developer.name}
                                                    className='w-24 h-24'
                                                />
                                                <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                                                    {developer.name.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
                                                <Users className="w-4 h-4 text-primary-foreground" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name & Role */}
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-foreground mb-1">
                                            {developer.name}
                                        </h3>
                                        <p className="text-primary font-medium">
                                            {developer.role}
                                        </p>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6">
                                        {developer.bio}
                                    </p>

                                    {/* Availability Badge */}
                                    <div className="flex items-center justify-center gap-2 mb-6">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Available Now
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center gap-3 pt-4 border-t border-border mb-4">
                                        {developer.linkedin && (
                                            <a
                                                href={developer.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                                aria-label={`${developer.name}'s LinkedIn`}
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {developer.github && (
                                            <a
                                                href={developer.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                                aria-label={`${developer.name}'s GitHub`}
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {developer.email && (
                                            <a
                                                href={`mailto:${developer.email}`}
                                                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                                aria-label={`Email ${developer.name}`}
                                            >
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Hire Button */}
                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            const formSection = document.getElementById('hire-form');
                                            if (formSection) {
                                                formSection.scrollIntoView({ behavior: 'smooth' });
                                            } else {
                                                window.location.href = '/hire-developers#hire-form';
                                            }
                                        }}
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Hire {developer.name.split(' ')[0]}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Users className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            No Developers Found
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We're currently building our team. Check back soon or contact us directly.
                        </p>
                        <Link href="/hire-developers">
                            <Button variant="outline">
                                View All Developer Types
                            </Button>
                        </Link>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        Ready to Hire?
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                        Fill out our form below and we'll connect you with the perfect developer for your project.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => {
                            const hireFormSection = document.getElementById('hire-form');
                            hireFormSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Request a Developer
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default DevelopersByType

