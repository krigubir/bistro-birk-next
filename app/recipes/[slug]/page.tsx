import { fetchRecipe } from '@/sanity/queries'
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
