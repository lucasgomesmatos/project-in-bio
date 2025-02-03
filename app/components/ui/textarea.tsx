import { ComponentProps } from 'react'

import { cn } from '@/app/lib/utils'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={cn(
        'w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl font-bold',
        'border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary',
        props.className,
      )}
    />
  )
}
