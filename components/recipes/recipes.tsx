import { RecipeCard } from '@/components/recipe-card/recipe-card'

export const Recipes = () => {
  const recipes = [
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: 'https://via.placeholder.com/300',
        alt: 'Placeholder image',
      },
    },
  ]
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  )
}
