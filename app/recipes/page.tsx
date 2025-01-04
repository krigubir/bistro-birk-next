import { FilterRecipes } from '@/components/filter-recipes/filter-recipes'
import { Recipes } from '@/components/recipes/recipes'

const RecipesPage = () => {
  return (
    <div className="flex w-screen flex-col justify-center">
      <FilterRecipes />
      <Recipes />
    </div>
  )
}

export default RecipesPage