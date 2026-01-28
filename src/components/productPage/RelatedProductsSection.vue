<script setup lang="ts">
import type { Product } from '@/types/Products';
import ProductCard from '../shared/ProductCard.vue';


defineProps<{
  product: Product
  relatedProducts: Product[]
}>()

</script>

<template>
  <div v-if="relatedProducts.length > 0">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-2">You May Also Like</h2>
      <p class="text-base-content/70">Similar products in {{ product.category }}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-self-center">
      <ProductCard v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" :product="relatedProduct" />
    </div>
  </div>
</template>
