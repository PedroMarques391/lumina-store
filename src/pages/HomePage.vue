<script setup lang="ts">
import CategorySection from '@/components/home/CategorySection.vue';
import Hero from '@/components/home/Hero.vue';
import ProductsSection from '@/components/home/ProductsSection.vue';
import { useProducts } from '@/composables/useProducts';
import { computed } from 'vue';

const { data: products, isLoading } = useProducts();

const featuredProducts = computed(() => {
  if (!products.value) return [];
  return [...products.value]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 6);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Hero />
    <CategorySection />
    <ProductsSection :products="featuredProducts" :is-loading="isLoading" />
  </div>
</template>
