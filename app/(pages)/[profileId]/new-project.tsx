'use client'

import { ArrowUpFromLine, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { startTransition, useState } from 'react'

import { createProject } from '@/app/actions/create-project'
import { Button } from '@/app/components/ui/button'
import Modal from '@/app/components/ui/modal'
import { TextInput } from '@/app/components/ui/text-input'
import { Textarea } from '@/app/components/ui/textarea'
import { compressFiles } from '@/app/lib/utils'

interface NewProjectProps {
  profileId: string
}

export default function NewProject({ profileId }: NewProjectProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectUrl, setProjectUrl] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectImage, setProjectImage] = useState<string | null>(null)
  const [isCreatingProject, setIsCreatingProject] = useState(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  function handleProjectNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProjectName(event.target.value)
  }

  function handleProjectUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProjectUrl(event.target.value)
  }

  function handleProjectDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setProjectDescription(event.target.value)
  }

  function triggerImageUpload(id: string) {
    document.getElementById(id)?.click()
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProjectImage(imageUrl)
    }
  }

  async function handleSaveProject() {
    setIsCreatingProject(true)

    const imagesInput = document.getElementById(
      'imageInput',
    ) as HTMLInputElement

    if (!imagesInput.files) return

    const compressedImage = await compressFiles(Array.from(imagesInput.files))

    const formData = new FormData()
    formData.append('file', compressedImage[0])
    formData.append('profileId', profileId)
    formData.append('projectName', projectName)
    formData.append('projectUrl', projectUrl)
    formData.append('projectDescription', projectDescription)

    await createProject(formData)

    startTransition(() => {
      setIsOpen(false)
      setIsCreatingProject(false)
      setProjectName('')
      setProjectDescription('')
      setProjectUrl('')
      setProjectImage(null)
      router.refresh()
    })
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
                {projectImage ? (
                  <img
                    src={projectImage}
                    alt="Imagem do projeto"
                    className="object-cover object-center"
                  />
                ) : (
                  <button className="w-full h-full">100x100</button>
                )}
              </div>
              <button
                className="text-white flex items-center gap-2"
                onClick={() => triggerImageUpload('imageInput')}
              >
                <ArrowUpFromLine className="size-4 " />
                <span>Adicionar imagem</span>
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Título do projeto
                </label>
                <TextInput
                  value={projectName}
                  onChange={handleProjectNameChange}
                  id="project-name"
                  placeholder="Digite o título do projeto"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do projeto
                </label>
                <TextInput
                  value={projectUrl}
                  onChange={handleProjectUrlChange}
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
                  onChange={handleProjectDescriptionChange}
                  value={projectDescription}
                  id="project-description"
                  placeholder="Dê uma breve descrição do projeto"
                  className="h-36"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button onClick={handleOpenModal} className="font-bold text-white">
              Voltar
            </button>
            <Button disabled={isCreatingProject} onClick={handleSaveProject}>
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
