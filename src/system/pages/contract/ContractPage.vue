<template>
  <q-page class="contract-page q-ma-lg">
    <title-page
      title="Nome do Contrato XPTO 2024 - 2030"
      :breadcrumbs="[{ label: 'contratos' }, { label: 'Detalhe do Contrato' }]"
    />
    <over-view-contract-layout />
    <analyse-graphic-layout />
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import TitlePage from "src/system/components/TitlePage.vue";
import OverViewContractLayout from "src/system/layouts/contracts/OverViewContractLayout.vue";
import AnalyseGraphicLayout from "src/system/layouts/contracts/AnalyseGraphicLayout.vue";
defineComponent({
  name: "ContractPage",
});
// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
