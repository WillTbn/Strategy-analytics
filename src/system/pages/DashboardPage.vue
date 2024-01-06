<template>
  <q-page class="DashboardPage">
    <dashboard-layout />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

export default defineComponent({
  name: "DashboardPage",
  components: { DashboardLayout },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
