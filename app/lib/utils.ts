import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes))
}

export function sanitizeUrl(url: string): string {
  if (!url) return ''

  return url
    .replace(/\s/g, '')
    .replace(/[!@#$%^&*()_+\-=[\]{};':"\\|,ˆ.<>/?]+/, '')
    .toLocaleLowerCase()
}
