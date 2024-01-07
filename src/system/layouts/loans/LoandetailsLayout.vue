<template>
  <div class="LoandetailsLayout">
    <div
      class="row justify-center text-center items-start"
      style="height: 60vh"
    >
      <div class="col-12 self-center">
        <p>Valor das parcelas</p>
        <span class="control-value f-inter q-py-lg">
          R$ {{ loan.plotValue }},00
        </span>
        <p class="">
          Utilizamos <b>{{ loan.porcentage }}%</b> da distribuição de lucros
          mensal para pagamento da parcela, resultando em uma novo <br />
          valor de <b>R$ {{ loan.contribuition }}</b> para as próximas
          contribuições.
        </p>
      </div>
    </div>
    <div class="row justify-center text-center">
      <div class="col-3">
        <q-btn
          outline
          no-caps
          rounded
          color="primary"
          label="Solicitar agora"
          @click.prevent="goStep('finally')"
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
export default defineComponent({
  name: "LoandetailsLayout",
  setup() {
    const simulador = useSimulatorStore();
    const layout = useLayoutStore();
    // const { loanSteps } = storeToRefs(layout)
    // const { loan } = storeToRefs(simulador);

    return {
      loan: simulador.loan,
      goStep: layout.updateLoansteps,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
