<template>
  <q-input
    standout
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :label="labelInput"
    ref="input"
    lazy-rules
    :hint="hintText"
    :class="classValue"
  />
</template>
<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  labelInput: {
    type: String,
    default: "Campo preenche",
  },
  hintText: {
    type: String,
  },
  classValue: {
    type: String,
    default: "col-2",
  },
});

defineEmits(["update:modelValue"]);

const input = ref(null);

// onMounted(() => {
//   if (input.value.hasAttribute("autofocus")) {
//     input.value.focus();
//   }
// });

// defineExpose({ focus: () => input.value.focus() });
</script>
