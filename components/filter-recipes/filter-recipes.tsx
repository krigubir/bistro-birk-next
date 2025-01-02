'use client'

import { CaretRightIcon, CaretDownFillIcon } from '@navikt/aksel-icons'
import { useState } from 'react'

export const FilterRecipes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])
  const [filterOptions, setFilterOptions] = useState<{
    [key: string]: string[] // Add index signature
  }>({
    cuisine: ['Norsk', 'Italiensk', 'Indisk', 'Mexicansk'],
    protein: ['Kjøtt', 'Fisk', 'Vegetar'],
    carbohydrate: ['Pasta', 'Ris', 'Potet', 'Brød'],
    time: ['Under 30 min', '30-60 min', 'Over 60 min'],
  })

  const handleFilter = (filter: string) => {
    setIsOpen(!isOpen)
    const newFilterOptions = filterOptions[filter]
    setFilter(newFilterOptions)
  }

  return (
    <>
      <div className="bg-primary flex gap-8 p-6 text-sm text-white">
        <button
          onClick={() => handleFilter('cuisine')}
          className="flex items-center justify-between gap-2 rounded-full border border-white px-2 py-1"
        >
          Cuisine
          {isOpen ? <CaretDownFillIcon /> : <CaretRightIcon />}
        </button>
        <button
          onClick={() => handleFilter('protein')}
          className="flex items-center justify-between gap-2 rounded-full border border-white px-2 py-1"
        >
          Protein
          {isOpen ? <CaretDownFillIcon /> : <CaretRightIcon />}
        </button>
        <button
          onClick={() => handleFilter('carbohydrate')}
          className="flex items-center justify-between gap-2 rounded-full border border-white px-2 py-1"
        >
          Karbohydrat
          {isOpen ? <CaretDownFillIcon /> : <CaretRightIcon />}
        </button>
        <button
          onClick={() => handleFilter('time')}
          className="flex items-center justify-between gap-2 rounded-full border border-white px-2 py-1"
        >
          Tid
          {isOpen ? <CaretDownFillIcon /> : <CaretRightIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-primary/85 flex gap-4 p-6">
          {filter.map((option) => (
            <button
              key={option}
              className="border-1 focus:text-darkPrimary focus:border-darkPrimary rounded-full border border-white px-4 py-1 text-sm text-white focus:bg-white"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
