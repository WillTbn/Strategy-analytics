<template>
  <div
    class="SydebySyde row justify-center items-center q-ma-xl q-py-xl"
    :class="{ reverse: reverse }"
  >
    <div class="col-md-6 col-sm-12 text-center">
      <p class="text-title">
        {{ title }}
        <br />
        <span class="text-subtitle1 text-secondary subtitle">{{
          subTitle
        }}</span>
      </p>
    </div>
    <div class="col-md-6 col-sm-12 q-px-md-xl q-px-sm-sm">
      <p class="text-h8 text-subtitle1">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SydebySyde",
  props: {
    title: { type: String },
    subTitle: { type: String },
    text: { type: String },
    reverse: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.text-title {
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 68px */
}
.subtitle {
  width: 213px;
  display: inline-block;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
