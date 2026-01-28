<script setup lang="ts">

defineProps < {
  isLoading: boolean
} > ()

</script>


<template>
  <div v-if="isLoading" class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="skeleton h-96 w-full"></div>
      <div class="space-y-4">
        <div class="skeleton h-8 w-3/4"></div>
        <div class="skeleton h-4 w-1/2"></div>
        <div class="skeleton h-32 w-full"></div>
      </div>
    </div>
  </div>
</template>
