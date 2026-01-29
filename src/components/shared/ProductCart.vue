<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { Minus, Plus, Trash2, X } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

const store = useProductStore();
const { itemAmount, productCart, totalPrice } = storeToRefs(store);
const { incrementProducAmount, decrementProductAmount, removeProduct, clearCart } = store

</script>

<template>
  <div class="drawer drawer-end z-50 w-fit">
    <input id="cart-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <label for="cart-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class="bg-base-200 min-h-full w-96 p-4 flex flex-col">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold">Cart ({{ itemAmount }})</h2>
          <label for="cart-drawer" class="btn btn-sm btn-ghost btn-square">
            <X :size="20" />
          </label>
        </div>

        <div v-if="productCart.length === 0" class="flex-1 flex flex-col items-center justify-center opacity-50">
          <p>Your cart is empty</p>
        </div>

        <div class="flex-1 overflow-y-auto space-y-4 ">
          <div v-for="product in productCart" :key="product.id"
            class="flex gap-4 p-3 bg-base-100 rounded-box shadow-sm relative group">
            <button @click="removeProduct(product.id)"
              class="btn btn-xs btn-ghost btn-square absolute top-1 right-1 text-error opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 :size="14" />
            </button>

            <figure class="w-20 h-20 bg-white rounded-lg shrink-0 p-2 flex items-center justify-center">
              <img :src="product.image" :alt="product.title" class="max-h-full max-w-full object-contain" />
            </figure>

            <div class="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 class="font-bold text-sm line-clamp-1" :title="product.title">{{ product.title }}</h3>
                <p class="text-xs opacity-60 capitalize">{{ product.category }}</p>
                <p class="text-[10px] text-gray-400 mt-1">Estoque: {{ product.rating.count }}</p>
              </div>

              <div class="flex items-center justify-between mt-2">
                <p class="font-bold text-primary">${{ (product.price * product.amount).toFixed(2) }}</p>

                <div class="flex items-center bg-base-200 rounded-lg h-7">
                  <button @click="decrementProductAmount(product.id)"
                    class="btn btn-ghost btn-xs btn-square h-full min-h-0 px-1">
                    <Minus :size="12" />
                  </button>
                  <span class="text-xs font-bold px-2">{{ product.amount }}</span>
                  <button @click="incrementProducAmount(product.id)"
                    class="btn btn-ghost btn-xs btn-square h-full min-h-0 px-1">
                    <Plus :size="12" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="productCart.length > 0" class="mt-4 pt-4 border-t border-base-300">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold">Total</span>
            <span class="text-2xl font-bold text-primary">${{ totalPrice.toFixed(2) }}</span>
          </div>

          <button class="btn btn-primary w-full text-white mb-2">Go to checkout</button>
          <button @click="clearCart" class="btn btn-ghost btn-xs w-full text-error">Clear cart</button>
        </div>
      </aside>
    </div>
  </div>
</template>
