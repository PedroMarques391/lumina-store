<script setup lang="ts">
import SectionTitle from '@/components/shared/SectionTitle.vue';
import { brandsData } from '@/utils/data/brands.data';
import { getBrandSvg } from '@/utils/getBrandSvg';


</script>

<template>
  <section class="w-full py-16 bg-base-200">
    <SectionTitle title="Partner Brands" subtitle="Trusted brands we work with" />

    <div class="w-full max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
        <div v-for="brand in brandsData" :key="brand.id"
          class="flex flex-col items-center justify-center gap-2 p-6 bg-base-100 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          :title="brand.name">
          <div class="w-12 h-12 text-base-content/40 group-hover:text-primary transition-colors duration-300"
            v-html="getBrandSvg(brand.icon)" />
          <span
            class="text-xs font-semibold text-base-content/60 group-hover:text-base-content transition-colors duration-300">
            {{ brand.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
