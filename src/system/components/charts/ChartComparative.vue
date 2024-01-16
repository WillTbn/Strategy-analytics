<template>
  <div class="ChartComparative">
    <apexchart
      type="area"
      height="320"
      ref="chart"
      :options="options"
      :series="series"
    ></apexchart>
    <!-- width="75%" -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChartComparative",
  props: {
    statusDark: { type: Boolean, required: true },
  },
  setup(props) {
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
    const options = {
      legend: {
        position: "right",
        fontFamily: "Inter",
      },
      colors: ["#2E93fA", "#66DA26", "#E91E63"],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Carteira Strategy Analytics",
        align: "center",
        style: {
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Inter",
          color: !props.statusDark ? "#263238" : "#fff",
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        tickPlacement: "center",
        labels: {
          style: {
            colors: ["gray", "gray", "gray", "gray", "gray", "gray", "gray"],
            fontSize: "8px",
            fontFamily: "Inter",
            fontWeight: 600,
          },
        },
        categories: [
          "--- 2022-Q1",
          "2022-Q2",
          "2022-Q3",
          "2022-Q4",
          "2023-Q1",
          "2023-Q2",
          "2023-Q3",
        ],
        
      },
      yaxis: {
        opposite: true,
        min: -20,
        max: 50,
        labels: {
          align: "left",
          formatter: (value) => {
            return `${value}%`;
          },
          style: {
            fontFamily: "Inter",
          },
        },
      },
    };

    return { options, series };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
