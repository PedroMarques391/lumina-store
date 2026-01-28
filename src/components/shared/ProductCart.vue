<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { storeToRefs } from 'pinia';


const store = useProductStore();
const { itemAmount } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <div class="drawer drawer-end z-50 w-fit">
      <input id="cart-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-side">
        <label for="cart-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <aside class="menu bg-base-200 min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <h2 class="text-xl font-bold mb-4">Shopping Cart</h2>
          <p v-if="itemAmount === 0">Your cart is empty.</p>
          <!-- Add cart items list logic here later -->
        </aside>
      </div>
    </div>
  </Teleport>
</template>
