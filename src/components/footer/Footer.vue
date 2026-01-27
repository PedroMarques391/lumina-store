<script setup lang="ts">
import { Instagram, X, Youtube } from 'lucide-vue-next';
import MenuItens from '../shared/ui/MenuItens.vue';

const year = new Date().getFullYear();
</script>
<template>
  <footer class="footer footer-horizontal footer-center bg-neutral text-neutral-content rounded p-10">
    <ul class="grid grid-flow-col gap-4">
      <MenuItens label="Home" link="/" />
      <MenuItens label="Products" link="/products" />
      <MenuItens label="Contact" link="/contacts" />
      <MenuItens label="About Us" link="/about-us" />
    </ul>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="#" aria-label="X (Twitter)" class="hover:text-sky-500 transition-colors duration-300">
          <X :size="28" />
        </a>

        <a href="#" aria-label="YouTube" class="hover:text-red-600 transition-colors duration-300">
          <Youtube :size="28" />
        </a>

        <a href="#" aria-label="Instagram" class="hover:text-fuchsia-500 transition-colors duration-300">
          <Instagram :size="28" />
        </a>
      </div>
    </nav>

    <aside>
      <img src="/lumiraStore.png" alt="" class="h-52 w-auto image-full">
    </aside>

    <aside>
      <p>Copyright © {{ year }} - All right reserved by Lumina Store Ltd</p>
    </aside>
  </footer>
</template>
