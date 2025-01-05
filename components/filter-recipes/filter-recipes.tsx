'use client'

import { useState } from 'react'
import { DropdownButton } from '../shared/dropdown-button'
import { RecipeFilter } from '../../../studio-servert/sanity.types'
import { FilterButton } from '../shared/filter-button'

export const FilterRecipes = ({ filters }: { filters: RecipeFilter[] }) => {
  const [openFilter, setOpenFilter] = useState<string[] | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <>
      {filters && (
        <div className="bg-secondary flex gap-8 p-6 text-sm text-black">
          {filters.map((filter) => (
            <DropdownButton
              key={filter._id}
              text={filter.name || ''}
              isOpen={openFilter === filter.options}
              onClick={() =>
                setOpenFilter(
                  openFilter === filter.options
                    ? null
                    : (filter.options as string[])
                )
              }
            />
          ))}
        </div>
      )}

      {openFilter && (
        <div className="bg-secondary flex gap-4 p-6">
          {openFilter.map((option) => (
            <FilterButton
              key={option}
              text={option}
              isClicked={selectedFilters.includes(option)}
              onClick={() => {
                if (selectedFilters.includes(option)) {
                  setSelectedFilters(
                    selectedFilters.filter((filter) => filter !== option)
                  )
                  return
                }
                setSelectedFilters([...selectedFilters, option])
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}
