import { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

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

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className={button({
        variant: props.variant,
        className: props.className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
