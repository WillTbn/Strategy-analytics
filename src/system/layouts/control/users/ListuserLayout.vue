<template>
  <div class="ListuserLayout">
    <div class="row justify-center">
      <q-table
        flat
        bordered
        title="Usuários"
        :rows="usersAdm"
        :columns="columnsAdm"
        :filter="filter"
        no-data-label="Não encontrei nenhum usuároi para exibir."
        no-results-label="Esse filtro não encontrou nenhum resultado"
        row-key="name"
        class="col-8"
        :loading="loading"
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:no-data="{ icon, message, filter }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="2em" name="sentiment_dissatisfied" />
            <span> Well this is sad... {{ message }} </span>
            <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
          </div>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <div class="row justify-end q-gutter-sm">
              <resend-email
                v-if="!props.row.email_verified_at"
                :token="props.row.access_token.id"
              />
              <!-- <q-btn
                v-if="!props.row.email_verified_at"
                color="green"
                label="Resend email"
                @click="resendEmail(props.row)"
              /> -->
              <!-- <q-btn
                color="red"
                label="excluir"
                @click="confirmAction(props.row)"
              /> -->
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import useAdm from "src/composables/system/Requests/useAdm";
import { defineComponent, onMounted, ref } from "vue";
import ResendEmail from "src/system/components/ResendEmail.vue";
export default defineComponent({
  name: "ListuserLayout",
  components: {
    ResendEmail,
  },
  setup() {
    const rows = [];
    const filter = ref("");
    const { loading, usersAdm, getAllAdm } = useAdm();
    const columnsAdm = [
      {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: (row) => row.id,
        format: (val) => `#00${val}`,
        sortable: true,
      },
      {
        name: "name",
        align: "left",
        label: "Nome",
        field: "name",
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
      },
      {
        name: "role_id",
        label: "Papel",
        field: "role_id",
        format: (val) => (val == 1 ? `Master` : "Funcionário"),
        align: "center",
        sortable: true,
      },
      // {
      //   name: "audio",
      //   label: "Audio",
      //   field: (row) => row.audio,
      //   format: (val) => {
      //     return val == null ? "X" : val;
      //   },
      // },
      { name: "actions", label: "Ações", align: "center", field: "action" },
    ];
    const resendEmail = (data) => {
      console.log(data);
    };
    onMounted(async () => {
      await getAllAdm();
    });

    return { usersAdm, columnsAdm, loading, filter, resendEmail };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
