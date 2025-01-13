import { useState, useEffect, use } from 'react'
import { useIsMobile } from './is-mobile'

type NavScrollAnimation = {
  isFilterOpen: boolean
  callback: (isFilterOpen: boolean) => void
}

export const useNavScrollAnimation = ({
  isFilterOpen,
  callback,
}: NavScrollAnimation) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const isMobile = useIsMobile()

  // Handle scroll direction to toggle visibility and close filter on mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false) // Scrolling down
        if (isMobile && isFilterOpen) {
          callback(false) // Close filter on mobile when scrolling down
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

  return { isVisible, isMobile }
}
