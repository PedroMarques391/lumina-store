import type { Category, Product } from '@/types/Products'

export function useProducts() {
  async function getProducts(): Promise<Product[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`)
      }
      const data = await response.json()
      const filtedProducts = await filterByCategory('jewelery', data)
      console.log('[getProducts]: ', filtedProducts)
      return filtedProducts
    } catch (error: unknown) {
      let errorMessage = 'Ocorreu um erro inesperado ao buscar produtos.'

      if (error instanceof Error) {
        errorMessage = error.message
      }
      console.error('[getProducts]: ', errorMessage)

      throw new Error(errorMessage)
    }
  }

  async function filterByCategory(category: Category, products: Product[]): Promise<Product[]> {
    const filtedProducts = products.filter((product: any) => product.category === category)
    return filtedProducts
  }

  return { getProducts, filterByCategory }
}
