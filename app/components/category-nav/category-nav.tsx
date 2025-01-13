'use client'

import { useState } from 'react'
import { ChevronDownIcon, XMarkIcon } from '@navikt/aksel-icons'
import { NavLink } from '@/app/components/shared/nav-link'
import { mockLinks } from '@/app/lib/mock-data'

export const CategoryNav = () => {
  const links = mockLinks
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className="sticky top-[120px] z-40 flex flex-col justify-center gap-2 bg-secondary">
      {/* Button to Toggle Dropdown */}
      <button
        type="button"
        className="flex w-full items-center justify-between border-b-2 border-primary p-2"
        onClick={handleClick}
      >
        Kategori <ChevronDownIcon title="Open filter nav" fontSize="1.5rem" />
      </button>

      {/* Dropdown */}
      {isNavOpen && links && (
        <div
          className="fixed left-0 right-0 top-[170px] z-40 max-h-[calc(100vh-120px)] overflow-y-auto bg-secondary shadow-lg"
          style={{ height: 'auto' }} // Optional to ensure dropdown doesn't exceed view height
        >
          {/* Links */}
          {links.map((link) => (
            <div
              key={link.title}
              className="mx-auto flex w-10/12 justify-center border-b-2 border-primary/10 p-2"
              onClick={handleClick}
            >
              <NavLink link={link} />
            </div>
          ))}

          {/* Close Button */}
          <button
            type="button"
            className="flex w-full justify-center p-2 pt-4 text-black/85"
            onClick={handleClick}
          >
            <XMarkIcon title="Close filter nav" fontSize="1.5rem"></XMarkIcon>
          </button>
        </div>
      )}
    </nav>
  )
}
