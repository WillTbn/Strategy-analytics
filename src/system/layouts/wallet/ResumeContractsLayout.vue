<template>
  <q-card
    class="resume-contracts-layout bg-transparent card-wallet row q-mt-xl q-pa-sm"
  >
    <div class="col-12 q-pa-sm">
      <h2 class="text-h7">
        Contratos
        <q-btn color="primary" flat no-caps>
          Ver mais
          <IconArrowRight class="q-ml-xs" />
        </q-btn>
      </h2>
    </div>
    <div class="col-12">
      <contract-section
        v-for="contract in contracts"
        :key="contract.id"
        :name="contract.nome"
        :currentBalance="contract.currentBalance"
        :currentEntry="contract.currentEntry"
        :profitDistributionBalance="contract.profitDistributionBalance"
        :distributionDate="contract.distributionDate"
        :icon="contract.icon"
        :isActive="contract.id === contractSection"
        @select="contractSelect(contract.id)"
        @closed="contractSection = null"
      >
        <div class="row">
          <div class="col-8">
            <component
              :is="contract.chart"
              ref="contractSection{{ contract.id }}"
            />
          </div>
        </div>
      </contract-section>
    </div>
  </q-card>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import ContractSection from "src/system/components/wallet/ContractSection.vue";
import ChartComparative from "src/system/components/charts/ChartComparative.vue";

defineComponent({
  name: "ResumeContractsLayout",
});

const contractSection = ref(null);

const contractSelect = (id) => {
  contractSection.value = id;
};
const contracts = [
  {
    id: 1,
    nome: "Expansão de Patrimônio",
    distributionDate: "2023-12-01",
    profitDistributionBalance: 1000,
    currentEntry: 500,
    currentBalance: 1500,
    icon: "IconFileDollar",
    chart: ChartComparative,
  },
  {
    id: 2,
    nome: "Expansão de Patrimônio",
    distributionDate: "2023-12-01",
    profitDistributionBalance: 1000,
    currentEntry: 500,
    currentBalance: 1500,
    icon: "IconFileDollar",
    chart: ChartComparative,
  },
];
</script>

<style scoped></style>
