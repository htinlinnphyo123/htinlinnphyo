<template>
  <div
    class="fixed inset-0 overflow-hidden pointer-events-none z-50"
    :class="{ 'hidden': !startMoving }"
  >
    <div
      class="absolute w-4 h-4 bg-blue-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
      :style="{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const position = ref({ x: 0, y: 0 })
const startMoving = ref(false)

const updatePosition = (e: any) => {
  position.value = { x: e.clientX, y: e.clientY }
  startMoving.value = true
}

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})
</script>