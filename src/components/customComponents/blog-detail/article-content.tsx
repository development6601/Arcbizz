'use client'

import { useEffect } from 'react'

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        const element = document.getElementById(id || '')
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
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  if (!content) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg">No content available for this article.</p>
      </div>
    )
  }

  return (
    <div
      className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-gray-100 [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:leading-tight [&_h2]:scroll-mt-24
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:dark:text-gray-100 [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:leading-tight [&_h3]:scroll-mt-24
        [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:dark:text-gray-100 [&_h4]:mt-8 [&_h4]:mb-3
        [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base [&_p]:md:text-lg [&_p]:text-gray-700 [&_p]:dark:text-gray-300
        [&_a]:text-blue-600 [&_a]:dark:text-blue-400 [&_a]:no-underline [&_a:hover]:underline [&_a]:font-medium [&_a]:transition-all
        [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-gray-100
        [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:text-gray-700 [&_ul]:dark:text-gray-300
        [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:text-gray-700 [&_ol]:dark:text-gray-300
        [&_li]:my-2 [&_li]:leading-relaxed
        [&_code]:text-sm [&_code]:bg-gray-100 [&_code]:dark:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:font-mono [&_code]:text-gray-800 [&_code]:dark:text-gray-200
        [&_pre]:bg-gray-900 [&_pre]:dark:bg-gray-950 [&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-8 [&_pre]:shadow-lg [&_pre]:border [&_pre]:border-gray-800
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-gray-100 [&_pre_code]:dark:text-gray-100
        [&_img]:rounded-xl [&_img]:shadow-xl [&_img]:my-10 [&_img]:w-full [&_img]:h-auto [&_img]:border [&_img]:border-gray-200 [&_img]:dark:border-gray-700
        [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_blockquote]:text-gray-700 [&_blockquote]:dark:text-gray-300 [&_blockquote]:bg-gray-50 [&_blockquote]:dark:bg-gray-900 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg
        [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:shadow-md [&_table]:rounded-lg [&_table]:overflow-hidden
        [&_thead]:bg-gray-100 [&_thead]:dark:bg-gray-800
        [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-gray-300 [&_th]:dark:border-gray-700 [&_th]:bg-gray-50 [&_th]:dark:bg-gray-800
        [&_td]:px-4 [&_td]:py-3 [&_td]:border [&_td]:border-gray-200 [&_td]:dark:border-gray-700 [&_td]:text-gray-700 [&_td]:dark:text-gray-300
        [&_hr]:my-10 [&_hr]:border-gray-200 [&_hr]:dark:border-gray-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

