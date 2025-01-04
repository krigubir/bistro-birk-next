import { client } from '@/sanity/client'
import { fetchRecipe } from '@/sanity/queries'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

const RecipePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const recipe = await fetchRecipe({ slug })

  return (
    <>
      {recipe && (
        <Link href="/recipes" className="hover:underline">
          ← tilbake til oppskrifter
        </Link>
      )}
    </>
  )
}

export default RecipePage
