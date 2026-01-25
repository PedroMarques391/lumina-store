<script setup lang="ts">
import ProductCard from '@/components/shared/ProductCard.vue';
import SectionTitle from '@/components/shared/SectionTitle.vue';
import type { Product } from '@/types/Products';
import { useRouter } from 'vue-router';

interface ProductsSectionProps {
  products: Product[]
  isLoading: boolean
}

const router = useRouter();

defineProps<ProductsSectionProps>()
</script>

<template>
  <section id="products" class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <SectionTitle title="Featured Products" subtitle="Check out our top-rated selection just for you." />

      <div v-if="isLoading" class="flex justify-center py-12">
        <span class="loading loading-spinner loading-lg text-primary"></span>
      </div>

      <div v-else
        class="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 justify-items-center justify-self-center">
        <ProductCard v-for="product in products" :key="product.id" :product="product" class="w-full max-w-sm" />
      </div>

      <div class="text-center mt-12">
        <button @click="router.push('/products')" class="btn btn-outline btn-primary px-8 hover:text-base-100">View All
          Products</button>
      </div>
    </div>
  </section>
</template>
