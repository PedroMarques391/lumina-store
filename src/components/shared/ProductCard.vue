<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import type { Product } from '@/types/Products';
import { Star } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import FloatingActionButtons from './ui/FloatingActionButtons.vue';

const route = useRouter();
const store = useProductStore();

function goToProduct(id: number) {
  route.push(`/product/${id}`)
}

function addToCart(id: number) {
  console.log(id)
  store.incrementProducAmount(id)
}

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-sm flex flex-col rounded-xl group">
    <span class="badge absolute top-2 left-2">{{ product.category.slice(0, 1).toUpperCase() + product.category.slice(1)
    }}</span>
    <FloatingActionButtons :go-to-product="() => goToProduct(product.id)" :add-to-cart="() => addToCart(product.id)" />
    <figure class="px-6 pt-6 h-48 flex items-center justify-center bg-white rounded-t-xl">
      <img :src="product.image" :alt="product.title"
        class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
    </figure>
    <div class="card-body grow">
      <div class=" mb-2">
        <h2 class="card-title text-sm line-clamp-2 min-h-10" :title="product.title">
          {{ product.title }}
        </h2>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <div class="flex items-center gap-1">
          <Star :size="16" color="#e7ca0d" :stroke-width="1.25" absoluteStrokeWidth />
          <span class="font-bold text-sm">
            {{ product.rating.rate }}
          </span>

        </div>
        <span class="text-xs text-gray-400">({{ product.rating.count }})</span>
      </div>

      <div class="mt-auto flex items-center justify-between">
        <span class="text-xl font-bold text-primary">${{ product.price }}</span>
        <button @click="addToCart(product.id)" class="btn btn-primary btn-sm rounded-lg text-base-100">Add to
          Cart</button>
      </div>
    </div>
  </div>
</template>
