import Link from 'next/link'

export const NavHeader = () => {
  return (
    <nav className="text-secondary flex w-screen items-center justify-center gap-8 space-x-4 bg-primary p-10 text-xl">
      <div>DAGENS</div>
      <Link href={'/recipes'}>OPPSKRIFTER</Link>
      <h1 className="font-ballet border-secondary rounded-full border-2 px-8 py-4 pt-6 text-center text-4xl">
        Bistro Birk
      </h1>
      <Link href={'/shopping-list'}>HANDLELISTE</Link>
      <Link href={'/calendar'}>KALENDER</Link>
    </nav>
  )
}
