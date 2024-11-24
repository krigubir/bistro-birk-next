export type Recipe = {
  title: string
  description: string
  ingredients: string[]
  instructions: string[]
  imageData: {
    src: string
    alt: string
  }
}
