<template>
  <section class="h-screen flex transition-all duration-300 ease-in-out">
    <div class="flex-1 p-16 flex flex-col justify-center">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-bold mb-6 text-gray-800">{{ title }}</h1>
        <div class="flex gap-3 mb-8">
          <TechBadge v-for="(item, index) in techItems" :key="index" :label="item" />
        </div>
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="flex-1 p-8">
      <div class="sticky top-0 h-screen flex items-center">
        <img
          :src="imageSrc"
          class="w-full h-[80vh] object-cover transform transition-transform duration-300 hover:scale-105 shadow-2xl border-8 border-white"
          style="clip-path: circle(50% at 50% 50%)"
          :alt="alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TechBadge from './TechBadge.vue'

defineProps({
  title: String,
  description: String,
  techItems: Array,
  imageSrc: String,
  alt: String
})
</script>