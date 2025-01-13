import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

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

  return isMobile
}
