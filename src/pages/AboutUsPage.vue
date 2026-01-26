<script setup lang="ts">
import AboutSection from '@/components/about/AboutSections.vue';
import TimeLine from '@/components/about/TimeLine.vue';
import { aboutSections } from '@/utils/data/aboutSection.data';






</script>

<template>
  <div class="bg-base-100 min-h-screen">
    <div class="hero min-h-[20vh] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-3xl">
          <div class="badge badge-primary badge-outline mb-4">Our Journey</div>
          <h1 class="text-5xl font-bold tracking-tight mb-6">
            We don't just sell clothes. <br>
            <span class="text-primary">We curate confidence.</span>
          </h1>
          <p class="text-lg text-base-content/70">
            Lumina was born from the belief that style should be effortless.
            Timeless jewelry and essential wear, curated for those who value quality over trends.
          </p>
        </div>
      </div>
    </div>

    <AboutSection v-for="(aboutSection, index) in aboutSections" v-bind="aboutSection" :key="index" />

    <div class="flex justify-center py-16 bg-base-100">
      <div class="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full max-w-4xl">
        <div class="stat place-items-center">
          <div class="stat-title">Happy Customers</div>
          <div class="stat-value text-primary">15K+</div>
          <div class="stat-desc">Worldwide Shipping</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Unique Pieces</div>
          <div class="stat-value text-secondary">400+</div>
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
