<template>
  <div class="ProfitabilityLayout">
    <div class="row justify-center text-center q-py-lg q-my-xl">
      <div class="col-md-8 col-xs-12">
        <title-secondary text="Rentabilidade" />
      </div>
    </div>
    <div class="row justify-around q-py-lg contol-ma">
      <div class="col-md-6 col-xs-12 self-start">
        <profitabily-chart v-if="table.growth" :growthData="table.growth" />
      </div>
      <div class="col-md-6 col-xs-12 self-end">
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
import { defineComponent, onMounted } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";
import ProfitabilyChart from "../components/ProfitabilyChart.vue";
import ProfitabilyTable from "../components/ProfitabilyTable.vue";
import useTable from "../composables/useTable";
import { useStoreLayout } from "../stores/layoutStore";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "ProfitabilityLayout",
  components: { TitleSecondary, ProfitabilyChart, ProfitabilyTable },
  setup() {
    const { getTable } = useTable();
    const layoutStore = useStoreLayout();
    const { table } = storeToRefs(layoutStore);
    onMounted(() => {
      getTable();
    });
    return { table };
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
