import { RecipeCard } from '@/components/recipe-card/recipe-card'
import { fetchRecipes } from '@/sanity/queries'
import { Recipe } from '@/components/recipe-card/recipe-card'
import { mock } from 'node:test'

const mockRecipes = [
  {
    _id: '1',
    title: 'Tomato & Mustard Tarte',
    description:
      'Meet your new all-round dish for summer entertaining. When friends are coming over for a spontaneous aperitif, this puff pastry tart is my go-to recipe. It’s quick and easy and will be devoured by guests at any type of gathering.',
    slug: { current: 'recipe-1' },
    publishedAt: '2021-08-01',
    imageUrl: 'https://via.assets.so/img.jpg?w=150&h=150',
    imageAlt: 'Image alt',
  },
  {
    _id: '2',
    title: 'Eggs in Red Wine Sauce',
    description:
      'The classic Burgundian starter where poached eggs take center stage, bathed in a rich sauce bourguignonne (red wine sauce).',
    slug: { current: 'recipe-2' },
    publishedAt: '2021-08-02',
    imageUrl: 'https://via.assets.so/img.jpg?w=150&h=150',
    imageAlt: 'Image alt',
  },
  {
    _id: '3',
    title: 'Eggs à la Tripe',
    description:
      'A legendary creation by Fernand Point, this unique recipe features sliced hard-boiled eggs arranged over a luxurious mixture of heavy cream, Béchamel sauce, and Hollandaise sauce',
    slug: { current: 'recipe-3' },
    publishedAt: '2021-08-03',
    imageUrl: 'https://via.assets.so/img.jpg?w=150&h=150',
    imageAlt: 'Image alt',
  },
  {
    _id: '4',
    title: 'Beer & Mustard Pork Chops',
    description:
      'Baked pork chops elevated by the rich combination of beer and Dijon mustard.',
    slug: { current: 'recipe-4' },
    publishedAt: '2021-08-04',
    imageUrl: 'https://via.assets.so/img.jpg?w=150&h=150',
    imageAlt: 'Image alt',
  },
]

export const Recipes = async () => {
  // const recipes = await fetchRecipes()

  return (
    <div className="flex w-full flex-col justify-center gap-4">
      {mockRecipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  )
}
