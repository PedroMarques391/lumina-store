<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';


interface MenuItemProps {
  label: string
  link: string
}
const { label, link } = defineProps<MenuItemProps>()

const route = useRoute();

const isActivePath = computed(() => route.path === link);

</script>

<template>
  <li class="h-full w-auto">
    <RouterLink :to="link"
      class="group relative flex h-full items-center px-4 transition-colors p-2 text-base  lg:text-lg"
      active-class="text-primary font-semibold">
      {{ label }}
      <span class="absolute bottom-0 left-0 h-0.75 bg-primary transition-all duration-300 w-0 group-hover:w-full"
        :class="{ 'w-full': isActivePath }" />
    </RouterLink>
  </li>
</template>
