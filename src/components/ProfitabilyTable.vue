<template>
  <div class="ProfitabilyTable">
    <div class="row">
      <div class="col-12">
        <p class="text-h5" style="max-width: 271px">Rentabilidade</p>
      </div>
    </div>
    <div>
      <q-btn-toggle
        v-model="tab"
        toggle-color="primary"
        no-caps
        spread
        no-wrap
        :options="[
          { label: 'Anual', value: 'annual' },
          { label: 'Média Anual', value: 'media' },
          { label: 'Acumulado', value: 'accrued' },
          { label: 'Calendário', value: 'calendar' },
        ]"
      />
    </div>
    <q-tab-panels
      v-model="tab"
      animated
      class="shadow-2 rounded-borders bg-transparent"
    >
      <q-tab-panel name="annual">
        <tableannual-layout></tableannual-layout>
      </q-tab-panel>

      <q-tab-panel name="media">
        <tablemedia-layout />
      </q-tab-panel>

      <q-tab-panel name="accrued">
        <tableaccrued-layout />
      </q-tab-panel>
      <q-tab-panel name="calendar">
        <tablecalendar-layout />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import TableaccruedLayout from "../layouts/TableaccruedLayout.vue";
import { defineComponent, ref } from "vue";
import TableannualLayout from "../layouts/TableannualLayout.vue";
import TablemediaLayout from "../layouts/TablemediaLayout.vue";
import TablecalendarLayout from "../layouts/TablecalendarLayout.vue";
TablecalendarLayout;

// import TitleSecondary from "./TitleSecondary.vue";

export default defineComponent({
  name: "ProfitabilyTable",
  components: {
    TableannualLayout,
    TablemediaLayout,
    TableaccruedLayout,
    TablecalendarLayout,
  },
  setup() {
    const tab = ref("annual");

    return { tab };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.text-header {
  font-size: 15px;

  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
.text-header-b {
  font-size: 22px;
  font-style: normal;
  text-align: start;
  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
.border-table {
  border-bottom: solid 2px #fffffa12;
}
.control {
  width: 503px;
  height: 51px;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .text-header {
    font-size: 6px !important;
  }
  .text-control {
    font-size: 5px;
  }
  .control-span {
    display: block;
    width: 70px;
  }
}
</style>
