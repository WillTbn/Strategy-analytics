<template>
  <div class="TextareaTitle">
    <span class="text-h6 text-weight-bold">{{ text }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextareaTitle",
  props: {
    text: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
