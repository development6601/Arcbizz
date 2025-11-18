'use client'

import React, { useState, useMemo } from 'react'
import { Users, Linkedin, Github, Mail, Search, Briefcase } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { teamMembers, TeamMember } from '@/lib/data/team-data'

const TeamList = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRole, setSelectedRole] = useState<string | null>(null)

    // Get unique roles for filter
    const uniqueRoles = useMemo(() => {
        return [...new Set(teamMembers.map((member: TeamMember) => member.role))]
    }, [])

    // Filter team members
    const filteredMembers = useMemo(() => {
        let filtered = teamMembers

        // Filter by role
        if (selectedRole) {
            filtered = filtered.filter((member: TeamMember) => member.role === selectedRole)
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter((member: TeamMember) =>
                member.name.toLowerCase().includes(query) ||
                member.role.toLowerCase().includes(query) ||
                member.bio.toLowerCase().includes(query)
            )
        }

        return filtered
    }, [teamMembers, selectedRole, searchQuery])

    console.log('teamMembers:==>', teamMembers)


    return (
        <section id="team-list" className="relative py-20 md:py-28 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Users className="w-4 h-4" />
                        <span>Meet the Team</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground">
                        The People Behind Arcbizz
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We're a diverse team of talented individuals united by our passion for technology and commitment to excellence.
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search team members..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12 rounded-xl border-border bg-background"
                            />
                        </div>
                    </div>

                    {/* Role Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                            variant={selectedRole === null ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedRole(null)}
                        >
                            All Roles
                        </Button>
                        {uniqueRoles.map((role: string) => (
                            <Button
                                key={role}
                                variant={selectedRole === role ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedRole(role)}
                            >
                                {role}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8 text-center">
                    <p className="text-muted-foreground">
                        {filteredMembers.length === 0 ? (
                            <span>No team members found.</span>
                        ) : (
                            <span>
                                Showing <span className="font-semibold text-foreground">{filteredMembers.length}</span> team member{filteredMembers.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </p>
                </div>

                {/* Team Grid */}
                {filteredMembers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredMembers.map((member: TeamMember, index: number) => (
                            <div
                                key={member.id}
                                className="group relative"
                            >
                                {/* Glassmorphism Card */}
                                <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 ease-out hover:border-border hover:shadow-md hover:shadow-black/2 hover:-translate-y-2 hover:scale-[1.01]">
                                    {/* Subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Animated border glow */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-border/30 to-transparent blur-sm" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Avatar with floating animation */}
                                        <div className="flex justify-center mb-6">
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <Avatar className="relative w-28 h-28 md:w-32 md:h-32 ring-2 ring-border/50 group-hover:ring-border transition-all duration-500">
                                                    <AvatarImage
                                                        src={member.image}
                                                        alt={member.name}
                                                        className='w-full h-full object-cover'
                                                    />
                                                    <AvatarFallback className="bg-muted/50 text-foreground text-xl font-semibold backdrop-blur-sm">
                                                        {member.name.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </div>

                                        {/* Name & Role with slide animation */}
                                        <div className="text-center mb-5 space-y-1">
                                            <h3 className="text-lg md:text-xl font-semibold text-foreground transition-all duration-300 group-hover:text-foreground">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-muted-foreground font-medium transition-all duration-300 group-hover:text-foreground/80">
                                                {member.role}
                                            </p>
                                        </div>

                                        {/* Bio with fade effect */}
                                        <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 line-clamp-3 transition-colors duration-300 group-hover:text-foreground/70">
                                            {member.bio}
                                        </p>

                                        {/* Social Links with staggered animation */}
                                        <div className="flex items-center justify-center gap-2 pt-5 border-t border-border/50 group-hover:border-border transition-colors duration-300">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-lg bg-muted/30 backdrop-blur-sm flex items-center justify-center hover:bg-muted/60 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-sm"
                                                    aria-label={`${member.name}'s LinkedIn`}
                                                >
                                                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-lg bg-muted/30 backdrop-blur-sm flex items-center justify-center hover:bg-muted/60 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-sm"
                                                    aria-label={`${member.name}'s GitHub`}
                                                >
                                                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                                                </a>
                                            )}
                                            {member.email && (
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="w-9 h-9 rounded-lg bg-muted/30 backdrop-blur-sm flex items-center justify-center hover:bg-muted/60 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-sm"
                                                    aria-label={`Email ${member.name}`}
                                                >
                                                    <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-20">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Search className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            No Team Members Found
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search or filter criteria.
                        </p>
                        <Button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedRole(null)
                            }}
                            className="text-primary hover:underline font-medium"
                            variant="outline"
                        >
                            Clear all filters
                        </Button>
                    </div>
                )}

                {/* Join Us CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            Want to Join Our Team?
                        </h3>
                        <p className="text-muted-foreground text-lg">
                            We're always looking for talented individuals who share our passion for innovation and excellence.
                        </p>
                        <a
                            href="/careers#open-positions"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                        >
                            View Open Positions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamList

