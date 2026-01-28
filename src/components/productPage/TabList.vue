
<script setup lang="ts">
import type { Product } from '@/types/Products';
import { ref } from 'vue';

const props = defineProps<{ product: Product }>();
const activeTab = ref('description');
</script>


<template>
  <div role="tablist" class="tabs tabs-lifted tabs-lg">
          <input type="radio" name="product_tabs" role="tab" class="tab" aria-label="Description"
            :checked="activeTab === 'description'" @click="activeTab = 'description'" />
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-8">
            <h3 class="text-2xl font-bold mb-4">Product Description</h3>
            <p class="text-base-content/80 leading-relaxed">{{ product.description }}</p>
            <div class="mt-6 space-y-2">
              <p><strong>Category:</strong> {{ product.category }}</p>
              <p><strong>Product ID:</strong> #{{ product.id }}</p>
            </div>
          </div>

          <input type="radio" name="product_tabs" role="tab" class="tab" aria-label="Specifications"
            :checked="activeTab === 'specifications'" @click="activeTab = 'specifications'" />
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-8">
            <h3 class="text-2xl font-bold mb-4">Specifications</h3>
            <div class="overflow-x-auto">
              <table class="table">
                <tbody>
                  <tr>
                    <th>Category</th>
                    <td>{{ product.category }}</td>
                  </tr>
                  <tr>
                    <th>Rating</th>
                    <td>{{ product.rating.rate }} / 5.0</td>
                  </tr>
                  <tr>
                    <th>Reviews</th>
                    <td>{{ product.rating.count }} customer reviews</td>
                  </tr>
                  <tr>
                    <th>Availability</th>
                    <td><span class="badge badge-success">In Stock</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <input type="radio" name="product_tabs" role="tab" class="tab" aria-label="Reviews"
            :checked="activeTab === 'reviews'" @click="activeTab = 'reviews'" />
          <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-8">
            <h3 class="text-2xl font-bold mb-4">Customer Reviews</h3>
            <div class="stats stats-vertical lg:stats-horizontal shadow w-full mb-8">
              <div class="stat">
                <div class="stat-title">Average Rating</div>
                <div class="stat-value text-primary">{{ product.rating.rate }}</div>
                <div class="stat-desc">Out of 5.0</div>
              </div>
              <div class="stat">
                <div class="stat-title">Total Reviews</div>
                <div class="stat-value">{{ product.rating.count }}</div>
                <div class="stat-desc">Verified purchases</div>
              </div>
              <div class="stat">
                <div class="stat-title">Recommendation</div>
                <div class="stat-value">{{ Math.round((product.rating.rate / 5) * 100) }}%</div>
                <div class="stat-desc">Would buy again</div>
              </div>
            </div>
            <p class="text-base-content/60">Reviews will be displayed here.</p>
          </div>
        </div>
</template>
