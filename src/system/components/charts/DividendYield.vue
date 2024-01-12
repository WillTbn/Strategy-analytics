<template>
  <div class="DividendYield">
    <apexchart
      type="area"
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
    const options = {
      legend: { position: "top", fontFamily: "Inter" },
      colors: ["#2E93fA", "#E91E63"],
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Rendimentos de dividendos da Carteira",
        align: "left",
        style: {
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily: "Inter",
          color: "#263238",
        },
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [],
      },
      labels: [
        "JAN",
        "FEV",
        "MAR",
        "ABR",
        "MAI",
        "JUN",
        "JUL",
        "AGO",
        "SET",
        "OUT",
        "NOV",
        "DEZ",
      ],

      yaxis: [
        {
          // opposite: true,
          labels: {
            align: "left",
            formatter: (value) => {
              return `0,${value}%`;
            },
            style: {
              fontFamily: "Inter",
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
