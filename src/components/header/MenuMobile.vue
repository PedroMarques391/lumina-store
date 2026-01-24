<script setup lang="ts">
import MenuItens from '@/components/ui/MenuItens.vue';

</script>

<template>
  <div class="drawer-side">
    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4 gap-y-1">
      <MenuItens label="Home" link="/" />
      <MenuItens label="Produtos" link="/products" />
      <MenuItens label="Contato" link="/contacts" />
      <MenuItens label="Sobre Nós" link="/about-us" />
    </ul>
  </div>
</template>
