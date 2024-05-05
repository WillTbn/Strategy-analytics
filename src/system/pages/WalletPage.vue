<template>
  <div class="WalletPage">
    <!-- Seu conteúdo HTML aqui -->
    Aqui virá o layout da carteira do cliente
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <span class="text-h2 text-weight-bolder">
            {{ $filters.currentValue(wallet.current) }}
          </span>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { onMounted, ref } from "vue";

// import WalletLayout from "../layouts/wallet/WalletLayout.vue";
const userStore = useUserStore();
const { data, wallet } = storeToRefs(userStore);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
