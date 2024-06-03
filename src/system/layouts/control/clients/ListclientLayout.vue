<template>
  <div class="ListclientLayout">
    <!-- Seu conteúdo HTML aqui -->
    <div class="row justify-center">
      <q-table
        title="Clientes"
        :rows="usersClient"
        :columns="columnsClient"
        :filter="filter"
        no-data-label="Não encontrei nenhum usuário para exibir."
        no-results-label="Esse filtro não encontrou nenhum resultado"
        row-key="name"
        :loading="loading"
        v-bind="{ ...$tableStyle }"
      >
      </q-table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useClient from "src/composables/system/Requests/useClient";

export default defineComponent({
  name: "ListclientLayout",
  setup() {
    const filter = ref("");
    const { loading, getAllClient, columnsClient, usersClient } = useClient();
    onMounted(async () => {
      await getAllClient();
    });
    return { filter, loading, columnsClient, usersClient };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
