<template>
  <div class="InputSystem">
    <span>{{ label }}</span>
    <q-input
      standout
      color="white"
      :value="value"
      @input="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
