<template>
  <div class="TitleSecondary">
    {{ text }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TitleSecondary",
  props: {
    text: { type: String, required: true },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.TitleSecondary {
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 50px */
}
</style>
