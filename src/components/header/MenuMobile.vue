<script setup lang="ts">
import MenuItens from '@/components/shared/ui/MenuItens.vue';

</script>

<template>
  <div class="drawer-side">
    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4 gap-y-1">
      <MenuItens label="Home" link="/" />
      <MenuItens label="Products" link="/products" />
      <MenuItens label="Contact" link="/contacts" />
      <MenuItens label="About Us" link="/about-us" />
    </ul>
  </div>
</template>
