<template>
  <div class="ChartWallet">
    <div id="chart">
      <b class="h5 font-weight-bolder ml-2"></b>
      <apexchart
        type="area"
        height="250"
        ref="chart"
        :options="walletOption"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from "vue";
import { Dark } from "quasar";
import useCharts from "../../composables/useCharts";
export default defineComponent({
  name: "ChartWallet",
  setup() {
    const chart = ref(null);
    const { walletOption } = useCharts();
    const options = ref();

    const optionsWhite = {
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
      // title: {
      //   text: "Product Trends by Month",
      //   align: "center",
      // },
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
            fontWeight: 600,
          },
        },
        categories: [
          "-       -2022-Q1",
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
            colors: ["gray", "gray", "gray", "gray", "gray", "gray", "gray"],
          },
        },
      },
    };
    const optionsDark = {
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
      // title: {
      //   text: "Product Trends by Month",
      //   align: "center",
      // },
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
            colors: [
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
            ],
            fontSize: "8px",
            fontWeight: 600,
          },
        },
        categories: [
          "-       -2022-Q1",
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
            colors: [
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
            ],
          },
        },
      },
    };
    const defineChart = () => {
      return Dark.isActive ? optionsDark : optionsWhite;
    };

    const series = [
      {
        name: "Carteira Strategy Anaytics",
        data: [10, 20, 30, 40, 40, 45, 50],
      },
    ];
    // const options = {

    // };

    return {
      options,
      series,
      walletOption,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
