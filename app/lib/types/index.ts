export type NavLinkModel = {
  title: string
  slug: string
  icon?: {
    base: string
    selected?: string
  }
}

export type RecipeModel = {
  _id: string
  title: string
  description: string
  slug: {
    current: string
  }
  publishedAt: string
  imageUrl: string
  imageAlt: string
}
