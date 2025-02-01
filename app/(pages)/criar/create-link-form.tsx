'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

import { createProfile } from '@/app/actions/create-profile'
import { verifyLink } from '@/app/actions/verify-link'
import { Button } from '@/app/components/ui/button'
import { TextInput } from '@/app/components/ui/text-input'
import { sanitizeUrl } from '@/app/lib/utils'

export default function CreateLinkForm() {
  const [link, setLink] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  function handleLinkChange(event: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeUrl(event.target.value))
    setError(null)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Quando o link não é inserido
    if (!link) {
      setError('Por favor, insira um link.')
      return
    }

    // Quando o link escolhe um link já existente
    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) {
      setError('Este link já está em uso.')
      return
    }

    // Criar o perfil
    const isLinkCreated = await createProfile(link)

    if (isLinkCreated) {
      // Redirecionar para a página do perfil
      router.push(`/${link}`)
    } else {
      setError('Algo deu errado. Por favor, tente novamente.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white text-xl">projectinbio.com/</span>
        <TextInput
          onChange={handleLinkChange}
          value={link}
          placeholder="Seu link"
        />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  )
}
