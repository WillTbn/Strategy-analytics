<template>
  <div class="AssetsRisk">
    <apexchart
      type="pie"
      height="350"
      ref="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AssetsRisk",
  props: {
    statusDark: { type: Boolean, required: true },
  },
  setup(props) {
    const series = [50, 30, 5, 5, 5, 5];
    const options = {
      colors: ["#2E93fA", "yellow", "orange", "orange", "orange", "orange"],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["TLT", "Dólar", "Aave", "ChainLink", "Etherum", "Unisawp"],
      title: {
        text: "Gerenciamento de risco",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Inter",
          color: !props.statusDark ? "#263238" : "#fff",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    return { series, options };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
