export interface Hotel {
  comment: string
  contents: string
  id: string
  image: string[]
  location: { directions: string; pointGeolocation: { x: number; y: number } }
  nameImageUrl: string
  name: string
  price: number
  starRating: number
}
