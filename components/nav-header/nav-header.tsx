import Link from 'next/link'

export const NavHeader = () => {
  return (
    <nav className="flex w-screen items-center gap-8 bg-background p-6 text-primary">
      <h1 className="font-serif text-2xl">SERVERT</h1>
      <div className="flex space-x-4">
        <Link href={'/recipes'} className="text-lg">
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
