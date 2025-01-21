import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

import { cn } from '@/app/lib/utils'

const button = tv({
  base: [
    'p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
  ],

  variants: {
    variant: {
      primary: ['bg-accent-purple'],
      secondary: ['bg-background-tertiary'],
      ghost: ['border-border-primary'],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(button({ variant }), props.className)}>
      {children}
    </button>
  )
}
