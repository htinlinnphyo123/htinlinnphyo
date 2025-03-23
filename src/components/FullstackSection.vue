<template>
  <section class="h-screen flex">
    <div class="flex-1 p-16 flex flex-col justify-center">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-bold mb-6 text-gray-800">Fullstack Development</h1>
        <div class="flex gap-3 mb-8">
          <TechBadge label="Vue 3" />
          <TechBadge label="Laravel" />
        </div>
        <p class="text-lg text-gray-600 leading-relaxed">
          Building modern web applications with cutting-edge technologies. Specializing in
          responsive UI/UX design and scalable backend solutions.
        </p>
      </div>
    </div>
    <div class="flex-1 p-8">
      <div class="sticky top-0 h-screen flex items-center">
        <img
          :src="firstPhoto"
          class="w-full h-[80vh] object-cover transform transition-transform duration-300 hover:scale-105 shadow-2xl border-8 border-white"
          style="clip-path: circle(50% at 50% 50%)"
          alt="Fullstack Development"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechBadge from './TechBadge.vue'
import firstPhoto from '@/assets/myphoto/header1.jpeg'

defineProps({
  active: Boolean,
})
</script>