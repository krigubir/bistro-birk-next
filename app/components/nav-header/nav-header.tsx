'use client'

import { useIsMobile } from '@/app/lib/hooks/is-mobile'
import Link from 'next/link'

export const NavHeader = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-primary">
      <nav className="flex w-full max-w-md items-center justify-between space-x-4 px-2 font-forum text-sm text-background sm:text-base">
        <Link className="hover:underline" href={'/recipes'}>
          OPPSKRIFTER
        </Link>

        <h1 className="min-w-fit pb-3 pt-4 text-center font-ballet text-xl text-secondary sm:py-8 sm:text-4xl">
          Bistro Birk
        </h1>
        <Link className="hover:underline" href={'/shopping-list'}>
          HANDLELISTE
        </Link>
      </nav>
    </div>
  )
}
