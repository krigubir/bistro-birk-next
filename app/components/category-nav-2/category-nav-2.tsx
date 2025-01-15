'use client'

import { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Toggle body overflow to prevent background scroll
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      document.body.style.overflow = 'auto' // Restore background scroll
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Define the animation for the dropdown menu
  const menuAnimation = useSpring({
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 20 },
  })

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Dropdown
      </button>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
          {/* Animated Dropdown Menu */}
          <animated.div
            ref={menuRef}
            style={menuAnimation}
            className="absolute right-0 z-50 mt-2 w-48 origin-top rounded-md bg-white shadow-lg"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Menu Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Menu Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Menu Item 3
            </a>
          </animated.div>
        </>
      )}
    </div>
  )
}

export default DropdownMenu
