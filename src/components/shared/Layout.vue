<script setup lang="ts">
import Header from '../header/Header.vue';


</script>

<template>
  <main class="min-h-screen flex flex-col w-full items-center">
    <Header />
    <section class="container">
      <RouterView />
    </section>
    <footer>rodape</footer>
  </main>
</template>
