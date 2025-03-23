<template>
  <main ref="scrollContainer">
    <Greeting />
    <CloudSection />
    <CloudSection />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Greeting from './Greeting.vue'
import CloudSection from './CloudSection.vue'
</script>
