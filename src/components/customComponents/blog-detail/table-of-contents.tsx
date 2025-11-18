'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TOCItem } from '@/lib/types/types'
import { useState, useEffect } from 'react'
import { List } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (items.length === 0) return null

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <List className="h-5 w-5" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <nav>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-left w-full text-sm transition-colors hover:text-primary cursor-pointer
                      ${activeId === item.id ? 'text-primary font-semibold' : 'text-muted-foreground'}
                      ${item.level === 3 ? 'pl-4' : ''}
                    `}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

