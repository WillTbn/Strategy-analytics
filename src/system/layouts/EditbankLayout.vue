<template>
  <div class="EditbankLayout">
    <q-card
      style="min-width: 375px; border-radius: 8px"
      class="q-px-md bg-card-new"
    >
      <q-card-section class="row text-center align-center">
        <div class="col-10" v-if="deleteAction">
          <span class="text-h5 text-weight-bolder">Remove conta bancária</span
          ><br />
          <span class="text-second text-weight-bolder"
            >Confirme em dados e clique em remover</span
          >
        </div>
        <div class="col-10 text-h6" v-else-if="bankEdit">
          Editando conta bancária
        </div>
        <div class="col-10 text-h6" v-else>Nova conta bancária</div>
        <q-space />
        <div class="col-1">
          <q-btn icon="close" flat round color="red-14" v-close-popup />
          <!-- <q-icon name="close" color="red-14" v-close-popup /> -->
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit.prevent.stop="onSubmit">
          <div class="">
            <span class="text-primary text-weight-bold">Banco:</span><br />
            <q-input
              v-bind="{ ...$inputBankStyle }"
              v-model="accountEdit.bank"
              :disable="loading || deleteAction"
              :loading="loading"
              :rules="emptyRule"
            />
          </div>
          <div class="">
            <span class="text-primary text-weight-bold">Agencia:</span><br />
            <q-input
              v-bind="{ ...$inputBankStyle }"
              v-model="accountEdit.agency"
              :disable="loading || deleteAction"
              :loading="loading"
              :rules="emptyRule"
            />
          </div>
          <div class="">
            <span class="text-primary text-weight-bold">Conta:</span><br />
            <q-input
              v-bind="{ ...$inputBankStyle }"
              v-model="accountEdit.number"
              :disable="loading || deleteAction"
              :loading="loading"
              :rules="emptyRule"
            />
          </div>
          <div class="q-mb-lg">
            <span class="text-primary text-weight-bold">Apelido(opcional):</span
            ><br />
            <q-input
              v-bind="{ ...$inputBankStyle }"
              v-model="accountEdit.nickname"
              :disable="loading || deleteAction"
              :loading="loading"
            />
          </div>
          <div class="q-mb-lg" v-if="itMainAccount != true">
            <q-checkbox
              v-model="accountEdit.main_account"
              label="Torna essa conta como principal"
              :true-value="1"
              :false-value="null || false || 0"
              :disable="deleteAction"
            />
          </div>
          <div class="row text-center">
            <div class="col-12">
              <!-- v-else-if="bankEdit" -->
              <q-btn
                v-if="deleteAction"
                no-caps
                label="Remover"
                outline
                color="red-14"
                @click.prevent="confirmDelete = true"
              />
              <q-btn
                v-else-if="bankEdit"
                no-caps
                label="Upload"
                color="indigo-14"
                type="submit"
                outline
              />

              <q-btn
                v-else
                outline
                no-caps
                label="Salvar"
                color="green-14"
                type="submit"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
      <q-dialog v-model="confirmDelete">
        <q-card style="width: 300px">
          <q-card-section> Tem certeza dessa ação? </q-card-section>

          <q-card-actions class="bg-red text-white row justify-between">
            <q-btn flat label="Cancelar" v-close-popup class="col" />
            <q-btn
              flat
              label="confirmar"
              class="col"
              @click.prevent="deleted(accountEdit.id)"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" v-close-popup />
      </q-card-actions> -->
    </q-card>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import useBank from "src/composables/system/Requests/useBank";
export default defineComponent({
  name: "EditbankLayout",
  props: {
    bankEdit: { type: Number },
    deleteAction: { type: Boolean, default: false },
  },
  setup() {
    const store = useUserStore();
    const { accountEdit } = storeToRefs(store);
    const { loading, updateOrCreate, deleted, updateBank } = useBank();
    const data = ref({});
    const bank = ref();
    const confirmDelete = ref(false);
    const itMainAccount = ref(false);
    onMounted(() => {
      if (accountEdit.value) {
        itMainAccount.value = accountEdit.value.main_account;
      }
    });
    onBeforeUnmount(() => {
      if (accountEdit.value.length > 0) {
        data.value = accountEdit[0];
      }
    });
    const onSubmit = async () => {
      if (accountEdit.value.id) {
        await updateBank(accountEdit.value);
      } else {
        await updateOrCreate(accountEdit.value);
      }
      // console.log(accountEdit.value);
    };

    return {
      accountEdit,
      data,
      onSubmit,
      loading,
      confirmDelete,
      deleted,
      emptyRule: [(val) => (val && val.length > 0) || "Por favor digite algo"],
      itMainAccount,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.bg-card-new {
  background-color: rgba(0, 0, 0, 0.778);
}
/* Estilos específicos do componente aqui */
input[type="text"] {
  width: 100%;
}
</style>
