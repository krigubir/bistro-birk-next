'use client'

import { Recipe } from '@/types'
import Image from 'next/image'

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const handleClick = () => {
    console.log('Recipe clicked')
  }

  return (
    <div
      className="flex w-fit cursor-pointer flex-col bg-white shadow-card"
      onClick={handleClick}
    >
      <Image
        src={recipe.imageData.src}
        alt={recipe.imageData.alt}
        width={300}
        height={200}
      />
      <div className="flex flex-col items-center p-4">
        <h1>Tikka Masala</h1>
        <p>40-50 min</p>
      </div>
    </div>
  )
}
