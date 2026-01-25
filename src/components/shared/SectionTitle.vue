<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center mb-10">
    <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ title }}</h2>
    <p v-if="subtitle" class="text-gray-500 max-w-2xl mx-auto">{{ subtitle }}</p>
  </div>
</template>
