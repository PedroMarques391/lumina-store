<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { Handbag } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

const store = useProductStore();
const { itemAmount } = storeToRefs(store);

const closeMobileDrawer = () => {
  const drawerCheckbox = document.getElementById('my-drawer-1') as HTMLInputElement;

  if (drawerCheckbox && window.innerWidth < 768) {
    console.log('fechou')
    drawerCheckbox.checked = false;
  }
}

</script>

<template>
  <div class="drawer-content">
    <label for="cart-drawer" class="indicator cursor-pointer" @click="closeMobileDrawer">
      <span class="indicator-item badge badge-sm badge-secondary" v-if="itemAmount > 0">{{ itemAmount }}</span>
      <Handbag :size="30" />
    </label>
  </div>
</template>
