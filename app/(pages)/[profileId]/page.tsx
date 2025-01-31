import { Plus } from 'lucide-react'
import Link from 'next/link'

import ProjectCard from '@/app/components/commons/project-card'
import { TotalVisits } from '@/app/components/commons/total-visits'
import { UserCard } from '@/app/components/commons/user-card'

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params
  console.log(profileId)

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você está usando a versão trial</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold">
            Faça o upgrade agora!
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <button className="w-[340px] h-[132px] flex justify-center gap-2 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary items-center border-dashed ">
          <Plus className="size-10 text-accent-green" />
          <span>Novo projeto</span>
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}
