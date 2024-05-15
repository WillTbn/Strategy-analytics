<template>
  <div class="UsersPage q-pa-md">
    <div class="column" width="100dvh">
      <div class="col self-center">
        <span class="text-h5">Ainda sem usuário para listar</span>
      </div>
    </div>
    <div class="column" style="height: 1000px">
      <div class="col self-center">
        <span class="text-h5">Ainda sem usuário para listar</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { onMounted } from "vue";
const storeUser = useUserStore();
const { data } = storeToRefs(storeUser);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
