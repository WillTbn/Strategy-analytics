<template>
  <div class="LoanPage">
    <div class="row text-center justify-center q-mt-lg">
      <div class="col-12">
        <textarea-title text="Emprestimo" />
      </div>
    </div>
    <q-tab-panels v-model="loanSteps" animated>
      <q-tab-panel name="home"> <loanmain-layout /> </q-tab-panel>

      <q-tab-panel name="details"> <loandetails-layout /> </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LoanmainLayout from "../layouts/loans/LoanmainLayout.vue";

import TextareaTitle from "../components/TextareaTitle.vue";
import { useLayoutStore } from "src/stores/layout";
import { storeToRefs } from "pinia";
import LoandetailsLayout from "../layouts/loans/LoandetailsLayout.vue";

export default defineComponent({
  name: "LoanPage",
  components: { LoanmainLayout, LoandetailsLayout, TextareaTitle },
  setup() {
    const layout = useLayoutStore();
    const { loanSteps } = storeToRefs(layout);
    return { loanSteps };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
