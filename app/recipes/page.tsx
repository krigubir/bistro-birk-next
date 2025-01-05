import { FilterRecipes } from '@/components/filter-recipes/filter-recipes'
import { Recipes } from '@/components/recipes/recipes'
import { fetchFilters } from '@/sanity/queries'

const RecipesPage = async () => {
  const filters = await fetchFilters()

  return (
    <div className="flex w-screen flex-col justify-center">
      <FilterRecipes filters={filters} />
      <Recipes />
    </div>
  )
}

export default RecipesPage
