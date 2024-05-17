<template>
  <q-page class="ControlreportPage">
    <titlebody-layout textTitle="Controle de relatórios" />
    <action-layout />
    <listreport-layout />
  </q-page>
</template>

<script setup>
import TitlebodyLayout from "../layouts/TitlebodyLayout.vue";
import ListreportLayout from "../layouts/control/ListreportLayout.vue";
import ActionLayout from "../layouts/control/ActionLayout.vue";
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
