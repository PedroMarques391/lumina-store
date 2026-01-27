<script setup lang="ts">
import HeroSection from '@/components/shared/HeroSection.vue';
import SectionTitle from '@/components/shared/SectionTitle.vue';
import { faqContactData } from '@/utils/data/faq.data';
import { Instagram, Mail, MapPin, Phone, Send, X, Youtube } from 'lucide-vue-next';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<template>
  <div class="bg-base-100 min-h-screen">
    <HeroSection badge="Get in Touch" title="We're Here to Help" span="Hear From You"
      subtitle="Have a question about our products? Need styling advice? We're here to help you find your perfect piece." />

    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

        <div class="card bg-base-200 shadow-xl h-fit">
          <div class="card-body">
            <h2 class="card-title text-2xl mb-4">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input v-model="formData.name" type="text" placeholder="John Doe" class="input input-bordered w-full"
                  required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email Address</span>
                </label>
                <input v-model="formData.email" type="email" placeholder="john@example.com"
                  class="input input-bordered w-full" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input v-model="formData.subject" type="text" placeholder="How can we help?"
                  class="input input-bordered w-full" required />
              </div>

              <div class="form-control flex-col flex">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea v-model="formData.message" class="textarea textarea-bordered h-32"
                  placeholder="Tell us more about your inquiry..." required></textarea>
              </div>

              <button type="submit" class="btn btn-primary text-base-100 w-full gap-2">
                <Send :size="20" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
            <p class="text-base-content/70 mb-8">
              Reach out to us through any of these channels.
              We typically respond within 24 hours.
            </p>
          </div>

          <div class="space-y-4">
            <div class="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="card-body flex-row items-center gap-4 p-6">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <Mail :size="24" class="text-primary" />
                </div>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <a href="mailto:contact@lumina-store.com" class="text-primary hover:underline">
                    contact@lumina-store.com
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="card-body flex-row items-center gap-4 p-6">
                <div class="bg-secondary/10 p-3 rounded-lg">
                  <Phone :size="24" class="text-secondary" />
                </div>
                <div>
                  <h3 class="font-semibold">Phone</h3>
                  <a href="tel:+1234567890" class="text-secondary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="card-body flex-row items-center gap-4 p-6">
                <div class="bg-accent/10 p-3 rounded-lg">
                  <MapPin :size="24" class="text-accent" />
                </div>
                <div>
                  <h3 class="font-semibold">Address</h3>
                  <p class="text-base-content/70">
                    123 Fashion Avenue<br>
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 shadow-md">
            <div class="card-body p-6">
              <h3 class="font-semibold mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a href="#" aria-label="Instagram"
                  class="btn btn-circle btn-outline hover:btn-primary transition-all duration-300">
                  <Instagram :size="24" />
                </a>
                <a href="#" aria-label="X (Twitter)"
                  class="btn btn-circle btn-outline hover:btn-primary transition-all duration-300">
                  <X :size="24" />
                </a>
                <a href="#" aria-label="YouTube"
                  class="btn btn-circle btn-outline hover:btn-primary transition-all duration-300">
                  <Youtube :size="24" />
                </a>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 shadow-md">
            <div class="card-body p-6">
              <h3 class="font-semibold mb-4">Business Hours</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-base-content/70">Monday - Friday</span>
                  <span class="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/70">Saturday</span>
                  <span class="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/70">Sunday</span>
                  <span class="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-base-200 py-16">
      <div class="container mx-auto px-4">
        <SectionTitle title="Quick Answers" subtitle="Common questions about orders, shipping, and returns" />

        <div class="max-w-3xl mx-auto space-y-2">
          <div tabindex="0" class="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div class="collapse-title font-semibold">
              How long does shipping take?
            </div>
            <div class="collapse-content text-sm">
              <p>Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.</p>
            </div>
          </div>

          <div v-for="(faq, index) in faqContactData" :tabindex="index"
            class="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div class="collapse-title font-semibold">{{ faq.question }}</div>
            <div class="collapse-content text-sm">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
