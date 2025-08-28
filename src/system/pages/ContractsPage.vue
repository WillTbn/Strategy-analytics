<template>
  <q-page class="contracts-page q-ma-lg">
    <title-page title="Contratos" subtitle="Contratos" />
    <overview-layout />
    <performance-layout></performance-layout>
  </q-page>
</template>
<script setup>
import TitlePage from "../components/TitlePage.vue";
import OverviewLayout from "../layouts/contracts/OverviewLayout.vue";
import PerformanceLayout from "../layouts/contracts/PerformanceLayout.vue";
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
