<template>
  <div>
    <p>Count from store: {{ store.count }}</p>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter.ts'

const store = useCounterStore()
</script>