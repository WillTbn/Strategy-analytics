<template>
  <div class="WalletPage">
    <!-- Seu conteúdo HTML aqui -->

    <div class="q-pa-md row justify-between q-gutter-md q-pa-xl">
      <q-card class="my-card q-pr-xl">
        <q-card-section class="q-mx-xl">
          <div class="text-subtitle2">Saldo</div>
          <span class="text-h2 text-weight-bolder">
            {{ $filters.currentValue(wallet.current_balance) }}
          </span>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-pr-xl">
        <q-card-section class="q-mx-xl">
          <div class="text-subtitle2">Total investido</div>
          <span class="text-h2 text-weight-bolder">
            {{ $filters.currentValue(wallet.current_investment) }}
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
const { data, wallet, investment } = storeToRefs(userStore);
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
