<template>
  <div class="ProfitabilityLayout">
    <div class="row justify-center text-center q-py-lg q-my-xl">
      <div class="col-8">
        <title-secondary text="Rentabilidade" />
      </div>
    </div>
    <div class="row justify-around q-py-lg q-ma-xl">
      <div class="col-md-6 col-12">
        <profitabily-chart />
      </div>
      <div class="col-md-6 col-12">
        <profitabily-table />
      </div>
    </div>
  </div>
  <div class="row justify-center q-mb-xl">
    <div class="col-6">
      <p class="text-h8">
        O desempenho passado não é indicação do desempenho futuro e não deve ser
        o único fator em consideração ao selecionar um produto.
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";
import ProfitabilyChart from "../components/ProfitabilyChart.vue";
import ProfitabilyTable from "../components/ProfitabilyTable.vue";

export default defineComponent({
  name: "ProfitabilityLayout",
  components: { TitleSecondary, ProfitabilyChart, ProfitabilyTable },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
