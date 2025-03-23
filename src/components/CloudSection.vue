<template>
  <section
    class="h-screen flex transition-all duration-300 ease-in-out"
    :class="{
      'opacity-100': active,
      'opacity-80': !active,
    }"
  >
    <div class="flex-1 p-16 flex flex-col justify-center">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-bold mb-6 text-gray-800">Cloud Architecture</h1>
        <div class="flex gap-3 mb-8">
          <TechBadge label="AWS" />
          <TechBadge label="Docker" />
          <TechBadge label="Kubernetes" />
          <TechBadge label="CI/CD" />
        </div>
        <p class="text-lg text-gray-600 leading-relaxed">
          Designing and implementing cloud-native solutions with infrastructure-as-code principles.
          Expertise in containerization and automated deployment pipelines.
        </p>
      </div>
    </div>
    <div class="flex-1 p-16">
      <div class="sticky top-0 h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
          class="w-full h-[80vh] object-cover rounded-2xl"
          alt="Cloud Infrastructure"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechBadge from './TechBadge.vue'

defineProps({
  active: Boolean,
})
</script>