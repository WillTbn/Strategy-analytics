<template>
  <q-page class="PerfomancePage">
    <perfomance-layout v-if="isClient" />
    <div class="" v-else>Usuário administrado logado</div>
  </q-page>
</template>

<script setup>
import { defineComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import PerfomanceLayout from "../layouts/PerfomanceLayout.vue";
import { useUserStore } from "../../stores/user";
import useReport from "src/composables/system/Requests/useReport";

const userStore = useUserStore();
const { data, isClient } = storeToRefs(userStore);
const { getLastreport } = useReport();
onMounted(async () => {
  await getLastreport();
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.PerfomancePage {
  padding-top: 2px;
}
</style>
