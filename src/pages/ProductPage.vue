<script setup lang="ts">
import ProductDetailsSkeleton from '@/components/productPage/ProductDetailsSkeleton.vue';
import RelatedProductsSection from '@/components/productPage/RelatedProductsSection.vue';
import TabList from '@/components/productPage/TabList.vue';
import Breadcrumbs from '@/components/shared/ui/Breadcrumbs.vue';
import { useProducts } from '@/composables/useProducts';
import { useProductStore } from '@/stores/product';
import { Heart, Minus, Plus, RotateCcw, Share2, Shield, ShoppingCart, Star, Truck } from 'lucide-vue-next';
import { computed, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { data: products, isLoading } = useProducts();
const store = useProductStore();
const { addProduct } = store;

const isFavorite = ref(false);
const toClipboard = ref(false);
const quantity = ref(1);

const product = computed(() => {
  if (!products.value) return undefined;
  return products.value.find(item => item.id.toString() === route.params.id as string);
});

const relatedProducts = computed(() => {
  if (!products.value || !product.value) return [];
  return products.value
    .filter(p => p.category === product.value?.category && p.id !== product.value?.id)
    .slice(0, 3);
});

watchEffect(() => {
  if (product.value) {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    isFavorite.value = favorites.includes(product.value.id);
  }
});

const incrementQuantity = () => quantity.value++;
const decrementQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const addToCart = () => {
  if (!product.value) return;
  addProduct(product.value, product.value.id, quantity.value);
};

const addToFavorites = () => {
  if (!product.value) return;
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  const productId = product.value.id;

  if (favorites.includes(productId)) {
    const updatedFavorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    isFavorite.value = false;
    return;
  }
  const updatedFavorites = [...favorites, productId];
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  isFavorite.value = true;

};


const shareProduct = () => {
  const url = window.location.href;
  try {
    navigator.clipboard.writeText(url)
    toClipboard.value = true
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      toClipboard.value = false
    }, 2000)
  }

};
</script>

<template>
  <ProductDetailsSkeleton :is-loading="isLoading" />
  <div v-if="toClipboard" class="toast toast-top toast-end z-50">
    <div class="alert alert-success">
      <span>Url copied to clipboard.</span>
    </div>
  </div>

  <div v-if="!product" class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Product Not Found</h1>
        <p class="py-6">The product you're looking for doesn't exist.</p>
        <button @click="router.push('/products')" class="btn btn-primary">Browse Products</button>
      </div>
    </div>
  </div>

  <div v-else class="bg-base-100">
    <div class="container mx-auto px-4 py-4">
      <Breadcrumbs>
        <li><a @click="router.push('/')" class="cursor-pointer hover:text-primary">Home</a></li>
        <li><a @click="router.push('/products')" class="cursor-pointer hover:text-primary">Products</a></li>
        <li>{{ product.title }}</li>
      </Breadcrumbs>

    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="flex flex-col gap-4">
          <div class="card  shadow-xs bg-base-200">
            <figure class="px-10 pt-10 pb-10 min-h-100 flex items-center justify-center">
              <img :src="product.image" :alt="product.title"
                class="max-h-100 object-contain hover:scale-105 transition-transform duration-300" />
            </figure>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="card bg-base-200 shadow-sm p-4 text-center">
              <Truck :size="24" class="mx-auto mb-2 text-primary" />
              <p class="text-xs font-semibold">Free Shipping</p>
            </div>
            <div class="card bg-base-200 shadow-sm p-4 text-center">
              <Shield :size="24" class="mx-auto mb-2 text-primary" />
              <p class="text-xs font-semibold">Secure Payment</p>
            </div>
            <div class="card bg-base-200 shadow-sm p-4 text-center">
              <RotateCcw :size="24" class="mx-auto mb-2 text-primary" />
              <p class="text-xs font-semibold">Easy Returns</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div>
            <span class="badge badge-primary badge-lg">
              {{ product.category.charAt(0).toUpperCase() + product.category.slice(1) }}
            </span>
          </div>

          <h1 class="text-4xl font-bold tracking-tight">{{ product.title }}</h1>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <div class="flex">
                <Star v-for="i in 5" :key="i" :size="20"
                  :fill="i <= Math.round(product.rating.rate) ? '#e7ca0d' : 'none'"
                  :color="i <= Math.round(product.rating.rate) ? '#e7ca0d' : '#d1d5db'" :stroke-width="1.5" />
              </div>
              <span class="font-bold text-lg">{{ product.rating.rate }}</span>
            </div>
            <div class="divider divider-horizontal m-0"></div>
            <span class="text-sm text-base-content/70">{{ product.rating.count }} reviews</span>
          </div>

          <div class="flex items-baseline gap-3">
            <span class="text-5xl font-bold text-primary">${{ product.price }}</span>
            <span class="text-lg text-base-content/50 line-through">${{ (product.price * 1.2).toFixed(2) }}</span>
            <span class="badge badge-success badge-lg">Save 20%</span>
          </div>

          <p class="text-base-content/80 leading-relaxed">
            {{ product.description }}
          </p>

          <div class="flex items-center gap-4">
            <span class="font-semibold">Quantity:</span>
            <div class="join">
              <button @click="decrementQuantity" class="btn btn-sm join-item">
                <Minus :size="16" />
              </button>
              <input type="text" :value="quantity" readonly class="input input-sm join-item w-16 text-center" />
              <button @click="incrementQuantity" class="btn btn-sm join-item">
                <Plus :size="16" />
              </button>
            </div>
            <span class="text-sm text-success font-semibold">In Stock</span>
          </div>

          <div class="flex gap-4">
            <button @click="addToCart" class="btn btn-primary btn-lg flex-1 gap-2">
              <ShoppingCart :size="20" />
              Add to Cart
            </button>
            <button @click="addToFavorites"
              :class="isFavorite ? 'btn btn-lg bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600' : 'btn btn-outline btn-lg'">
              <Heart :size="20" :fill="isFavorite ? '#ffffff' : 'none'"
                :color="isFavorite ? '#ffffff' : 'currentColor'" />
            </button>
            <button @click="shareProduct" class="btn btn-outline btn-lg">
              <Share2 :size="20" />
            </button>
          </div>

          <div class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Order within <strong>2 hours 30 minutes</strong> for delivery by tomorrow!</span>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <TabList :product="product" />
      </div>
      <div class="divider"></div>
      <RelatedProductsSection :product="product" :related-products="relatedProducts" />
    </div>
  </div>
</template>
