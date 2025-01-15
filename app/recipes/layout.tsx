import { CategoryNav } from '@/app/components/category-nav/category-nav'
import DropdownMenu from '../components/category-nav-2/category-nav-2'

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col">
      {/* <CategoryNav /> */}
      {/* <DropdownMenu /> */}
      {children}
    </div>
  )
}
