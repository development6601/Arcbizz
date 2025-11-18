import Link from 'next/link'
import { ArrowLeft, FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
          <FileQuestion className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Case Study Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The case study you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/case-study">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

