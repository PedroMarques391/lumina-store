<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Spark',
    description: 'It started with a simple search for a gold ring that wouldn\'t fade in a week. Frustrated by disposable fashion and lackluster accessories, the concept of Lumina was born. We wanted quality that lasts.',
    icon: 'diamond'
  },
  {
    year: '2024',
    title: 'The First Collection',
    description: 'We launched our pilot collection focusing solely on Fine Jewelry. We curated pieces that balanced modern minimalism with classic elegance. The response was immediate: people were hungry for affordable luxury.',
    icon: 'search'
  },
  {
    year: '2025',
    title: 'Weaving the Thread',
    description: 'Jewelry was just the beginning. We expanded into Men\'s and Women\'s apparel, seeking fabrics that breathe and cuts that flatter. We partnered with sustainable suppliers to bring "Slow Fashion" values to our store.',
    icon: 'shirt'
  },
  {
    year: '2026',
    title: 'A Global Lifestyle',
    description: 'Today, Lumina is more than a store; it\'s a style authority. From the perfect winter jacket to the necklace that completes the look, we define the modern wardrobe for thousands of customers worldwide.',
    icon: 'globe'
  }
];
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

    <section class="hero min-h-[60vh]">
      <div class="hero-content flex-col lg:flex-row gap-12">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          class="max-w-sm md:max-w-md rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover h-100"
          alt="Fashion Design Process" />
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold mb-4">Escaping the Noise</h2>
          <p class="py-2 text-base-content/80 leading-relaxed">
            In a world of fast fashion and fleeting trends, finding pieces that truly define you can be overwhelming.
            We felt lost in a sea of generic designs and poor materials.
          </p>
          <p class="py-2 text-base-content/80 leading-relaxed">
            Lumina started with a simple question:
            <strong>"Where can we find pieces that look good today and even better tomorrow?"</strong>
          </p>
          <p class="py-2 text-base-content/80 leading-relaxed">
            We decided to stop searching and start curating. What began as a personal mood board
            became a destination for style enthusiasts.
          </p>
        </div>
      </div>
    </section>

    <section class="hero min-h-[60vh] bg-base-200/50">
      <div class="hero-content flex-col lg:flex-row-reverse gap-12">
        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop"
          class="max-w-sm md:max-w-md rounded-lg shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 object-cover h-100"
          alt="Jewelry Detail" />
        <div class="max-w-xl text-right lg:text-left">
          <h2 class="text-3xl font-bold mb-4">Quality in Every Detail</h2>
          <p class="py-2 text-base-content/80 leading-relaxed">
            We believe that a simple gold ring or a well-fitted jacket can change your entire demeanor.
            It's not about having the most clothes; it's about having the *right* clothes.
          </p>
          <p class="py-2 text-base-content/80 leading-relaxed">
            Our curation process is rigorous. We look for shine, durability, and comfort.
            If a piece doesn't make us feel special, it doesn't make it to the store.
          </p>
        </div>
      </div>
    </section>

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

    <section class="py-20 max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Our Evolution</h2>

      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li v-for="(event, index) in timelineEvents" :key="index">

          <div class="timeline-middle">
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg z-10">
              <CheckIcon class="w-6 h-6" />
            </div>
          </div>

          <div :class="[
            index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end',
            'mb-10 md:px-4'
          ]">
            <time class="font-mono italic text-sm opacity-60">{{ event.year }}</time>
            <div class="text-lg font-black text-primary">{{ event.title }}</div>
            <p class="text-base-content/80 mt-2 text-sm leading-relaxed">
              {{ event.description }}
            </p>
          </div>

          <hr class="bg-primary/40 " />
        </li>
      </ul>
    </section>

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
