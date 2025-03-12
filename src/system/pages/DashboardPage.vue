<template>
  <q-page class="DashboardPage">
    <dashboard-layout v-if="isClient" />
    <div class="" v-else>Usuário administrado logado</div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const { data, isClient } = storeToRefs(userStore);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.DashboardPage {
  padding-top: 2px;
}
</style>
