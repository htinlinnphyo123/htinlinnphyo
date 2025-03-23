<template>
  <section id="greeting" class="h-screen lg:flex items-center justify-center bg-theme">
    <div class="flex-1 px-6 lg:px-20 pt-32 lg:pt-0">
      <h1 class="text-4xl font-bold mb-6 text-gray-800 font-mono leading-[3rem]">Hello, I am Htin Linn Phyo</h1>
      <!-- <p class="greeting">Fullstack Developer</p> -->
      <p class="text-lg text-gray-600 leading-relaxed fade-in-up">
        Fullstack Developer who loves building smooth and user-friendly web applications. Skilled in
        Vue 3, Laravel, PHP, MySQL, and cloud technologies, creating strong solutions from frontend
        to backend.
      </p>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <img
        :src="firstPhoto"
        id="firstPhoto"
        class="w-4/5 object-cover rounded-full transform transition-transform duration-300 hover:scale-105"
        alt="Fullstack Development"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechBadge from './TechBadge.vue'
import firstPhoto from '@/assets/myphoto/header2.jpeg'
import { onMounted } from 'vue'
import { navbarShadow } from '@/stores/navbarshadow'

// const navbarShadow: any = navbarShadow()
const store = navbarShadow()

defineProps({
  active: Boolean,
})

onMounted(() => {
  const greetingEL = document.getElementById('greeting')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // console.log(navbarShadow.navbarShadow)
          store.setNavbarShadow(true)
          console.log('Greeting section is out of view')
        } else {
          store.setNavbarShadow(false)
          console.log('Greeting section is in view')
        }
      })
    },
    {
      threshold: 0.15,
    }
  )
  if (greetingEL) {
    observer.observe(greetingEL)
  }
})
</script>