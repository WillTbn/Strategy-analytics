<template>
  <span class="f-inter TitleinterMedium">{{ text }}</span>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TitleinterMedium",
  props: {
    text: { type: String },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.TitleinterMedium {
  font-feature-settings: "clig" off, "liga" off;

  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.5px; /* 90.278% */
}
</style>
