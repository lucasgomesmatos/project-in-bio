'use client'
import { useRef } from 'react'

import { onClickOutside } from '@/app/hooks/on-click-outside'

interface ModalProps {
  isOpen: boolean
  onClose: (isOpen: boolean) => void
  children: React.ReactNode
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)

  onClickOutside(ref, () => onClose(false))

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-[#787878]/10  backdrop-blur-md flex justify-center items-center z-50">
      <div ref={ref}>{children}</div>
    </div>
  )
}
