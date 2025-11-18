import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Code2, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
            <div className="text-center max-w-md">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Code2 className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    Developer Type Not Found
                </h1>
                <p className="text-muted-foreground mb-8">
                    The developer type you're looking for doesn't exist. Please check the URL or browse our available developer types.
                </p>
                <Link href="/hire-developers">
                    <Button size="lg" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Developer Types
                    </Button>
                </Link>
            </div>
        </div>
    )
}

