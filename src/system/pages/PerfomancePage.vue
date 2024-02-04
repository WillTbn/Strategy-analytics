<template>
  <div class="PerfomancePage row q-pa-lg">
    <div class="col-12 q-mb-lg">
      <chart-comparative :key="dark" :height="tabletLayout.heightChart" />
    </div>
    <div :class="tabletLayout.dividendYield">
      <dividend-yield :key="dark" :height="tabletLayout.heightChart" />
    </div>
    <div :class="tabletLayout.assetClasses">
      <asset-classes :key="dark" />
    </div>
    <div :class="tabletLayout.assetsRisk">
      <assets-risk :key="dark" />
    </div>
  </div>
</template>

<script>
import ChartComparative from "../components/charts/ChartComparative.vue";

import { defineComponent, computed, onMounted } from "vue";
import DividendYield from "../components/charts/DividendYield.vue";
import AssetClasses from "../components/charts/AssetClasses.vue";
import AssetsRisk from "../components/charts/AssetsRisk.vue";
import { Dark } from "quasar";
import { useLayoutStore } from "src/stores/layout";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "PerfomancePage",
  components: { ChartComparative, DividendYield, AssetClasses, AssetsRisk },
  setup() {
    const storeLayout = useLayoutStore();
    const { dashboard } = storeToRefs(storeLayout);

    const tabletLayout = computed(() =>
      dashboard.value.tablet ? getTable : noTable
    );
    const noTable = {
      heightChart: "350",
      chartComparative: "col-12 q-mb-lg",
      dividendYield: "col-md-4 col-12",
      assetClasses: "col-md-4 col-12",
      assetsRisk: "col-md-4 col-12",
    };
    const getTable = {
      heightChart: "650",
      chartComparative: "col-12 q-mb-lg",
      dividendYield: "col-12",
      assetClasses: "col-6",
      assetsRisk: "col-6",
    };

    onMounted(() => {});
    return {
      tabletLayout,
      dashboard,
      dark: computed(() => Dark.isActive),
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
