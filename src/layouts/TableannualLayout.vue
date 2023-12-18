<template>
  <div class="TableannualLayout">
    <div class="q-pa-md">
      <q-table
        class="bg-transparent text-white"
        :rows="rows"
        :columns="columns"
        row-key="name"
        loading
        wrap-cells
        loading-label="loading devices"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableannualLayout",
  setup() {
    const columns = [
      {
        name: "name",
        required: true,
        label: "",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
      },
      {
        name: "periodo1",
        align: "center",
        label: "30/11/2021 Até 30/11/2022",
        field: "periodo1",
      },
      {
        name: "periodo2",
        label: "30/11/2021 Até 30/11/2022",
        field: "periodo2",
      },
      {
        name: "periodo3",
        label: "30/11/2022 Até 30/11/2023",
        field: "periodo3",
      },
    ];

    const rows = [
      {
        name: "Retorno total (%) a 30 de set 2023",
        periodo1: "56,30",
        periodo2: "34,23",
        periodo3: "38,43",
      },
      {
        name: "Índice de referência (%) a 30 set 2023",
        periodo1: "57,29",
        periodo2: "35,43",
        periodo3: "39,29",
      },
    ];
    return { columns, rows };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
