<script setup lang="ts">
import DrawerTrigger from '@/components/header/DrawerTrigger.vue';
import MenuDesktop from '@/components/header/MenuDesktop.vue';
import MenuMobile from '@/components/header/MenuMobile.vue';

</script>

<template>
  <main class="min-h-screen flex flex-col w-full items-center">
    <header class="w-full h-20 border-b border-base-300 flex items-center justify-center">
      <nav class="h-full w-full max-w-5xl flex items-center justify-between  px-4">
        <div class="w-fit">Logo</div>
        <MenuDesktop />
        <DrawerTrigger>
          <MenuMobile />
        </DrawerTrigger>
      </nav>
    </header>
    <section class="container">
      <RouterView />
    </section>
    <footer>rodape</footer>
  </main>
</template>
