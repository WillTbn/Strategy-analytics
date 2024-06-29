<template>
  <div
    class="FinallydepositLayout row justify-center items-center"
    style="height: 100vh"
  >
    <div class="col-12 text-center">
      <q-icon name="fa-solid fa-check-to-slot" size="10rem" color="positive" />
      <br />
      <p class="text-weight-bolder">Valor R$ {{ deposit.value }}</p>
    </div>
    <div class="col-12 text-center text-h6">
      <p class="text-weight-bolder">
        Voce já confimou seu deposito estamos verificando e já já retornamos com
        sua solicitação...
        <q-icon
          name="fa-solid fa-face-smile-wink"
          class="q-mb-sm"
          color="warning"
          size="sm"
        />
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useDepositStore } from "src/stores/deposit";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "FinallydepositLayout",
  setup() {
    const depositStore = useDepositStore();
    const { data } = storeToRefs(depositStore);
    return { deposit: data };
  },
});
</script>
<style lang=""></style>
