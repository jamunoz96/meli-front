export interface IProduct {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
  state_name: string
}

export interface IProductDetail extends Omit<IProduct, "state_name"> {
  sold_quantity: number
  description: string
  categories: Array<string>
}
