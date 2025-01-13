import { Recipes } from '@/components/recipes/recipes'
import { fetchFilters } from '@/sanity/queries'

const RecipesPage = async () => {
  const filters = await fetchFilters()

  return (
    <div className="flex w-screen">
      <Recipes />
    </div>
  )
}

export default RecipesPage
