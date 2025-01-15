import Link from 'next/link'

export const NavHeaderMobile = () => {
  return (
    <div className="bg-primary-400 sticky top-0 z-50 flex p-2 text-background">
      <Link
        href="/"
        className="flex min-w-fit items-center pb-3 pt-4 font-ballet text-2xl"
      >
        <h1>Bistro Birk</h1>
      </Link>

      <nav className="flex w-full">
        <ul className="">
          <li className="">
            <Link href="/recipes">oppskrifter</Link>
          </li>
          <li className="">
            <Link href="/shopping-list">handleliste</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
