<template>
  <div class="FinallyDeposit row justify-center">
    <div class="col-12 text-center">
      <q-icon name="fa-solid fa-checked" size="lg" />
    </div>
    <div class="col-12 text-center">
      Voce já confimou seu deposito estamos verificando e já retornamos com sua
      solicitação...
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useDepositStore } from "src/stores/deposit";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "FinallyDeposit",
  setup() {
    const depositStore = useDepositStore();
    const { data } = storeToRefs(depositStore);
    return { deposit: data };
  },
});
</script>
<style lang=""></style>
