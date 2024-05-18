<template>
  <q-page>
    <titlebody-layout textTitle="Controle de usuários administradores" />
  </q-page>
</template>

<script setup>
import TitlebodyLayout from "../layouts/TitlebodyLayout.vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { onMounted } from "vue";
const storeUser = useUserStore();
const { data } = storeToRefs(storeUser);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
