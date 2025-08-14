<template>
  <div class="ChartWallet col-md-6 col-xs-12" id="chart">
    <apexchart
      :key="timeSelect"
      type="area"
      height="170"
      ref="chart"
      :options="walletOption"
      :series="series"
    ></apexchart>
    <div class="row text-end align-center self-center justify-end">
      <div class="col-9 col-md-8 col-xs-12 row items-center">
        <div class="col-2 text-muted">Periodo:</div>
        <q-btn-group
          class="row q-gutter-sm"
          style="box-shadow: none !important"
        >
          <q-btn
            v-for="(item, index) in optionsTime"
            :key="index"
            :color="timeSelect == item.value ? 'primary' : ''"
            :label="item.label"
            :value="item.value"
            @click="timeSelect = item.value"
            style="border-radius: 8px"
          />
        </q-btn-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, computed, ref, onMounted } from "vue";
import useCharts from "src/composables/useCharts";
defineComponent({
  name: "ChartWallet",
});
const chart = ref(null);
const { walletOption } = useCharts();
// Dados da carteira
const initialValue = 50000;
const finalValue = 76564.78;
const months = ["JAN", "FEV", "MAR", "ABRIL", "MAI", "JUN", "JUL", "AGO"];
const optionsTime = [
  { label: "2025", value: "2025" },
  { label: "1M", value: "1M" },
  { label: "6M", value: "6M" },
  { label: "12M", value: "12M" },
  { label: "Máximo", value: "Máximo" },
];
// Calcular os valores mensais com crescimento linear
const timeSelect = ref("2025");
const calculateMonthlyValues = () => {
  const monthCount = months.length;
  const increment = (finalValue - initialValue) / (monthCount - 1);
  const values = [];

  for (let i = 0; i < monthCount; i++) {
    values.push(initialValue + increment * i);
  }

  return values;
};
const series = ref([
  {
    name: "Saldo da Carteira",
    data: calculateMonthlyValues(),
  },
]);
// import useCharts from "../../composables/useCharts";
// import { useUserStore } from "../../stores/user";
// import { storeToRefs } from "pinia";
// export default defineComponent({
//   name: "ChartWallet",
//   setup() {
//     const chart = ref(null);
//     const { walletOption, walletOptionCurrent } = useCharts();
//     const options = ref();
//     const useStore = useUserStore();
//     const { walletChart } = storeToRefs(useStore);
//     const currencyOrPercentage = ref(false);
//     const toggleValue = () => {
//       // console.log(chart.value);
//       currencyOrPercentage.value = !currencyOrPercentage.value;
//       // console.log("currencyOrPercentage.value ->", currencyOrPercentage.value);
//       if (currencyOrPercentage.value) {
//         // chart.value.toggleSeries("Carteira Strategy Anaytics");
//         chart.value.updateSeries([
//           {
//             name: "Carteira",
//             data: dataCarteira.value,
//           },
//         ]);
//         // console.log(walletOptionCurrent.value);
//         chart.value.updateOptions(walletOptionCurrent.value);

//         chart.value.resetSeries();
//       } else {
//         // chart.value.toggleSeries("Carteira Strategy Anaytics");
//         chart.value.updateSeries([
//           {
//             name: "Carteira teste",
//             data: dataCarteira.value,
//           },
//         ]);
//         chart.value.updateOptions(walletOption.value);
//         chart.value.resetSeries();
//       }
//     };
//     const series = [
//       {
//         name: "Carteira",
//         data: [0.014, 0.02, 0.03, 0.04, 0.04, 0.045, 0.05],
//       },
//     ];
//     const dataCarteira = computed(() =>
//       useStore.currentInvestimentSeries(series[0].data),
//     );
//     const showTime = () => {
//       setTimeout(() => {
//         series[0].data = dataCarteira.value;
//         chart.value.updateOptions(walletOption.value);
//       }, 2000);
//       // setTimeout((), 1000);
//     };
//     onMounted(() => {
//       showTime();
//     });

//     return {
//       options,
//       series,
//       walletOption,
//       dataCarteira,
//       chart,
//       toggleValue,
//       currencyOrPercentage,
//       walletChart,
//     };
//   },
//   // Outras configurações do componente aqui
// });
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
