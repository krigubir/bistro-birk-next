import { RecipeCard } from '@/components/recipe-card/recipe-card'

export const Recipes = () => {
  const recipes = [
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image.png',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image1.png',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image2.png',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image3.png',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image4.png',
        alt: 'Placeholder image',
      },
    },
    {
      title: 'Tikka Masala',
      description: 'A delicious curry dish',
      ingredients: ['Chicken', 'Tomato Sauce', 'Rice'],
      instructions: ['Cook', 'Serve'],
      imageData: {
        src: '/image5.png',
        alt: 'Placeholder image',
      },
    },
  ]
  return (
    <div className="mx-auto mb-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  )
}
