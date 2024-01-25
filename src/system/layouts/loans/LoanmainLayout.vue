<template>
  <div class="LoanmainLayout">
    <div
      class="row justify-center text-center items-start"
      style="height: 60vh"
    >
      <div class="col-12 self-center">
        <p>De quanto você precisa?</p>
        <q-avatar
          @click.prevent="decreaseValue(50)"
          color="white"
          size="sm"
          text-color="dark"
          icon="fa-solid fa-minus"
         class="btn-update"
          flat
        />
        <span class="control-value f-inter"> R$ {{ loan.value }}.000,00 </span>

        <q-avatar
          @click.prevent="addValue(50)"
          color="white"
          size="sm"
          text-color="dark"
          icon="fa-solid fa-plus"
         class="btn-update"
          flat
        />
        <p class="">Emprestimo minimo R$50.000,00 máximo 500.000,00</p>
      </div>
    </div>
    <div class="row justify-center text-center">
      <div class="col-3">
        <q-btn
          outline
          no-caps
          rounded
          label="Prosseguir"
          class="border-btn"
          flat
          @click.prevent="goStep('details')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useSimulatorStore } from "../../../stores/simulator";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "src/stores/layout";
// import TitleinterMediumm from "../../components/TitleinterMedium.vue";
export default defineComponent({
  name: "LoanmainLayout",
  components: {
    // TitleinterMediumm
  },
  setup() {
    const simulador = useSimulatorStore();
    const layout = useLayoutStore();
    // const { loanSteps } = storeToRefs(layout)
    const { loan } = storeToRefs(simulador);

    return {
      loan,
      addValue: simulador.incrementLoan,
      decreaseValue: simulador.decreaseLoan,
      goStep: layout.updateLoansteps,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style>
.control-value {
  font-feature-settings: "clig" off, "liga" off;

  font-size: 60px;
  font-style: bolder;
  font-weight: 800;
  line-height: 32.5px; /* 90.278% */
}
</style>
