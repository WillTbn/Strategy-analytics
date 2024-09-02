<template>
  <input-label :value="textLabel" />
  <input
    class="text-black border-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm p-2 text-lg font-medium"
    :class="{ 'border-rose-500': error }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="typeInput"
    ref="input"
  />
</template>
<script setup>
import { onMounted, ref } from "vue";
import InputLabel from "./InputLabel.vue";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  typeInput: {
    type: String,
    default: "text",
  },
  textLabel: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>
