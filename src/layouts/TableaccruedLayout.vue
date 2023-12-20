<template>
  <div class="TableaccruedLayout">
    <!-- Seu conteúdo HTML aqui -->
    <table-personal :rows="rows" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TablePersonal from "../components/TablePersonal.vue";
export default defineComponent({
  name: "TableaccruedLayout",
  components: { TablePersonal },
  setup() {
    const rows = [
      {
        name: "",
        acumulado: "No ano",
        ano: "1m",
        calendario: "3m",
        five: "6m",
        six: "1a",
        seven: "3a",
        eight: "5a",
        nine: "10a",
        ten: "início",
      },
      {
        name: "Retorno total (%)",
        acumulado: "16,42",
        ano: "12,57",
        calendario: "10.08",
        five: "17,76",
        six: "13,67",
        seven: "17,86",
        eight: "43,10",
        nine: "140,84",
        ten: "237,47",
      },
      {
        name: "Índice de referência (%)",
        acumulado: "16,04",
        ano: "12,54",
        calendario: "10,01",
        five: "17,53",
        six: "13,20",
        seven: "17,93",
        eight: "43,26",
        nine: "140,62",
        ten: "247,94",
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
