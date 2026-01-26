<script setup lang="ts">
import { timelineEvents } from '@/utils/data/timelineEvents.data';
import { CheckIcon } from 'lucide-vue-next';
</script>

<template>
  <section class="pb-20 max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Our Evolution</h2>

    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical scroll-timeline">
      <li v-for="(event, index) in timelineEvents" :key="index">

        <div class="timeline-middle">
          <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg z-10">
            <CheckIcon class="w-6 h-6" />
          </div>
        </div>

        <div :class="[
          index % 2 === 0 ? 'timeline-start md:text-end ' : 'timeline-end',
          'mb-10 md:px-4'
        ]">
          <time class="font-mono italic text-sm opacity-60">{{ event.year }}</time>
          <div class="text-lg font-black text-primary">{{ event.title }}</div>
          <p class="text-base-content/80 mt-2 text-sm leading-relaxed">
            {{ event.description }}
          </p>
        </div>

        <hr class="bg-primary/40" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100px) scale(0.9);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

.scroll-timeline li {
  animation: fadeUp linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 40%;
}
</style>
