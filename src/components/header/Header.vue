<script setup lang="ts">
import Logo from '../shared/Logo.vue';
import DrawerTrigger from './DrawerTrigger.vue';
import MenuDesktop from './MenuDesktop.vue';
import MenuMobile from './MenuMobile.vue';

</script>

<template>
  <header class="w-full h-20 border-b border-base-300 flex items-center justify-center sticky top-0 z-50 bg-base-100">
    <nav class="h-full w-full max-w-5xl flex items-center justify-between px-4">
      <Logo />
      <MenuDesktop />
      <DrawerTrigger>
        <MenuMobile />
      </DrawerTrigger>
    </nav>
  </header>
</template>
