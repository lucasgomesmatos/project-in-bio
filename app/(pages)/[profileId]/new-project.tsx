'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import Modal from '@/app/components/ui/modal'

interface NewProjectProps {
  profileId: string
}

export default function NewProject({ profileId }: NewProjectProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] flex justify-center gap-2 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary items-center border-dashed "
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <div>OLá</div>
      </Modal>
    </div>
  )
}
