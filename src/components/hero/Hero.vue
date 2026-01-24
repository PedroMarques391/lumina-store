<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="hero min-h-[80vh]"
    style="background-image: url('https://imgs.search.brave.com/ZIJMF1H2zrYLkabwDoq6iIP-zGlyNnlklre-aTrEAzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MDU2NTk5Ny9waG90/by92YXJpb3VzLXBl/YXJsLWFuZC1nb2xk/LWpld2VscnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWoz/YzVwWDdUeGVwZENo/SmRqbEJSNlktWDJG/SUkxMG1yc0RjdzJ1/TGxfb3c9');">
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold ">Timeless Elegance, Modern Comfort</h1>
        <p class="mb-5">
          Discover the perfect balance between luxury and daily wear.
          From exquisite gemstones to essential clothing for him and her.
        </p>
        <button @click="router.push('/products')" class="btn md:btn-lg btn-primary text-base-100">Go to
          products</button>
      </div>
    </div>
  </div>
</template>
