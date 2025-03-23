<template>
  <div>
    <button @click="store.increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts'

const store = useCounterStore()
</script>