'use client'

import { ArrowUpFromLine, Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/components/ui/button'
import Modal from '@/app/components/ui/modal'
import { TextInput } from '@/app/components/ui/text-input'
import { Textarea } from '@/app/components/ui/textarea'

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
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <p className="text-white font-bold text-xl">Novo Projeto</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] bg-background-tertiary overflow-hidden rounded-xl">
                <button className="w-full h-full">100x100</button>
              </div>
              <button className="text-white flex items-center gap-2">
                <ArrowUpFromLine className="size-4 " />
                <span>Adicionar imagem</span>
              </button>
              <input
                type="text"
                id="image"
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Título do projeto
                </label>
                <TextInput
                  id="project-name"
                  placeholder="Digite o título do projeto"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do projeto
                </label>
                <TextInput
                  type="url"
                  id="project-url"
                  placeholder="Digite a URL do projeto"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Descrição do projeto
                </label>
                <Textarea
                  id="project-description"
                  placeholder="Dê uma breve descrição do projeto"
                  className="h-36"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button className="font-bold text-white">Voltar</button>
            <Button>Salvar</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
