'use client'

import { Button } from '@/components/ui/button'
import { Twitter, Linkedin, Facebook, Link2, Copy, Check } from 'lucide-react'
import { BlogPost } from '@/lib/types/types'
import { useState, useEffect } from 'react'

interface SocialShareProps {
  post: BlogPost
  variant?: 'horizontal' | 'vertical'
}

export function SocialShare({ post, variant = 'horizontal' }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const shareUrl = encodeURIComponent(url)
  const shareTitle = encodeURIComponent(post?.title || '')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  }

  if (variant === 'vertical') {
    return (
      <div className="flex flex-col gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          className="w-12 h-12"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          className="w-12 h-12"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          className="w-12 h-12"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className="w-12 h-12"
          aria-label="Copy link"
        >
          {copied ? <Check className="h-5 w-5" /> : <Link2 className="h-5 w-5" />}
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 p-4 border rounded-lg bg-gray-50">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          className="gap-2"
        >
          <Twitter className="h-4 w-4" />
          <span>Twitter</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          className="gap-2"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          className="gap-2"
        >
          <Facebook className="h-4 w-4" />
          <span>Facebook</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

