<template>
  <div class="distribution-contract-layout q-mt-lg col-12 row">
    <div class="col-12">
      <span class="q-ma-sm q-mt-lg">Distribuição</span>
    </div>

    <div class="row justify-between col-12">
      <div
        class="col-auto tool q-mt-md"
        v-for="(item, index) in datasCharts"
        :key="index"
      >
        <component
          :is="componentsMaps[item.componentChart]"
          :name="item.name"
          :title="item.title"
          :labelsArray="item.labelsArray"
          :colorsArray="item.colorsArray"
          :datasSeries="item.datasSeries"
        ></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import DistributionChart from "src/system/components/contract/DistributionChart.vue";
defineComponent({
  name: "DistributionContractLayout",
});
const componentsMaps = {
  DistributionChart,
};
const datasCharts = [
  {
    name: "Mercados",
    title: "Bolsas",
    labelsArray: ["EUA (US)", "Europa (EU)", "Suíça (CH)", "Redes"],
    colorsArray: ["#9875FF", "#06C9BF", "#FFC775", "#EE77A2"],
    datasSeries: [398, 160, 158, 1280],
    componentChart: "DistributionChart",
  },
  {
    name: "Moedas",
    title: "Fiduciárias",
    labelsArray: ["Real (BRL)", "Dálar (USD)", "Criptoativos"],
    colorsArray: ["#EE77A2", "#D582E3", "#9875FF"],
    datasSeries: [167, 322.00000000000006, 1467.6],
    componentChart: "DistributionChart",
  },
  {
    name: "Alocação",
    title: "Alocação",
    labelsArray: ["Intradiário", "Núcleo", "Tática"],
    colorsArray: ["#9875FF", "#06C9BF", "#FFC775"],
    datasSeries: [1472.4, 242.6, 285],
    componentChart: "DistributionChart",
  },
  {
    name: "Mercados",
    title: "Redes",
    labelsArray: [
      "Bitcoin Network",
      "Ethereum",
      "BNB Smart Chain",
      "Solana Mainnet",
      "Cardano Mainnet",
      "Bolsa",
    ],
    colorsArray: [
      "#06C9BF",
      "#9875FF",
      "#CFFF4C",
      "#D582E3",
      "#EE77A2",
      "#FFC775",
    ],
    datasSeries: [219.2, 289, 78.2, 229.6, 1076.4, 716],
    componentChart: "DistributionChart",
  },
  {
    name: "Moedas",
    title: "Criptoativos",
    labelsArray: [
      "Bitcoin (BTC)",
      "Cardano (ADA)",
      "Solana (SOL)",
      "Fiduciárias",
    ],
    colorsArray: ["#06C9BF", "#9875FF", "#EE77A2", "#FFC775"],
    datasSeries: [750, 319.4, 398.2, 489],
    componentChart: "DistributionChart",
  },
  {
    name: "Alocação",
    title: "Alocação",
    labelsArray: ["Intradiário", "Núcleo", "Tática"],
    colorsArray: ["#9875FF", "#06C9BF", "#FFC775"],
    datasSeries: [1472.4, 242.6, 285, 489],
    componentChart: "DistributionChart",
  },
];

// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
