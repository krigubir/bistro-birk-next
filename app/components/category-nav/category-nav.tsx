'use client'

import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@navikt/aksel-icons'
import { NavLink } from '@/app/components/shared/nav-link'
import { mockLinks } from '@/app/lib/mock-data'

export const CategoryNav = () => {
  const links = mockLinks
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isToggleButtonVisible, setIsToggleButtonVisible] = useState(true) // Controls visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0)

  // Check screen width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640) // Tailwind `sm` breakpoint is 640px
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Handle scroll direction to toggle visibility and close filter on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return // Dont hide nav on desktop
      if (isNavOpen) return // Don't hide nav when filter is open

      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsToggleButtonVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsToggleButtonVisible(true)
      }

      setLastScrollY(scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile, isNavOpen, lastScrollY])

  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <div
        className={`sticky left-0 top-[70px] z-30 flex w-full transform ${
          isToggleButtonVisible
            ? 'translate-y-0 transition-transform duration-[600ms]'
            : '-translate-y-full transition-transform duration-[400ms]'
        }`}
      >
        <button
          type="button"
          className={`z-40 flex flex-grow items-center justify-between bg-secondary p-2 ${isNavOpen ? 'border-b-2 border-primary/10 duration-[400ms]' : 'border-b-2 border-primary duration-[600ms]'}`}
          onClick={handleClick}
        >
          Kategori{' '}
          <ChevronDownIcon
            title="Open category nav"
            fontSize="1.5rem"
            className={`transition-transform ${isNavOpen ? 'rotate-180 duration-[600ms]' : 'rotate-0 duration-[400ms]'}`}
          />
        </button>
        <nav
          className={`fixed top-[52px] flex w-full flex-col bg-secondary shadow-lg ${
            isNavOpen
              ? 'tranform transition-transform duration-[600ms]'
              : '-translate-y-[150%] border-none duration-[400ms]'
          }`}
          onClick={handleClick}
        >
          <div className="grid w-full grid-cols-2 gap-3 gap-x-12 px-8 py-4">
            {links.map((link) => (
              <NavLink link={link} key={link.title} />
            ))}
          </div>
        </nav>
      </div>

      <div
        className={`absolute z-20 h-screen w-full ${isNavOpen ? 'bg-black/25 duration-[600ms]' : 'opacity-0 duration-[400ms]'}`}
        onClick={handleClick}
      ></div>
    </>
  )
}
