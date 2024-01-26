<template>
  <div class="ProfitabilityLayout">
    <div class="row justify-center text-center q-py-lg q-my-xl">
      <div class="col-md-8 col-xs-12">
        <title-secondary text="Rentabilidade" />
      </div>
    </div>
    <div class="row justify-around q-py-lg contol-ma items-end">
      <div class="col-md-6 col-xs-12">
        <profitabily-chart />
      </div>
      <div class="col-md-6 col-xs-12">
        <profitabily-table />
      </div>
    </div>
  </div>
  <div class="row justify-center q-mb-xl padding-i-mobile">
    <div class="col-md-6 col-sm-8">
      <p class="text-h16">
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
.contol-ma {
  margin: 48px 48px;
}
@media (max-width: 768px) {
  .contol-ma {
    margin: 8px 8px;
  }
}
</style>
