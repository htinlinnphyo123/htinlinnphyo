<template>
  <span class="bg-gray-100 px-4 py-2 rounded-full font-medium text-gray-700">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  label: String,
})
</script>