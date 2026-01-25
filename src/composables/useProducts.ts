import { fetchProducts } from '@/services/productService'
import { useQuery } from '@tanstack/vue-query'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}
