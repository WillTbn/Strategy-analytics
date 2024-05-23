<template>
  <div class="WalletPage">
    <!-- Seu conteúdo HTML aqui col-12 col-md q-mb-md-lg  q-mb-xs-md-->

    <div class="q-pa-md row justify-between q-pa-xl">
      <div class="col-12 col-md-6 q-pa-xl q-mb-md-lg q-mb-xs-md" height="10rem">
        <div class="text-subtitle2">Patrimônio nos EUA</div>
        <span class="text-h2 text-weight-bolder text-grey-7">
          {{ $filters.currentValue(wallet.current_balance) }}
        </span>
        <br />
        <u class="text-subtitle2 text-weight-bolder text-grey-7">
          Entenda seu Patrimônio
        </u>
      </div>
      <div
        class="col-12 col-md-6 q-pa-xl q-mb-md-lg q-mb-xs-md bg-grey-3 text-grey-7"
        height="10rem"
        style="border-radius: 14px"
      >
        <div class="text-subtitle2">Disponivel para investir</div>
        <span class="text-h2 text-weight-bolder">
          {{ $filters.currentValue(wallet.current_investment) }}
        </span>
      </div>
    </div>
    <div class="row q-pa-xl">
      <div class="col card-border">
        <q-icon
          name="fa-solid fa-money-bill-transfer"
          class="q-pa-sm"
          size="2rem"
        />
        <br />
        <span class="text-h5">Depósito</span>
      </div>
      <div class="col card-border">
        <q-icon
          name="fa-solid fa-arrow-right-arrow-left"
          class="q-pa-sm"
          size="2rem"
        />
        <br />
        <span class="text-h5">Câmbio</span>
      </div>
      <div class="col card-border">
        <q-icon name="fa-solid fa-arrow-down" class="q-pa-sm" size="2rem" />
        <br />
        <span class="text-h5">Retirada</span>
      </div>
    </div>
    <div class="row q-pa-xl">
      <balance-items
        icon="img:../../system/icons/bandeira-do-brasil.png"
        title="Brasil"
      />
      <balance-items
        icon="fa-solid fa-money-bill-wave"
        title="investimentos"
        cipher="$"
      />
      <balance-items
        icon="fa-solid fa-building-columns"
        title="Banking"
        cipher="U$"
      />
    </div>
    <!-- http://localhost:9010/system/icons/brasil.svg -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { onMounted, ref } from "vue";
import BalanceItems from "../components/wallet/BalanceItems.vue";

// import WalletLayout from "../layouts/wallet/WalletLayout.vue";
const userStore = useUserStore();
const { data, wallet, investment } = storeToRefs(userStore);
</script>

<style scoped>
.card-border {
  border-radius: 18px;
  border: solid 1px gray;
  padding: 1rem;
  margin-right: 12px;
}
/* Estilos específicos do componente aqui */
</style>
