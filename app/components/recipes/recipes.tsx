import { mockRecipes } from '@/app/lib/mock-data'
import { RecipeCard } from '../recipe-card/recipe-card'

export const Recipes = async () => {
  const recipes = mockRecipes

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  )
}
