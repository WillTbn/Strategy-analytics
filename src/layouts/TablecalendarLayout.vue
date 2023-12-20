<template>
  <div class="TablecalendarLayout">
    <!-- Seu conteúdo HTML aqui -->
    <table-personal :rows="rows" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TablePersonal from "../components/TablePersonal.vue";
export default defineComponent({
  name: "TablecalendarLayout",
  components: { TablePersonal },
  setup() {
    const rows = [
      {
        name: "",
        acumulado: "2018",
        ano: "2019",
        calendario: "2020",
        five: "2021",
        six: "2022",
      },
      {
        name: "Retorno total (%)",
        acumulado: "14,89",
        ano: "31,38",
        calendario: "2,79",
        five: "-11,88",
        six: "5,11",
      },
      {
        name: "Índice de referência (%)",
        acumulado: "15,03",
        ano: "31,58",
        calendario: "2,92",
        five: "-11,93",
        six: "4,69",
      },
    ];
    return { rows };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
