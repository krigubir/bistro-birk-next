import Link from 'next/link'

export const NavHeader = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-primary">
      <nav className="font-forum text-background flex w-full max-w-md items-center justify-between space-x-5 px-3 text-sm sm:text-base">
        <Link className="hover:underline" href={'/recipes'}>
          OPPSKRIFTER
        </Link>
        <h1 className="px-2 py-4 text-center font-ballet text-2xl text-secondary sm:py-8 sm:text-4xl">
          Bistro Birk
        </h1>
        <Link className="hover:underline" href={'/shopping-list'}>
          HANDLELISTE
        </Link>
      </nav>
    </div>
  )
}
