<script setup lang="ts">
import BrandsSection from '@/components/home/BrandsSection.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import Hero from '@/components/home/Hero.vue';
import ProductsSection from '@/components/home/ProductsSection.vue';
import SectionTitle from '@/components/shared/SectionTitle.vue';
import { useProducts } from '@/composables/useProducts';
import { faqData } from '@/utils/data/faq.data';
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

    <BrandsSection />

    <div class="divider"></div>

    <SectionTitle title="F. A. Q."" subtitle=" Frequently Asked Questions" />

    <div class="w-full max-w-5xl mx-auto mb-10 space-y-2">
      <div v-for="(faq, index) in faqData" :tabindex="index"
        class="collapse collapse-arrow bg-base-100 border-base-300 border">
        <div class="collapse-title font-semibold">{{ faq.question }}</div>
        <div class="collapse-content text-sm">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
