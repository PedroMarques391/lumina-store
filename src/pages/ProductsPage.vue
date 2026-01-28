<script setup lang="ts">
import ProductCard from '@/components/shared/ProductCard.vue';
import SectionTitle from '@/components/shared/SectionTitle.vue';
import Breadcrumbs from '@/components/shared/ui/Breadcrumbs.vue';
import ProductCardSkeleton from '@/components/shared/ui/ProductCardSkeleton.vue';
import { useProducts } from '@/composables/useProducts';
import router from '@/router';
import type { Category } from '@/types/Products';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: products, isLoading } = useProducts();

type Categories = Category | 'all';

const categoryFilter = computed<Categories>({
  get() {
    return (route.query.category as Categories) || 'all'
  },
  set(category) {
    const query = { ...route.query }

    if (category === 'all') {
      delete query.category
      return router.replace({ query })
    }
    query.category = category

    router.replace({ query })
  }
})

const filteredProducts = computed(() => {
  if (!products.value) return [];
  if (categoryFilter.value === 'all') return products.value;
  return products.value.filter(product => product.category === categoryFilter.value);
});

const productCount = computed(() => filteredProducts.value.length);

const categories: { label: string; value: Categories }[] = [
  { label: 'All Products', value: 'all' },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: 'Jewelery', value: 'jewelery' },
  { label: "Men's Clothing", value: "men's clothing" },
];

const updateCategoryFilter = (category: Categories) => {
  categoryFilter.value = category
}

</script>

<template>

  <section class="container mx-auto my-10 px-4">
    <Breadcrumbs>
      <li><a @click="router.push('/')" class="cursor-pointer hover:text-primary">Home</a></li>
      <li><a @click="router.push('/products')" class="cursor-pointer hover:text-primary">Products</a></li>
      <li>All Products</li>
    </Breadcrumbs>
    <SectionTitle title="Products" subtitle="Check out our main selection made exclusively for you!" />

    <div class="flex justify-center mb-8">
      <div role="tablist" class="tabs tabs-boxed bg-base-200 p-2 rounded-xl shadow-sm">
        <button v-for="cat in categories" :key="cat.value" role="tab"
          :class="['tab transition-all duration-200', categoryFilter === cat.value && 'tab-active']"
          @click="updateCategoryFilter(cat.value)">
          {{ cat.label }}
        </button>
      </div>
    </div>

    <div class="flex justify-center mb-4">
      <div class="badge badge-lg badge-outline">
        <span v-if="isLoading">Loading...</span>
        <span v-if="!isLoading">{{ productCount }} {{ productCount === 1 ? 'Product' : 'Products' }}</span>
      </div>
    </div>

    <div class="divider"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
      <ProductCardSkeleton :is-loading="isLoading" v-for="i in 6" :key="i" />
      <ProductCard v-if="!isLoading" v-for="product in filteredProducts" :key="product.id" :product="product"
        class="w-full max-w-sm justify-self-center" />
    </div>
  </section>
</template>
