'use client'

import { Recipe } from '@/types'
import Image from 'next/image'
import { HeartIcon } from '@navikt/aksel-icons'

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const handleClick = () => {
    console.log('Recipe clicked')
  }

  return (
    <div
      className="relative flex w-fit cursor-pointer flex-col overflow-hidden rounded-md shadow-card"
      onClick={handleClick}
    >
      <HeartIcon
        title="a11y-title"
        fontSize="1.5rem"
        className="absolute right-2 top-2"
        color="white"
      />
      <Image
        className="object-cover"
        src={recipe.imageData.src}
        alt={recipe.imageData.alt}
        width={300}
        height={200}
      />
      <div className="to-darkPrimary absolute bottom-0 flex h-1/2 w-full flex-col justify-end bg-gradient-to-b from-transparent px-6 pb-4 text-center leading-tight text-white/80">
        <p>{recipe.description}</p>
      </div>
    </div>
  )
}
