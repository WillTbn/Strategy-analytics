<template>
  <span class="f-inter TextinterNormal">{{ text }}</span>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextinterNormal",
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
.TextinterNormal {
  font-weight: 400;
  font-feature-settings: "clig" off, "liga" off;
  line-height: 32.5px;
}
</style>
