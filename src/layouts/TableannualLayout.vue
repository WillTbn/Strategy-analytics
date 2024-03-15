<template>
  <div class="TableannualLayout">
    <table-personal :rows="rows" />
  </div>
</template>

<script>
import TablePersonal from "../components/TablePersonal.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TableannualLayout",
  components: { TablePersonal },
  setup() {
    const statusLoading = ref(false);
    const rows = [
      {
        name: "",
        acumulado: "30/11/2021 Até 30/11/2022",
        ano: "30/11/2021 Até 30/11/2022",
        calendario: "30/11/2022 Até 30/11/2023",
      },
      {
        name: "Retorno total (%) a 1º semestre de 2024",
        acumulado: "56,30",
        ano: "34,23",
        calendario: "38,43",
      },
      {
        name: "Índice de referência (%) a 1º semestre de 2024",
        acumulado: "57,29",
        ano: "35,43",
        calendario: "39,29",
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
