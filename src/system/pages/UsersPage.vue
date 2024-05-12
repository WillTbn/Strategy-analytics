<template>
  <div class="UsersPage">
    <h1>Aqui ficará todos os usuários</h1>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
const storeUser = useUserStore();
const { data } = storeToRefs(storeUser);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
