<template>
  <div class="ChartComparative">
    <apexchart
      type="area"
      :height="height"
      ref="chart"
      :options="optionsComparative"
      :series="series"
    ></apexchart>
    <!-- width="75%" -->
  </div>
</template>

<script>
import useCharts from "src/composables/useCharts";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ChartComparative",
  props: { height: { type: String, default: "350" } },
  setup() {
    const chart = ref(null);
    const { optionsComparative } = useCharts();
    const series = [
      {
        name: "Strategy Analytics",
        data: [10, 20, 30, 40, 40, 45, 50],
      },
      {
        name: "ibovespa",
        data: [10, -20, 15, -5, -10, 10, 0],
      },
      {
        name: "S&P",
        data: [10, 20, 5, 5, 9, 2, -5],
      },
    ];
    return { series, chart, optionsComparative };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
