<template>
  <div class="PixqrcodeLayout row text-center justify-center">
    <!-- Seu conteúdo HTML aqui -->
    <div class="col-8 q-mb-lg">Valor R$ {{ deposit.value }}</div>
    <div class="col-12">
      <qrcode-vue :value="qrcode" :size="200" level="H" />
    </div>
    <div class="col-8">
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          {{ qrcode }}

          <q-card-actions vertical class="justify-around q-px-md">
            <q-btn
              flat
              round
              color="red"
              icon="fa-regular fa-copy"
              @click.prevent="copyCode"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="row justify-around text-center">
    <div class="col-6 q-mt-lg">
      <q-btn
        color="negative"
        label="Cancelar ou mudar valor"
        icon="fa-solid fa-trash"
        @click.prevent="deleteDeposit(deposit.id)"
      />
    </div>
    <div class="col-6 q-mt-lg">
      <q-btn
        color="positive"
        label="Confirmar pagamento"
        icon="fa-solid fa-check-double"
        @click.prevent="sendReceipt = true"
      />
    </div>
  </div>
  <q-dialog v-model="sendReceipt" persistent v-bind="{ ...$dialogCard }">
    <Uploadreceipt-layout />
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { useDepositStore } from "src/stores/deposit";
import { storeToRefs } from "pinia";
import UploadreceiptLayout from "src/system/layouts/deposit//UploadreceiptLayout.vue";
import useDeposit from "src/composables/system/Requests/useDeposit";
export default defineComponent({
  name: "PixqrcodeLayout",
  components: { QrcodeVue, UploadreceiptLayout },
  setup() {
    const depositStore = useDepositStore();
    const { step, qrcode, data, sendReceipt } = storeToRefs(depositStore);
    const { deleteDeposit } = useDeposit();
    const copyCode = () => {
      navigator.clipboard.writeText(qrcode.value);
    };
    return { qrcode, copyCode, deposit: data, sendReceipt, deleteDeposit };
  },
  // Outras configurações do componente aquifirst
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
