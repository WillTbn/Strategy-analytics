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
        :key="walletChart"
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
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "ChartWallet",
  setup() {
    const chart = ref(null);
    const { walletOption, walletOptionCurrent } = useCharts();
    const options = ref();
    const useStore = useUserStore();
    const { walletChart } = storeToRefs(useStore);
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
            name: "Carteira teste",
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
        data: [0.014, 0.02, 0.03, 0.04, 0.04, 0.045, 0.05],
      },
    ];
    const dataCarteira = computed(() =>
      useStore.currentInvestimentSeries(series[0].data)
    );
    const showTime = () => {
      setTimeout(() => {
        series[0].data = dataCarteira.value;
        chart.value.updateOptions(walletOption.value);
      }, 2000);
      // setTimeout((), 1000);
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
      walletChart,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
