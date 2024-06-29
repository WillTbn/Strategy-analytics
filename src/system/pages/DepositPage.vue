<template>
  <div class="DepositPage">
    <q-page class="DepositPage">
      <titlebody-layout :textTitle="textNow" v-if="step != 'finally'" />
      <q-tab-panels animated class="bg-transparent" v-model="step">
        <q-tab-panel name="first">
          <valuedeposit-layout />
        </q-tab-panel>
        <q-tab-panel name="qrcode">
          <pixqrcode-layout />
        </q-tab-panel>
        <q-tab-panel name="finally">
          <finallydeposit-layout />
        </q-tab-panel>
      </q-tab-panels>
    </q-page>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useDepositStore } from "src/stores/deposit";
import { storeToRefs } from "pinia";
import useDeposit from "../../composables/system/Requests/useDeposit";
import TitlebodyLayout from "../layouts/TitlebodyLayout.vue";
import ValuedepositLayout from "../layouts/deposit/ValuedepositLayout.vue";
import PixqrcodeLayout from "../layouts/deposit/PixqrcodeLayout.vue";
import FinallydepositLayout from "../layouts/deposit/FinallydepositLayout.vue";

const depositStore = useDepositStore();
const { step, already } = storeToRefs(depositStore);
const { verifyInitial } = useDeposit();
const textNow = computed(() => already.value);
onMounted(async () => {
  await verifyInitial();
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
