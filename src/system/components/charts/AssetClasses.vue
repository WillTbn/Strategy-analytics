<template>
  <div class="AssetClasses">
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
  name: "AssetClasses",
  setup() {
    const series = [73, 27];
    const options = {
      colors: ["#2E93fA", "#001"],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["EUA", "Blockchain"],
      title: {
        text: "Ativos classes",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Inter",
          color: "#263238",
        },
      },
      responsive: [
        {
          // breakpoint: 480,
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
