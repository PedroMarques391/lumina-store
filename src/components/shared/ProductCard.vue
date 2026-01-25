<script setup lang="ts">
import type { Product } from '@/types/Products';

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-sm flex flex-col">
    <figure class="px-6 pt-6 h-48 flex items-center justify-center bg-white">
      <img :src="product.image" :alt="product.title"
        class="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" />
    </figure>
    <div class="card-body grow">
      <div class="flex items-start justify-between mb-2">
        <h3 class="card-title text-sm line-clamp-2 min-h-10" :title="product.title">
          {{ product.title }}
        </h3>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <div class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-5 h-5 text-yellow-400">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd" />
          </svg>

          <span class="font-bold text-sm">
            {{ product.rating.rate }}
          </span>

        </div>
        <span class="text-xs text-gray-400">({{ product.rating.count }})</span>
      </div>

      <div class="mt-auto flex items-center justify-between">
        <span class="text-xl font-bold text-primary">${{ product.price }}</span>
        <button class="btn btn-primary btn-sm rounded-lg text-base-100">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
