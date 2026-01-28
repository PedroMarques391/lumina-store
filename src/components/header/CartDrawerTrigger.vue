<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { Handbag } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

const store = useProductStore();
const { itemAmount } = storeToRefs(store);
</script>

<template>
  <div class="drawer-content">
    <label for="cart-drawer" class="indicator cursor-pointer">
      <span class="indicator-item badge badge-sm badge-secondary" v-if="itemAmount > 0">{{ itemAmount }}</span>
      <Handbag :size="30" />
    </label>
  </div>
</template>
