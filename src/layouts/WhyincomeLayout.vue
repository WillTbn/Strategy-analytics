<template>
  <div class="WhyincomeLayout q-ma-lg q-pt-lg q-pb-lg control-mb">
    <div class="row justify-center text-center q-py-lg">
      <div class="col-md-8 col-sm-12">
        <title-secondary :text="title" />
      </div>
      <div class="col-md-8 col-sm-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";

export default defineComponent({
  name: "WhyincomeLayout",
  props: {
    title: { type: String },
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
</style>
