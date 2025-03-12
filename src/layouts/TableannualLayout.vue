<template>
  <div class="TableannualLayout">
    <table-personal :rows="tableRow" />
  </div>
</template>

<script>
import TablePersonal from "../components/TablePersonal.vue";
import { defineComponent, ref } from "vue";
import { useStoreLayout } from "../stores/layoutStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "TableannualLayout",
  components: { TablePersonal },
  props: { tableRow: { type: Array } },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
