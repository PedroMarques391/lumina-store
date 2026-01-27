<script setup lang="ts">

interface HeroSectionProps {
  badge: string;
  title: string;
  span: string;
  subtitle: string;
}

defineProps < HeroSectionProps > ();
</script>


<template>
  <div class="hero min-h-[30vh] bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-3xl">
        <div class="badge badge-primary badge-outline mb-4">{{ badge }}</div>
        <h1 class="text-5xl font-bold tracking-tight mb-6">
          {{ title }} <span class="text-primary">{{ span }}</span>
        </h1>
        <h2 class="text-lg text-base-content/70">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
