<script setup lang="ts">
import { EyeIcon, PlusIcon } from 'lucide-vue-next';

interface FloatingActionButtonsProps {
  goToProduct: () => void
}


defineProps<FloatingActionButtonsProps>()
</script>

<template>
  <div class="absolute top-4 right-4 z-10 flex flex-col gap-2
              opacity-0 group-hover:opacity-100
              translate-x-4 group-hover:translate-x-0
              transition-all duration-300 ease-in-out">

    <div class="tooltip tooltip-left" data-tip="Adicionar">
      <button class="btn btn-circle btn-sm btn-primary shadow-lg border-none hover:scale-110 transition-transform">
        <PlusIcon class="w-4 h-4 text-white" />
      </button>
    </div>

    <div class="tooltip tooltip-left" data-tip="Ver Detalhes">
      <button @click="goToProduct"
        class="btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm shadow-lg border-none hover:bg-white hover:text-black hover:scale-110 transition-transform">
        <EyeIcon class="w-4 h-4" />
      </button>
    </div>

  </div>
</template>
