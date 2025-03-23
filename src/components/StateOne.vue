<template>
  <main ref="scrollContainer">
    <FullstackSection />
    <CloudSection />
    <CloudSection />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FullstackSection from './FullstackSection.vue'
import CloudSection from './CloudSection.vue'
</script>
