<template>
  <div class="DividendYield">
    <apexchart
      type="area"
      height="350"
      ref="line"
      :options="optionsYield"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import useCharts from "src/composables/useCharts";
import { defineComponent } from "vue";
export default defineComponent({
  name: "DividendYield",

  setup() {
    const series = [
      {
        name: "Rendimentos de dividendos",
        type: "column",
        data: [4, 5, 4, 3, 3, 3, 3, 3, 7, 3, 1, 3],
      },
      {
        name: "Media",
        type: "line",
        data: [3, 3, 3, 3, 3, 2.9, 3, 3, 3, 3, 2.9, 3],
      },
    ];
    const { optionsYield } = useCharts();

    return { series, optionsYield };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
