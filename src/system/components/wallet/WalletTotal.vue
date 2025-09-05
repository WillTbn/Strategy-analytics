<template>
  <div class="wallet-total col-md-6 col-xs-12">
    <p class="text-h6 text-weight-light">Carteira Total</p>
    <div
      class="text-h3 text-weight-bolder"
      style="line-height: 2rem; margin-top: 1.5rem"
    >
      R$ {{ currentWallet }} <br />
      <b class="text-h6 text-weight-light">
        USD {{ $filters.convertCoin(currentWallet) }}
      </b>
    </div>
    <div
      style="width: 21%; height: 0.4rem; display: flex; border-radius: 8px"
      class="q-my-sm"
    >
      <div
        class="bg-primary"
        style="
          flex: 1 1 20%;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        "
      ></div>
      <div class="bg-info" style="flex: 1 1 45%"></div>
      <div
        class="bg-accent"
        style="
          flex: 1 1 15%;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        "
      ></div>
    </div>
    <div class="actions row q-gutter-md q-mt-sm">
      <q-btn class="btn-pattern-transparent" no-caps @click.prevent="deposit">
        <IconArrowDown
          width="24"
          height="24"
          class="btn-pattern-transparent-icon"
        />
        Depósito
      </q-btn>
      <q-btn
        class="btn-pattern-transparent"
        no-caps
        @click.prevent="dialogTransfer = true"
      >
        <IconTransfer
          width="24"
          height="24"
          class="btn-pattern-transparent-icon"
        />
        Transferência
      </q-btn>
      <q-btn class="btn-pattern-transparent" no-caps :to="{ name: 'Saque' }">
        <IconArrowUp
          width="24"
          height="24"
          class="btn-pattern-transparent-icon"
        />
        Saque
      </q-btn>
    </div>

    <q-dialog v-model="dialogDeposit" persistent>
      <card-deposit />
    </q-dialog>
    <q-dialog v-model="dialogTransfer">
      <card-transfer />
    </q-dialog>
  </div>
</template>

<script setup>
import { IconArrowDown, IconArrowUp, IconTransfer } from "@tabler/icons-vue";
import { defineComponent, defineProps, ref } from "vue";
import CardDeposit from "src/system/layouts/deposit/CardDeposit.vue";
import CardTransfer from "src/system/layouts/deposit/CardTransfer.vue";

defineComponent({
  name: "WalletTotal",
});

const props = defineProps({
  currentWallet: {
    type: [Number, String],
  },
});
const dialogDeposit = ref(false);
const dialogTransfer = ref(false);
const deposit = () => {
  console.log("OLA");
  dialogDeposit.value = true;
};
</script>

<style scoped lang="sass">
/* Seus estilos aqui */
.btn-pattern-transparent-icon
  background: linear-gradient(202.99deg, rgba(0, 0, 0, 0.24) 0.52%, rgba(0, 0, 0, 0.08) 51.12%, rgba(0, 0, 0, 0.04) 99.48%);
  border-radius: 4px
  padding: 4px
  margin-right: 8px
  color:#00A3FF
</style>
