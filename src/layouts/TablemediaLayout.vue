<template>
  <div class="TablemediaLayout">
    <!-- Seu conteúdo HTML aqui -->
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
    return { rows };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
