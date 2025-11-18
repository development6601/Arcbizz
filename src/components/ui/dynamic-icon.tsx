'use client'

import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface DynamicIconProps {
  name: string
  className?: string
  size?: number
}

/**
 * Generic component to dynamically render any Lucide icon by name
 * Usage: <DynamicIcon name="Laptop" className="h-4 w-4" />
 * 
 * This works for any Lucide icon name - no need to create separate mapping files
 */
export function DynamicIcon({ name, className = '', size }: DynamicIconProps) {
  // Convert icon name to PascalCase if needed (e.g., "trending-up" -> "TrendingUp")
  const iconName = name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('') as keyof typeof LucideIcons

  // Get the icon component from lucide-react
  const IconComponent = LucideIcons[iconName] as LucideIcon | undefined

  if (!IconComponent) {
    // Fallback: return null or a default icon if icon not found
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }

  // Ensure icons inherit text color from parent by default
  const defaultClassName = 'text-current'
  const combinedClassName = className 
    ? `${defaultClassName} ${className}` 
    : defaultClassName

  // Use size prop if provided, otherwise use className for size control
  if (size) {
    return <IconComponent className={combinedClassName} size={size} />
  }

  return <IconComponent className={combinedClassName} />
}

