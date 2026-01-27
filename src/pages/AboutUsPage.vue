<script setup lang="ts">
import AboutSection from '@/components/about/AboutSections.vue';
import TimeLine from '@/components/about/TimeLine.vue';
import HeroSection from '@/components/shared/HeroSection.vue';
import { aboutSections } from '@/utils/data/aboutSection.data';
import { onMounted, ref, } from 'vue';


const totalCustomers = ref(0);
const totalProducts = ref(0);

const animateCounter = (targetRef: any, endValue: number, duration: number = 2000) => {
  let start = 0;
  const stepTime = 50;
  const totalSteps = duration / stepTime;
  const increment = endValue / totalSteps;

  const timer = setInterval(() => {
    start += increment

    if (start >= endValue) {
      targetRef.value = endValue;
      clearInterval(timer);
    } else {
      targetRef.value = Math.floor(start);
    }
  }, stepTime);
};

onMounted(() => {
  const elemento: Element = document.querySelector('#stats' as string) as Element;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(totalCustomers, 15000);
        animateCounter(totalProducts, 400);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(elemento as Element)
});

</script>

<template>
  <div class="bg-base-100 min-h-screen">


    <HeroSection badge="Our Jorney" title="We don't just sell clothes." span="We curate confidence."
      subtitle="Lumina was born from the belief that style should be effortless. Timeless jewelry and essential wear, curated for those who value quality over trends." />

    <AboutSection v-for="(aboutSection, index) in aboutSections" v-bind="aboutSection" :key="index" />

    <div class="flex justify-center py-16 bg-base-100">
      <div id="stats" class="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full max-w-4xl">
        <div class="stat place-items-center">
          <div class="stat-title">Happy Customers</div>
          <div class="stat-value text-primary">{{ totalCustomers.toLocaleString() }}+</div>
          <div class="stat-desc">Worldwide Shipping</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Unique Pieces</div>
          <div class="stat-value text-secondary">{{ totalProducts.toLocaleString() }}+</div>
          <div class="stat-desc">Jewelry & Apparel</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Established</div>
          <div class="stat-value">2023</div>
          <div class="stat-desc">And growing fast</div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <TimeLine />

    <div class="bg-base-100 text-neutral-content py-16 text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full bg-linear-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30">
      </div>

      <div class="relative z-10 ">
        <h2 class="text-3xl font-bold mb-4 text-primary">Redefine Your Wardrobe</h2>
        <p class="mb-8 max-w-lg mx-auto opacity-90 text-secondary">Join thousands who have found their signature look
          with Lumina.</p>
        <RouterLink to="/products" class="btn btn-primary btn-wide text-base-100">
          Shop the Collection
        </RouterLink>
      </div>
    </div>

  </div>
</template>
