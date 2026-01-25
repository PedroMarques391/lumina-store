<script setup lang="ts">
import MenuItens from '@/components/shared/ui/MenuItens.vue';

</script>

<template>
  <ul class="hidden md:flex flex-1 justify-end gap-6">
    <MenuItens label="Home" link="/" />
    <MenuItens label="Products" link="/products" />
    <MenuItens label="Contact" link="/contacts" />
    <MenuItens label="About Us" link="/about-us" />
  </ul>
</template>
