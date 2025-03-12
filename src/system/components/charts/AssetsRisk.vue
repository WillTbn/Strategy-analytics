<template>
  <div class="AssetsRisk">
    <apexchart
      type="pie"
      height="350"
      ref="line"
      :options="optionsAssetRisks"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import useCharts from "src/composables/useCharts";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AssetsRisk",
  setup() {
    const series = [50, 30, 5, 5, 5, 5];
    const { optionsAssetRisks } = useCharts();

    return { series, optionsAssetRisks };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
