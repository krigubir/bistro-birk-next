'use client'

import Image from 'next/image'
import Link from 'next/link'
// import { Recipe } from '../../../studio-birk/sanity.types'

export type Recipe = {
  _id: string
  title: string
  description: string
  slug: { current: string }
  publishedAt: string
  imageUrl: string
  imageAlt: string
}

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <article className="mx-auto flex max-w-screen-md justify-center">
      <Link href={`/recipes/${recipe.slug?.current}`} className="w-full">
        <div className="flex justify-between gap-10">
          <div className="flex max-w-[60%] flex-col gap-1">
            <h2 className="font-ptSerif text-2xl">{recipe.title}</h2>
            <p className="font-afacad">{recipe.description}</p>
          </div>
          <div className="mt-2">
            <Image
              className="object-cover"
              src={recipe.imageUrl}
              alt={recipe.imageAlt}
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      </Link>
    </article>
  )
}
