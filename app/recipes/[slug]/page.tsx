import { fetchRecipe } from '@/sanity/queries'
import Link from 'next/link'

const RecipePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  // const recipe = await fetchRecipe({ slug })

  return (
    <div>
      <h1>Recipe Page</h1>
      <Link href="/recipes">Back to recipes</Link>
    </div>
  )
}

export default RecipePage
