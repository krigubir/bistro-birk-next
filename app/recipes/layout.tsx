import { CategoryFilter } from '@/components/category-filter/category-filter'

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <CategoryFilter
        categories={['Fugl', 'Storfe', 'Svin', 'Lam', 'Fisk', 'Vegetar']}
      />
      {children}
    </div>
  )
}
