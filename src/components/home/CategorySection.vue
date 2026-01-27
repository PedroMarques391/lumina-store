<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue';
import type { Category } from '@/types/Products';

const categories: { name: string; value: Category; image: string }[] = [
  {
    name: 'Jewelery',
    value: 'jewelery',
    image: '/images/Jewelery.jpeg',
  },
  {
    name: "Men's clothing",
    value: "men's clothing",
    image: '/images/Mens-Clothing.jpeg',
  },
  {
    name: "Women's clothing",
    value: "women's clothing",
    image: '/images/Womens-Clothing.jpeg',
  },
]
</script>

<template>
  <section class="py-16 bg-base-300">
    <div class="container mx-auto px-4">
      <SectionTitle title="Browse by Category" subtitle="Find exactly what you are looking for." />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RouterLink :to="{ path: '/products', query: { category: category.value } }" v-for="category in categories"
          :key="category.value" class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-64">
          <img :src="category.image" :alt="category.name"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div
            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <h3
              class="text-base md:text0lg lg:text-2xl font-bold text-white uppercase tracking-wider border-b-2 border-transparent group-hover:border-white transition-all pb-1">
              {{ category.name }}
            </h3>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
