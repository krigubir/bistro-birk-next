import { fetchFilters } from '@/sanity/queries'
import { Recipes } from '../components/recipes/recipes'

const RecipesPage = async () => {
  const filters = await fetchFilters()

  return (
    <div className="flex w-screen">
      <Recipes />
    </div>
  )
}

export default RecipesPage
