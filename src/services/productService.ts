import type { Product } from '@/types/Products'

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} - ${response.statusText}`)
  }
  const data = await response.json()
  const filtedProducts: Product[] = data.filter(
    (product: Product) => product.category !== 'electronics',
  )

  return filtedProducts
}
