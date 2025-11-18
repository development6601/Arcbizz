'use client'

import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const trackLength = documentHeight - windowHeight
      const progress = (scrollTop / trackLength) * 100
      setProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', calculateProgress)
    calculateProgress()

    return () => window.removeEventListener('scroll', calculateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <Progress value={progress} className="h-1" />
    </div>
  )
}

