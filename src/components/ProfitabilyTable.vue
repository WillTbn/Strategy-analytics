<template>
  <div class="ProfitabilyTable">
    <!-- <div class="q-pa-md">
      <q-table
        square
        title="Rentabilidade"
        class="bg-transparent text-white"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div> -->
    <title-secondary text="Rentabilidade" />
    <div class="row q-ma-lg">
      <div class="row">
        <div class="col-12">
          <p class="text-h5" style="width: 271px">Rentabilidade</p>
        </div>
        <div class="text-header col-2 self-center">
          <p class="bg-primary">Anual</p>
        </div>
        <div class="q-pl-sm text-header col-2 self-start">Média Anual</div>
        <div class="q-pl-sm text-header col-3">Acumulado</div>
        <div class="q-pl-sm text-header col-3">Ano calendário</div>
      </div>
    </div>
    <div class="row border-table q-pa-lg" v-for="row in rows" :key="row">
      <div class="col-3 q-pr-xl self-center">{{ row.name }}</div>
      <q-separator inset color="orange" />
      <div class="col-2 self-center">{{ row.acumulado }}</div>
      <q-separator inset />
      <div class="col-2 self-center">{{ row.ano }}</div>
      <q-separator inset />
      <div class="col-2 self-center">{{ row.calendario }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "./TitleSecondary.vue";

export default defineComponent({
  name: "ProfitabilyTable",
  components: { TitleSecondary },
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
  font-size: 12px;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
.border-table {
  border-bottom: solid 2px #fffffa12;
}
</style>
