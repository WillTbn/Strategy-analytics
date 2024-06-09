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
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div class="row justify-end q-gutter-sm">
              <q-btn
                v-bind="{ ...$btnTable }"
                color="green"
                @click="editRole(props.row)"
                icon="fa-solid fa-user-lock"
              />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="roleControl" v-bind="{ ...$dialogCard }">
      <roleuser-layout :user="userPermisson" />
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useClient from "src/composables/system/Requests/useClient";
import RoleuserLayout from "../users/RoleuserLayout.vue";

export default defineComponent({
  name: "ListclientLayout",
  components: {
    RoleuserLayout,
  },
  setup() {
    const filter = ref("");
    const { loading, getAllClient, columnsClient, usersClient } = useClient();
    const editRole = (user) => {
      roleControl.value = true;
      userPermisson.value = user;
      console.log("vamos ver o user -> ", user);
    };
    const roleControl = ref(false);
    const userPermisson = ref();
    onMounted(async () => {
      await getAllClient();
    });
    return {
      filter,
      loading,
      columnsClient,
      usersClient,
      roleControl,
      userPermisson,
      editRole,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
