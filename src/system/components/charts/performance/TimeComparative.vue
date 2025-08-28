<template>
  <div class="time-comparative row">
    <apexchart
      class="col-12"
      type="bar"
      ref="chart"
      width="100%"
      :height="height"
      :options="{
        ...barComparative,
        chart: { ...barComparative.chart, height: Number(height) },
      }"
      :series="series"
      style="min-height: 100px"
    ></apexchart>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import useCharts from "src/composables/useCharts";

defineComponent({
  name: "TimeComparative",
});
const chart = ref(null);
const { barComparative } = useCharts();
defineProps({
  height: { type: [String, Number], default: 250 },
});
const series = [
  {
    name: "Renda fixa",
    data: [44, 55, 41, 37],
  },
  {
    name: "Renda variável",
    data: [53, 32, 33, 52],
  },
  {
    name: "Poupança",
    data: [12, 17, 11, 9],
  },
];
</script>

<style scoped>
/* Seus estilos aqui */
</style>
