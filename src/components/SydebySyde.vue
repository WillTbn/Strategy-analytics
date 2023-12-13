<template>
  <div
    class="SydebySyde row justify-center items-center q-ma-xl q-py-xl"
    :class="{ reverse: reverse }"
  >
    <div class="col-md-6 col-sm-12 text-center self-center">
      <p class="text-title">
        <title-secondary :text="title" />

        <span class="text-secondary subtitle">{{ subTitle }}</span>
      </p>
    </div>
    <div class="col-md-6 col-sm-12 q-px-md-xl q-px-sm-sm">
      <p class="text-font">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "./TitleSecondary.vue";
export default defineComponent({
  name: "SydebySyde",
  props: {
    title: { type: String },
    subTitle: { type: String },
    text: { type: String },
    reverse: { type: Boolean, default: false },
  },
  components: { TitleSecondary },
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
  padding-inline: 3.3rem;
  line-height: 100%; /* 68px */
}
.subtitle {
  width: 213px;
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-inline: 2.3rem;
}
.text-font {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 102.945%;
  letter-spacing: 0.01786em;
  text-align: center;
  padding-inline: 9rem;
}
@media (max-width: 768px) {
  .text-font {
    padding-inline: 0 !important;
  }
  .subtitle {
    padding-inline: 0 !important;
  }
  .text-title {
    padding-inline: 0 !important;
  }
}
</style>
