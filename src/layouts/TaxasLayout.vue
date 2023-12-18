<template>
  <div class="TaxasLayout q-ma-xl">
    <div class="row q-py-lg text-center">
      <div class="col-md-12 col-sm-12">
        <title-secondary text="Taxas" />
      </div>
    </div>
    <div class="row justify-center q-mb-xl q-mb-xl text-center">
      <div class="col-md-4 col-sm-4 q-pt-xl">
        <p class="text-16">Taxa de administração</p>
      </div>
      <div class="col-md-4 col-sm-4 q-pt-xl">
        <p class="text-16">0,40%</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";

export default defineComponent({
  name: "TaxasLayout",
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
