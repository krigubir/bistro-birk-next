import Link from 'next/link'

export const NavHeader = () => {
  return (
    <nav className="text-primary flex w-screen items-center gap-8 bg-background p-6">
      <h1 className="font-oldStandardTT text-2xl">SERVERT</h1>
      <div className="flex space-x-4">
        <Link href={'/'} className="text-lg">
          Oppskrifter
        </Link>
        <Link href={'/shopping-list'} className="text-lg">
          Handleliste
        </Link>
        <Link href={'/calendar'} className="text-lg">
          Kalender
        </Link>
      </div>
    </nav>
  )
}
