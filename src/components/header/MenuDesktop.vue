<script setup lang="ts">
import MenuItens from '@/components/shared/ui/MenuItens.vue';

</script>

<template>
  <ul class="hidden md:flex flex-1 justify-end gap-6">
    <MenuItens label="Home" link="/" />
    <MenuItens label="Produtos" link="/products" />
    <MenuItens label="Contato" link="/contacts" />
    <MenuItens label="Sobre Nós" link="/about-us" />
  </ul>
</template>
