import { BlogPost } from '../types/types'

/**
 * Calculate reading time based on content length
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Extract table of contents from HTML content
 */
export function extractTableOfContents(content: string): Array<{ id: string; title: string; level: number }> {
  const headings: Array<{ id: string; title: string; level: number }> = []
  
  // Match h2 and h3 headings
  const headingRegex = /<h([2-3])[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/h[2-3]>/gi
  let match
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1])
    const id = match[2]
    const title = match[3].replace(/<[^>]*>/g, '').trim()
    
    headings.push({ id, title, level })
  }
  
  return headings
}

/**
 * Format date for display
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  return allPosts
    .filter(post => 
      post?.id !== currentPost?.id &&
      post?.status === 'published' &&
      (post?.category?.id === currentPost?.category?.id ||
       post?.tags.some(tag => currentPost?.tags.includes(tag)))
    )
    .sort((a, b) => {
      // Prioritize same category
      if (a?.category?.id === currentPost?.category?.id && b?.category?.id !== currentPost?.category?.id) return -1
      if (a?.category?.id !== currentPost?.category?.id && b?.category?.id === currentPost?.category?.id) return 1
      // Then by publish date
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, limit)
}

