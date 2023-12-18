<template>
  <div class="ProfitabilyTable">
    <div class="row">
      <div class="col-12">
        <p class="text-h5" style="width: 271px">Rentabilidade</p>
      </div>
    </div>
    <q-tabs v-model="tab" class="text-white bg-dark" align="start">
      <q-tab no-caps name="annual" label="Anual" />
      <q-separator dark vertical />
      <q-tab no-caps name="media" label="Média Anual" />
      <q-separator dark vertical />
      <q-tab no-caps name="accrued" label="Acumulado" />
      <q-separator dark vertical />
      <q-tab no-caps name="calendar" label="Calendário" />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      class="shadow-2 rounded-borders bg-transparent"
    >
      <q-tab-panel name="annual">
        <tableannual-layout></tableannual-layout>
      </q-tab-panel>

      <q-tab-panel name="media">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="accrued">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="calendar">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>

    <!--
    <div
      class="row q-py-lg q-my-lg"
      v-for="(row, i) in rows"
      :key="row[i]"
      :class="{ 'border-table': i != 0 }"
    >
      <div
        class="text-control col-md-4 col-xs-2 q-pr-md-xl self-center"
        :class="{ 'text-header': i == 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.name }}
        </span>
      </div>
      <q-separator inset color="orange" />
      <div
        class="text-control col-md-2 col-xs-2 self-center"
        :class="{ 'text-header': i == 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.acumulado }}
        </span>
      </div>
      <q-separator inset />
      <div
        class="text-control col-md-2 col-xs-2 self-center"
        :class="{ 'text-header': i == 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.ano }}
        </span>
      </div>
      <q-separator inset />
      <div
        class="text-control col-md-2 col-xs-2 self-center"
        :class="{ 'text-header': i == 0 }"
      >
        <span :class="{ 'control-span': i !== 0 }">
          {{ row.calendario }}
        </span>
      </div>
    </div>
  --></div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TableannualLayout from "../layouts/TableannualLayout.vue";
// import TitleSecondary from "./TitleSecondary.vue";

export default defineComponent({
  name: "ProfitabilyTable",
  components: { TableannualLayout },
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
