'use client'

import React from 'react'
import { FileText, Calendar } from 'lucide-react'

interface LegalPageLayoutProps {
    title: string
    lastUpdated: string
    children: React.ReactNode
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
    return (
        <section className="relative py-14 md:py-20 px-4 overflow-hidden bg-background">
            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Header */}
                <div className="mb-8 pb-8 border-b border-border">
                    <div className="inline-flex items-center gap-2 px-2 py-1.5 lg:px-4 lg:py-2 rounded-full bg-primary/10 text-primary text-xs lg:text-base font-medium mb-4">
                        <FileText className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Legal Document</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                        {title}
                    </h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span className="text-xs lg:text-base">Last Updated: {lastUpdated}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="text-muted-foreground leading-relaxed space-y-6">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LegalPageLayout

