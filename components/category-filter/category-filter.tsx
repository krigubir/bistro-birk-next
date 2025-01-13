'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons'
import Image from 'next/image'
import Link from 'next/link'

export const CategoryFilter = ({ categories }: { categories: string[] }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // Controls visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0) // Tracks the last scroll position

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
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false) // Scrolling down
        if (isMobile && isFilterOpen) {
          setIsFilterOpen(false) // Close filter on mobile when scrolling down
        }
      } else {
        setIsVisible(true) // Scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY, isMobile, isFilterOpen])

  return (
    <div
      className={`sticky left-0 ${
        isMobile ? 'top-[80px]' : 'top-[130px]'
      } w-full transform ${
        isVisible
          ? 'translate-y-0 transition-transform duration-500'
          : '-translate-y-full transition-transform duration-300'
      } z-40 flex flex-col items-center bg-secondary`}
    >
      {isMobile && (
        <div className="flex w-full justify-center p-1">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex items-center justify-center"
          >
            <span
              className={`transition-transform duration-500 ${
                isFilterOpen ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <ChevronDownIcon title="Toggle filter" fontSize="1.5rem" />
            </span>
          </button>
        </div>
      )}
      <div
        className={`overflow-hidden transition-all ${
          isMobile
            ? isFilterOpen
              ? 'max-h-[500px] opacity-100 duration-500'
              : 'max-h-0 opacity-0 duration-300'
            : 'max-h-full opacity-100'
        }`}
      >
        <div className="font-forum grid max-w-screen-md grid-cols-2 gap-2 gap-x-6 px-6 pb-4 sm:w-full sm:grid-flow-col sm:grid-cols-none sm:grid-rows-1 sm:gap-6 sm:p-6">
          {categories.map((category) => (
            <Link
              href={`/recipes/${category.toLowerCase()}`}
              key={category}
              className="text-black hover:underline"
            >
              <div className="flex gap-2">
                <div className="flex items-center">
                  <Image
                    src={`/icons/${category.toLowerCase()}-selected.png`}
                    alt={category}
                    width={17}
                    height={17}
                    className="w-fit"
                  />
                </div>
                <p>{category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
