<template>
  <div class="ChartWallet">
    <div id="chart">
      <q-btn
        round
        color="primary"
        :icon="
          currencyOrPercentage
            ? 'fa-solid fa-percent'
            : 'fa-solid fa-dollar-sign'
        "
        @click.prevent="toggleValue()"
        style="position: absolute; top: 5px; right: 10px"
      >
        <!-- disabled -->
        <q-tooltip> Em desenvolvimento </q-tooltip>
      </q-btn>
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
import useCharts from "../../composables/useCharts";
import { useUserStore } from "../../stores/user";
export default defineComponent({
  name: "ChartWallet",
  setup() {
    const chart = ref(null);
    const { walletOption, walletOptionCurrent } = useCharts();
    const options = ref();
    const useStore = useUserStore();
    const currencyOrPercentage = ref(false);
    const toggleValue = () => {
      // console.log(chart.value);
      currencyOrPercentage.value = !currencyOrPercentage.value;
      // console.log("currencyOrPercentage.value ->", currencyOrPercentage.value);
      if (currencyOrPercentage.value) {
        // chart.value.toggleSeries("Carteira Strategy Anaytics");
        chart.value.updateSeries([
          {
            name: "Carteira",
            data: dataCarteira.value,
          },
        ]);
        // console.log(walletOptionCurrent.value);
        chart.value.updateOptions(walletOptionCurrent.value);

        chart.value.resetSeries();
      } else {
        // chart.value.toggleSeries("Carteira Strategy Anaytics");
        chart.value.updateSeries([
          {
            name: "Carteira",
            data: dataCarteira.value,
          },
        ]);
        chart.value.updateOptions(walletOption.value);
        chart.value.resetSeries();
      }
    };
    const series = [
      {
        name: "Carteira",
        data: [10, 20, 30, 40, 40, 45, 50],
      },
    ];
    const dataCarteira = computed(() =>
      useStore.currentInvestimentSeries(series[0].data)
    );
    const showTime = () => {
      setTimeout((series[0].data = dataCarteira.value), 2000);
    };
    onMounted(() => {
      showTime();
    });

    return {
      options,
      series,
      walletOption,
      dataCarteira,
      chart,
      toggleValue,
      currencyOrPercentage,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
