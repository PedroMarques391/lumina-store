<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const closeDrawerOnResize = () => {
  const drawerCheckbox = document.getElementById('my-drawer-1') as HTMLInputElement;
  
  if (drawerCheckbox && window.innerWidth >= 768) {
    drawerCheckbox.checked = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', closeDrawerOnResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', closeDrawerOnResize);
});

</script>

<template>
  <div class="drawer block md:hidden z-50 w-fit">
    <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <label for="my-drawer-1" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
          </path>
        </svg>
      </label>
    </div>
    <slot />
  </div>
</template>
