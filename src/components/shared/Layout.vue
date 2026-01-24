<script setup lang="ts">
import Footer from '../footer/Footer.vue';
import Header from '../header/Header.vue';


</script>

<template>
  <main class="min-h-screen flex flex-col w-full items-center">
    <Header />
    <section class="container">
      <RouterView />
    </section>
    <Footer />
  </main>
</template>
