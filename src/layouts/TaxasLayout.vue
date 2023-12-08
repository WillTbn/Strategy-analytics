<template>
  <div class="TaxasLayout q-ma-xl">
    <div class="row q-pa-lg q-ma-xl">
      <div class="col-8">
        <title-secondary text="Taxas" />
      </div>
      <div class="col-8 q-pt-xl">
        <p>Taxa de administração 0,40%</p>
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
