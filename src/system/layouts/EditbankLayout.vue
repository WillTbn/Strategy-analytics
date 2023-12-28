<template>
  <div class="EditbankLayout">
    <q-card style="min-width: 350px">
      <q-card-section class="row text-center">
        <div class="text-h6 col-12" v-if="accountEdit.bank">Editar conta</div>
        <div class="col-12" v-else>Nova conta bancária</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form>
          <div class="q-mb-lg">
            <span class="text-primary text-weight-bold">Banco:</span><br />
            <input
              type="text"
              name="name"
              v-model="accountEdit.bank"
              id="name"
            />
          </div>
          <div class="q-mb-lg">
            <span class="text-primary text-weight-bold">Agencia:</span><br />
            <input
              type="text"
              name="agency"
              v-model="accountEdit.agency"
              id="agency"
            />
          </div>
          <div class="q-mb-lg">
            <span class="text-primary text-weight-bold">Conta:</span><br />
            <input
              type="text"
              name="number"
              v-model="accountEdit.number"
              id="number"
            />
          </div>
          <div class="q-mb-lg">
            <span class="text-primary text-weight-bold">Apelido(opcional):</span
            ><br />
            <input
              type="text"
              name="nickname"
              v-model="accountEdit.nickname"
              id="nickname"
            />
          </div>
          <div class="row text-center">
            <div class="q-mb-lg col-12">
              <q-btn
                outline
                color="primary"
                label="Salvar"
                type="submit"
                text-color="dark"
                no-caps
              />
            </div>
          </div>
        </q-form>
      </q-card-section>

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

export default defineComponent({
  name: "EditbankLayout",
  props: {
    bankEdit: { type: Number },
  },
  setup() {
    const store = useUserStore();
    const { accountEdit } = storeToRefs(store);
    const data = ref({});
    const bank = ref();
    onBeforeUnmount(() => {
      if (accountEdit.length > 0) {
        console.log("ESTOU DENTRO DO IF", accountEdit[0]);
        data.value = accountEdit[0];
      }
    });

    return { accountEdit, data };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
input[type="text"] {
  width: 100%;
}
</style>
