<template>
  <div class="TablemediaLayout">
    <!-- <q-table
      class="bg-transparent text-white"
      :rows="rows"
      :columns="columns"
      row-key="name"
      table-class="my-special"
      card-class="my-special"
      hide-pagination
    /> -->
    <table-personal :rows="rows" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TablePersonal from "../components/TablePersonal.vue";
export default defineComponent({
  name: "TablemediaLayout",
  components: { TablePersonal },
  setup() {
    const columns = [
      {
        name: "name",
        required: true,
        label: "",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "calories",
        align: "center",
        label: "1a",
        field: "acumulado",
        sortable: true,
      },
      { name: "Ano", label: "3a", field: "ano", sortable: true },
      { name: "calendario", label: "5a", field: "calendario" },
      { name: "five", label: "10a", field: "five" },
      { name: "six", label: "início", field: "six" },
    ];

    const rows = [
      {
        name: "",
        acumulado: "1a",
        ano: "3a",
        calendario: "5a",
        five: "10a",
        six: "início",
      },
      {
        name: "Retorno total (%)",
        acumulado: "13.67",
        ano: "5,63",
        calendario: "7,43",
        five: "9,19",
        six: "8,44",
      },
      {
        name: "Índice de referência (%)",
        acumulado: "13,20",
        ano: "5,35",
        calendario: "7,30",
        five: "9,67",
        six: "5,66",
      },
    ];
    return { rows, columns };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.my-special {
  font-size: 15px;

  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
</style>
