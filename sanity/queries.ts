import { groq, SanityDocument } from 'next-sanity'
import { client } from './client'
import next from 'next'

// CONSTANTS
const options = { next: { revalidate: 30 } }

// RECIPES_QUERY
const RECIPES_QUERY = groq`*[
  _type == "recipe"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image {asset->{url}, alt}}`

export const fetchRecipes = async () => {
  return await client.fetch<SanityDocument[]>(RECIPES_QUERY, {}, options)
}

// RECIPE_QUERY
const RECIPE_QUERY = `*[_type == "recipe" && slug.current == $slug][0]`
export const fetchRecipe = async ({ slug }: { slug: string }) => {
  return await client.fetch<SanityDocument>(RECIPE_QUERY, { slug }, options)
}
