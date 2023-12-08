<template>
  <div class="ArticlePrimary row q-my-xl text-center">
    <p class="top col-12">{{ topText }}</p>
    <p class="title q-mb-xl col-12">{{ title }}</p>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    topText: { type: String },
    title: { type: String },
  },
  name: "ArticlePrimary",
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.top {
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  line-height: 102.945%; /* 41.178px */
}
.title {
  color: #fff;
  /* font-size: 10rem; */
  font-size: 120px;
  font-weight: 700;
  line-height: 100%; /* 175px */
}
/* Estilos específicos do componente aqui */
</style>
