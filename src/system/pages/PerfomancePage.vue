<template>
  <div class="PerfomancePage row q-pa-lg">
    <div class="col-12 q-mb-lg"><chart-comparative /></div>
    <div class="col-4"><dividend-yield /></div>
    <div class="col-4"><asset-classes /></div>
    <div class="col-4"><assets-risk /></div>
    <!-- <div class="col-12">
      <q-img src="charts/grafico-2.svg " />
    </div>
    <div class="col-4">
      <q-img src="charts/dividend-yeld.svg " />
    </div>
    <div class="col-4">
      <q-img src="charts/classe-ativos.svg " />
    </div>
    <div class="col-4">
      <q-img src="charts/chart-9.svg " />
    </div>
  --></div>
</template>

<script>
import ChartComparative from "../components/charts/ChartComparative.vue";

import { defineComponent } from "vue";
import DividendYield from "../components/charts/DividendYield.vue";
import AssetClasses from "../components/charts/AssetClasses.vue";
import AssetsRisk from "../components/charts/AssetsRisk.vue";
export default defineComponent({
  name: "PerfomancePage",
  components: { ChartComparative, DividendYield, AssetClasses, AssetsRisk },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
