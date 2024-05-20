<template>
  <div class="ListuserLayout">
    <div class="row justify-center" v-if="step == 'list'">
      <q-table
        flat
        bordered
        title="Usuários"
        :rows="usersAdm"
        :columns="columnsAdm"
        :filter="filter"
        no-data-label="Não encontrei nenhum usuário para exibir."
        no-results-label="Esse filtro não encontrou nenhum resultado"
        row-key="name"
        class="col-8"
        :loading="loading"
      >
        <template v-slot:loading>
          <q-inner-loading showing color="primary" />
        </template>
        <template v-slot:top-left>
          <q-btn
            color="primary"
            :disable="loading"
            label="Adicionar novo usuário"
            @click="addUser"
          />
          <!-- <q-btn v-if="rows.length !== 0" class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
          <!-- <q-space /> -->
        </template>
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
            <span> Bem, ainda estamos procurando {{ message }} </span>
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
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
    <create-useradm v-else @step-view="(v) => (step = v)" />
  </div>
</template>

<script>
import useAdm from "src/composables/system/Requests/useAdm";
import { defineComponent, onMounted, ref } from "vue";
import ResendEmail from "src/system/components/ResendEmail.vue";
import CreateUseradm from "./CreateUseradm.vue";
export default defineComponent({
  name: "ListuserLayout",
  components: {
    ResendEmail,
    CreateUseradm,
  },
  setup() {
    const rows = [];
    const filter = ref("");
    const step = ref("list");
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
      {
        name: "actions",
        label: "Ações",
        align: "center",
        field: "action",
        step,
      },
    ];
    const resendEmail = (data) => {
      console.log(data);
    };
    onMounted(async () => {
      await getAllAdm();
    });
    const addUser = () => {
      step.value = "createUser";
    };

    return {
      usersAdm,
      columnsAdm,
      step,
      loading,
      filter,
      resendEmail,
      addUser,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
