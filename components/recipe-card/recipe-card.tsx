'use client'

import { Recipe } from '@/types'
import Image from 'next/image'
import { HeartIcon } from '@navikt/aksel-icons'
import Link from 'next/link'

export const RecipeCard = ({ recipe }: { recipe: any }) => {
  const handleClick = () => {
    console.log('Recipe clicked')
  }

  return (
    <>
      {recipe && (
        <Link
          href={`/recipes/${recipe.slug.current}`}
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
            src={recipe.image.asset.url}
            alt={recipe.image.alt}
            width={300}
            height={200}
            priority
          />
          <div className="absolute bottom-0 flex h-1/2 w-full flex-col justify-end bg-gradient-to-b from-transparent to-darkPrimary px-6 pb-4 text-center leading-tight text-white/80">
            <p>{recipe.title}</p>
          </div>
        </Link>
      )}
    </>
  )
}
