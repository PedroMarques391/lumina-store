<script setup lang="ts">

interface SkeletonProps {
  isLoading: boolean
}

defineProps<SkeletonProps>()

</script>

<template>
  <div v-if="isLoading" class="flex flex-col gap-4 w-full">
    <div class="skeleton h-48 w-full"></div>
    <div class="skeleton h-4 w-28"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="flex flex-1 justify-between items-end px-2">
      <span class="skeleton h-4 w-24"></span>
      <span class="skeleton h-8 w-24"></span>
    </div>
  </div>
</template>
