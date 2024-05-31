<template>
  <label :class="classOrDefault">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>
<script setup>
defineProps({
  value: {
    type: String,
  },
  classOrDefault: {
    type: String,
    default: "text-lg block font-medium light:text-gray-700",
  },
});
</script>
