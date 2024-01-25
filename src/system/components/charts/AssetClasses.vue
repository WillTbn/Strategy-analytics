<template>
  <div class="AssetClasses">
    <apexchart
      type="pie"
      height="350"
      ref="line"
      :options="optionsAssetsClass"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import useCharts from "src/composables/useCharts";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AssetClasses",
  setup() {
    const series = [73, 27];
    const { optionsAssetsClass } = useCharts();

    return { series, optionsAssetsClass };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
