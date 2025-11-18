'use client'

import React, { useState } from 'react'
import { Briefcase, MapPin, Clock, ArrowRight, Code2, Palette, Server, Megaphone, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation'

interface Job {
    id: string
    title: string
    department: string
    location: string
    type: 'Full-time' | 'Part-time' | 'Contract'
    description: string
    icon: React.ElementType
    postedDate: string
}

const OpenPositions = () => {
    const router = useRouter()
    const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
    const [selectedLocation, setSelectedLocation] = useState<string>('all')

    const jobs: Job[] = [
        {
            id: '1',
            title: 'Frontend Developer',
            department: 'Engineering',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'We\'re looking for a talented Frontend Developer to join our team and help build cutting-edge web applications. You\'ll work with React, Next.js, TypeScript, and modern UI frameworks to create beautiful, responsive user experiences.',
            icon: Code2,
            postedDate: '2 weeks ago',
        },
        {
            id: '2',
            title: 'Product Designer',
            department: 'Design',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'Join our design team to create beautiful, user-centered digital experiences that make a difference. You\'ll work on web applications, mobile interfaces, and design systems that impact thousands of users.',
            icon: Palette,
            postedDate: '1 week ago',
        },
        {
            id: '3',
            title: 'Backend Developer',
            department: 'Engineering',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'We\'re seeking an experienced Backend Developer to build scalable, secure, and efficient server-side solutions. You\'ll work with Node.js, Python, databases, and cloud infrastructure to power our applications.',
            icon: Server,
            postedDate: '3 days ago',
        },
        {
            id: '4',
            title: 'Marketing Lead',
            department: 'Marketing',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'Lead our marketing efforts and help grow Arcbizz\'s presence in the technology solutions market. You\'ll develop and execute marketing strategies, manage campaigns, and build our brand.',
            icon: Megaphone,
            postedDate: '1 week ago',
        },
        {
            id: '5',
            title: 'Full Stack Developer',
            department: 'Engineering',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'Looking for a versatile Full Stack Developer who can work across the entire stack. You\'ll build features from database to UI, work on API design, and contribute to architectural decisions.',
            icon: Code2,
            postedDate: '5 days ago',
        },
        {
            id: '6',
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote / Surat',
            type: 'Full-time',
            description: 'Create intuitive and engaging user experiences. You\'ll conduct user research, design wireframes and prototypes, and collaborate closely with developers to bring designs to life.',
            icon: Palette,
            postedDate: '4 days ago',
        },
    ]

    const departments = ['all', 'Engineering', 'Design', 'Marketing']
    const locations = ['all', 'Remote / Surat', 'Surat', 'Remote']

    const filteredJobs = jobs.filter(job => {
        const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
        const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation === 'Remote' ? 'Remote' : selectedLocation)
        return matchesDepartment && matchesLocation
    })

    const handleApply = (jobId: string) => {
        // In a real app, this would navigate to an application form or external job board
        console.log('Apply for job:', jobId)
        router.push('/apply-for-job#application-form')
    }

    return (
        <section id="open-positions" className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Briefcase className="w-4 h-4" />
                        <span>Open Positions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our growing team. Check out our open positions below.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 p-6 bg-card border border-border rounded-2xl">
                    <div className="flex items-center gap-3">
                        <Filter className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold text-foreground">Filters:</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        {/* Department Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Department:</span>
                            <Select
                                value={selectedDepartment}
                                onValueChange={setSelectedDepartment}
                            >
                                <SelectTrigger className="w-[180px] h-9 text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map(dept => (
                                        <SelectItem key={dept} value={dept}>
                                            {dept === 'all' ? 'All Departments' : dept}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Location Filter */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Location:</span>
                            <Select
                                value={selectedLocation}
                                onValueChange={setSelectedLocation}
                            >
                                <SelectTrigger className="w-[180px] h-9 text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {locations.map(loc => (
                                        <SelectItem key={loc} value={loc}>
                                            {loc === 'all' ? 'All Locations' : loc}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Clear Filters */}
                        {(selectedDepartment !== 'all' || selectedLocation !== 'all') && (
                            <Button
                                onClick={() => {
                                    setSelectedDepartment('all')
                                    setSelectedLocation('all')
                                }}
                                className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-4 h-4" />
                                Clear
                            </Button>
                        )}
                    </div>
                </div>

                {/* Jobs List */}
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-16">
                        <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <h3 className="text-2xl font-bold mb-2">No positions match your filters</h3>
                        <p className="text-muted-foreground mb-6">Try adjusting your filters or check back later for new opportunities.</p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setSelectedDepartment('all')
                                setSelectedLocation('all')
                            }}
                        >
                            Clear All Filters
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => {
                            const Icon = job.icon
                            return (
                                <Card
                                    key={job.id}
                                    className="group hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <span className="text-xs text-muted-foreground">{job.postedDate}</span>
                                        </div>
                                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                                        <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                            {job.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="flex items-center justify-between pt-4">
                                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                            {job.department}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleApply(job.id)}
                                            className="group/btn"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-16 p-8 bg-card border border-border rounded-3xl">
                    <h3 className="text-2xl font-bold mb-3">Don't see your role?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        We're always looking for talented individuals. Even if we don't have a specific position open,
                        we'd love to hear from you. Send us your resume and let's start a conversation.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => {
                            window.location.href = 'mailto:info@arcbizz.com?subject=General Application'
                        }}
                    >
                        Send Your Resume
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default OpenPositions

