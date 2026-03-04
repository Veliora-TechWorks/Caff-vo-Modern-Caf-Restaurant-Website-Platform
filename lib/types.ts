export interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  isVeg: boolean
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

export interface Offer {
  id: string
  title: string
  description: string
  validUntil: string
  discount: string
}

export interface Testimonial {
  id: number
  name: string
  rating: number
  text: string
  date: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}
