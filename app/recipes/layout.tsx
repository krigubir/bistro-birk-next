import { CategoryNav } from '@/app/components/category-nav/category-nav'

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col">
      <CategoryNav />
      {children}
    </div>
  )
}
