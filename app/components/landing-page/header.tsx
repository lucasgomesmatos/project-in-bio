import { manageAuth } from '@/app/actions/manage-auth'
import { auth } from '@/app/lib/auth'

import { Button } from '../ui/button'

export default async function Header() {
  const session = await auth()

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between p-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        {session && <Button>Minha Página</Button>}
        <form action={manageAuth}>
          <Button>{session ? 'Sair' : 'Entrar'}</Button>
        </form>
      </div>
    </div>
  )
}
