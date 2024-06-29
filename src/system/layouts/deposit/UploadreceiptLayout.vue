<template>
  <q-card class="UploadreceiptLayout" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Enviando Comprovante</div>
    </q-card-section>
    <q-card-section>
      <q-file
        filled
        bottom-slots
        v-model="receipt.upload"
        label="Comprovante"
        counter
        ref="uploadRef"
        accept=""
      >
        <!-- :rules="[
          (val) =>
            (!!val && !!receipt.transaction) ||
            'Um dos campos devem se preeenchido',
        ]" -->
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="receipt.upload = null"
            class="cursor-pointer"
          />
        </template>

        <!-- <template v-slot:hint>
          Field hint
        </template> -->
      </q-file>
    </q-card-section>
    <q-card-section>
      <q-input
        v-bind="{ ...$inputStyle }"
        v-model.lazy="receipt.transaction"
        label="ID da transação"
        :rules="[(val) => validateID(val) || 'No mínimo 20 caracters.']"
        ref="transactionRef"
        class="col-6 col-md-3 col-sm-6"
      />
      <!-- :loading="loading"
        :disable="loading" -->
    </q-card-section>
    <!-- <q-card-section class="q-pt-none">
      <q-input
        dense
        v-model="address"
        autofocus
        @keyup.enter="prompt = false"
      />
    </q-card-section> -->

    <q-card-actions align="between">
      <q-btn flat label="Cancel" v-close-popup class="text-negative" />
      <q-btn
        flat
        label="enviar Comprovante"
        class="text-primary"
        @click.prevent="uploadReceipt"
      />
    </q-card-actions>
  </q-card>
</template>
<script>
import { storeToRefs } from "pinia";
import { useDepositStore } from "src/stores/deposit";
import { defineComponent, ref } from "vue";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useNotify from "src/composables/useNotify";
import useDeposit from "src/composables/system/Requests/useDeposit";

export default defineComponent({
  name: "UploadreceiptLayout",
  setup() {
    const depositStore = useDepositStore();
    const { receipt } = storeToRefs(depositStore);
    const { alternativeNotify } = useNotify();
    const {
      transactionRef,
      uploadRef,
      validateReceipt,
      validateInitialReceipt,
    } = useRefForm();
    const validateID = (e) => {
      if (e != null && e != undefined && e != "") {
        if (e.length < 20) {
          return false;
        }
      }
      return true;
    };
    const {sendUploadReceipt} = useDeposit()
    // uploadReceipt
    const uploadReceipt = async () => {
      validateInitialReceipt();
      if (!receipt.value.upload && !receipt.value.transaction) {
        alternativeNotify(
          "Selecione o comprovante ou nos mande o ID da transação",
          40000
        );
        return;
      }
      if (!validateReceipt() && validateID()) {
        console.log(receipt.value);
        await sendUploadReceipt()
      }
    };

    return {
      receipt,
      transactionRef,
      uploadRef,
      uploadReceipt,
      validateID,
    };
  },
});
</script>
<style lang=""></style>
