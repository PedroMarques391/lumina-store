<script setup lang="ts">

export interface AboutSectionProps {
  title: string
  paragraph1: string
  paragraph2?: string
  imagePath: string
  direction?: "left" | "right"
  backgroundColor?: string
}

const props = withDefaults(defineProps<AboutSectionProps>(), {
  backgroundColor: 'bg-base-100',
  direction: 'left'
})
</script>

<template>
  <section class="hero min-h-[60vh]" :class="backgroundColor">
    <div class="hero-content flex-col lg:flex-row gap-12 w-full"
      :class="{ 'lg:flex-row-reverse': direction === 'right' }">
      <img :src="imagePath"
        class="max-w-sm md:max-w-md rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover h-96"
        alt="Fashion Design Process" />
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
        <p class="py-2 text-base-content/80 leading-relaxed">
          {{ paragraph1 }}
        </p>
        <p v-if="paragraph2" class="py-2 text-base-content/80 leading-relaxed">
          {{ paragraph2 }}
        </p>
      </div>
    </div>
  </section>
</template>
