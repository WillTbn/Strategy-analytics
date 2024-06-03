<template>
  <div class="ListreportLayout">
    <div class="row justify-center">
      <q-table
        flat
        bordered
        title="Relalórios"
        :rows="data"
        :columns="columns"
        :filter="filter"
        no-data-label="Não encontrei nada para você"
        no-results-label="O filtro não descobriu nenhum resultado"
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
              <!-- <q-btn
                color="primary"
                label="edit"
                
              /> -->
              <q-btn
                color="green"
                label="view"
                @click="editReport(props.row)"
              />
              <q-btn
                color="red"
                label="excluir"
                @click="confirmAction(props.row)"
              />
            </div>
            <!-- <div class="my-table-details">
              {{ props.row.id }}
            </div> -->
          </q-td>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="confirm" backdrop-filter="hue-rotate(120deg)">
      <q-card class="bg-negative">
        <q-card-section class="row items-center">
          <q-avatar
            icon="fa-solid fa-circle-exclamation"
            text-color=""
            size="7rem"
          />
          <!-- color="yellow" -->
          <span class="q-ml-sm"
            >Voce irá excluir o relátorio "{{ delData.title }}".</span
          >
        </q-card-section>
        <!-- <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> -->
        <q-card-actions align="around">
          <q-btn label="Cancel" color="primary" v-close-popup />
          <q-btn
            label="Confirmar"
            color="positive"
            @click.prevent="deleteReport(delData.id)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useReport from "../../../composables/system/Requests/useReport";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ListreportLayout",
  setup() {
    const { getAllreport, deleteReport, loading } = useReport();
    const storeReport = useReportStore();
    const { data } = storeToRefs(storeReport);
    const filter = ref("");
    const router = useRouter();
    const delData = ref();
    const confirm = ref(false);
    const rows = [];
    const columns = [
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
        name: "title",
        align: "center",
        label: "Título",
        field: "title",
        sortable: true,
      },
      {
        name: "display_date_at",
        label: "Data de exibição",
        field: "display_date_at",
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
    const editReport = (value) => {
      console.log("id do value", value.id);
      storeReport.setEditaData(value);
      router.push({
        name: "relatorio",
        params: { id: value.id },
        path: `controlReports/${value.id}`,
      });
    };
    const delReport = (value) => {};
    const confirmAction = (value) => {
      confirm.value = true;
      delData.value = value;
    };
    onMounted(async () => {
      console.log("AMIGO ESTOU AQUI");
      await getAllreport();
    });
    return {
      loading,
      data,
      rows,
      filter,
      columns,
      editReport,
      confirm,
      delData,
      confirmAction,
      deleteReport,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
