import { RecipeCard } from '@/components/recipe-card/recipe-card'
import { fetchRecipes } from '@/sanity/queries'

export const Recipes = async () => {
  const recipes = await fetchRecipes()

  return (
    <div className="mx-auto my-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  )
}
