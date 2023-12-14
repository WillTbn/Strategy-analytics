<template>
  <div class="DashboardLayout row q-gutter-x-sm q-gutter-y-lg container">
    <div class="col-7">
      <div class="row">
        <div class="col-md-6 q-px-sm">
          <q-card class="card-container" bordered>
            <q-card-section>
              <profitdistribution-layout />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6">
          <q-card class="card-container">
            <q-card-section>
              <loan-layout />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-12 col-chart">
          <q-card class="card-container">
            <q-card-section>
              <wallet-layout />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!--  TABS -->
    <div class="col-4">
      <q-card class="card-relatorio">
        <q-card-section> <report-layout /></q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProfitdistributionLayout from "../layouts/ProfitdistributionLayout.vue";
import LoanLayout from "../layouts/LoanLayout.vue";
import WalletLayout from "../layouts/WalletLayout.vue";
import ReportLayout from "./ReportLayout.vue";

export default defineComponent({
  name: "DashboardLayout",
  components: {
    ProfitdistributionLayout,
    LoanLayout,
    WalletLayout,
    ReportLayout,
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.container {
  padding: 1.5rem 1rem;
}
.card-container {
  min-height: 277px;
  max-height: 290px;
}
.card-relatorio {
  min-height: 90vh;
  min-width: 100%;
}
.q-card__section--vert {
  padding: 0.5rem 0.5rem 0 0.5rem !important;
}
.q-card {
  border-radius: 10px;
}
/* q-mt-lg q-ml-sm */
.col-chart {
  margin: 3.5rem 5rem 0 0.5rem;
  padding-right: 0.5rem;
}
</style>
