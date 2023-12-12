<template>
  <div class="ProfitabilyTable">
    <div class="row">
      <div class="col-12">
        <p class="text-h5" style="width: 271px">Rentabilidade</p>
      </div>
    </div>
    <!-- <div class="row"> -->

    <!-- </div> -->
    <!-- <div class="row q-mt-xl q-pt-xl">
      <div class="text-header col-2 self-center">
        <p class="bg-primary">Anual</p>
      </div>
      <div class="q-pl-sm text-header col-3 self-start">Média Anual</div>
      <div class="q-pl-sm text-header-b col-2">Acumulado</div>
      <div class="q-pl-sm text-header col-3">Ano calendário</div>
    </div> -->
    <!-- </div> -->
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
  </div>
  <!-- <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="touch-only"
    /> -->
</template>

<script>
import { defineComponent } from "vue";
// import TitleSecondary from "./TitleSecondary.vue";

export default defineComponent({
  name: "ProfitabilyTable",
  components: {},
  setup() {
    const columns = [
      {
        name: "name",
        required: true,
        label: "Anual Media",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "acumulado",
        align: "center",
        label: "Acumulado",
        field: "acumulado",
        sortable: true,
      },
      { name: "ano", label: "Ano", field: "ano", sortable: true },
      { name: "calendario", label: "Calendário", field: "calendario" },
    ];

    const rows = [
      {
        name: "Anual Média Anual",
        acumulado: "Acumulado",
        ano: "Ano",
        calendario: "Calendário",
      },
      {
        name: "",
        acumulado: "30/11/2021 Até 30/11/2022",
        ano: "30/11/2021 Até 30/11/2022",
        calendario: "30/11/2022 Até 30/11/2023",
      },
      {
        name: "Retorno total (%) a 30 de set 2023",
        acumulado: "56,30",
        ano: "34,23",
        calendario: "38,43",
      },
      {
        name: "Índice de referência (%) a 30 set 2023",
        acumulado: "57,29",
        ano: "35,43",
        calendario: "39,29",
      },
    ];
    return { columns, rows };
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
