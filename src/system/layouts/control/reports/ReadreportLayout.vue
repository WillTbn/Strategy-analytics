<template>
  <titlebody-layout text />
  <div
    :id="id"
    class="ReadreportLayout q-pa-md row items-center justify-center"
  >
    <!-- Seu conteúdo HTML aqui -->

    <form @submit.prevent.stop="onSubmit" class="col-10">
      <q-card-section class="scroll">
        <div class="row justify-between">
          <q-input
            ref="titleRef"
            standout="bg-teal text-white"
            v-model="editData.title"
            label="Título*"
            class="col-12 col-md-4 col-sm-8 q-py-lg bg-tranparent"
            :rules="[(val) => !!val || 'Campo obrigatório']"
          />
          <q-select
            class="col-12 col-md-2 col-sm-8 q-py-lg"
            standout
            v-model="editData.type"
            :options="optionType"
            label="Categoria"
          />

          <!-- ref="birthdayRef" -->
          <div class="col-md-3 col-10 text-white q-py-lg text-center">
            <q-badge color="primary">
              data atual de exibição:
              {{
                $filters.dateFormatBr(isDirtyReport.display_date_at)
              }} </q-badge
            ><br />
            <q-btn icon="event" round color="primary">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="editData.display_date_at">
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn label="OK" color="primary" flat v-close-popup />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-btn>
            <!-- <q-badge class="q-pa-sm" color="positive" v-if="newDate">
              data selecionada para altera:
              {{ $filters.dateFormatBr(newDate) }} </q-badge
            ><br /> -->
          </div>
          <q-input
            v-model="editData.description"
            autogrow
            label="Descrição"
            class="col-12 col-md-8 q-py-lg"
            standout="bg-teal text-white"
          />
          <div class="col-8 col-md-10 text-end">
            <q-btn
              color="positive"
              label="Atualizar dados"
              @click.prevent="onSubmit"
              :disable="verifySame"
            />
          </div>
          <q-file
            v-if="editData.document == null"
            filled
            ref="documentRef"
            bottom-slots
            v-model="editData.document"
            label="Documento(.pdf)"
            counter
            class="col-5"
            :rules="[(val) => !!val || 'Campo obrigatório']"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="editData.document = null"
                class="cursor-pointer"
              />
            </template>

            <template v-slot:hint> .pdf </template>
            <template v-slot:after>
              <q-btn round dense flat icon="send" @click.prevent="sendDoc" />
            </template>
          </q-file>
        </div>
      </q-card-section>
      <q-separator />
      <editfiles-layout
        :document="isDirtyReport.document"
        :audio="isDirtyReport.audio"
      />
      <q-separator />
      <div class="q-pb-xl" v-if="editData.document != null">
        <pdf-pattern
          :documentPDF="editData.document"
          title="PDF"
          :audio="editData.audio"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import useReport from "src/composables/system/Requests/useReport";
import useNotify from "src/composables/useNotify";
import PdfPattern from "src/system/components/PdfPattern.vue";
import TitlebodyLayout from "../../TitlebodyLayout.vue";
import useCase from "src/composables/system/useCase";
import EditfilesLayout from "./editfilesLayout.vue";

export default defineComponent({
  name: "ReadreportLayout",
  components: {
    PdfPattern,
    TitlebodyLayout,
    EditfilesLayout,
  },
  props: {
    id: { type: String },
  },
  setup() {
    const reportStore = useReportStore();
    const { editData, isDirtyReport } = storeToRefs(reportStore);
    const {
      optionType,
      requestStatus,
      setDocument,
      getOne,
      setDataReport,
      verifySame,
    } = useReport();
    const titleRef = ref(null);
    const documentRef = ref(null);
    const { infoNotify } = useNotify();
    const route = useRoute();
    const newDate = ref("");
    const { same, dateFormatBr } = useCase();

    const onSubmit = async () => {
      // // editData.value.display_date_at =
      // //   newDate.value != ""
      // //     ? dateFormatBr(editData.value.display_date_at)
      // //     : isDirtyReport.value.display_date_at;
      // // verifySame()
      // console.log("estado do same -> ", verifySame.value);
      // console.log("isDirtyReport ->", isDirtyReport.value);
      // console.log("editData ->", editData.value);
      await setDataReport(editData.value);
    };
    const sendDoc = async () => {
      documentRef.value.validate();
      if (documentRef.value.hasError) {
        infoNotify("Verifique o documento, anexa ele para envio!!");
        // loading.value = false;
        return;
      }
      await setDocument(editData.value.id, editData.value.document);
    };
    onMounted(() => {
      if (!editData.value.title) {
        console.log("Vamos ter que pegar o relatorio");
        getOne(route.params.id);
      }
    });
    return {
      newDate,
      titleRef,
      sendDoc,
      onSubmit,
      documentRef,
      editData,
      optionType,
      requestStatus,
      verifySame,
      dateFormatBr,
      isDirtyReport,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
