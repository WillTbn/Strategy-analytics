<template>
  <div
    class="ReadreportLayout q-pa-md row items-center justify-center"
    style="height: 80vh"
  >
    <!-- Seu conteúdo HTML aqui -->

    <form @submit.prevent.stop="onSubmit" class="col-8">
      <q-card-section class="scroll">
        <div class="row justify-between">
          <q-input
            ref="titleRef"
            standout="bg-teal text-white"
            v-model="editData.title"
            label="Título*"
            class="col-8 q-py-lg bg-tranparent"
            :rules="[(val) => !!val || 'Campo obrigatório']"
          />
          <q-select
            class="col-3 q-py-lg"
            standout
            v-model="editData.type"
            :options="optionType"
            label="Categoria"
          />
          <q-input
            v-model="editData.description"
            autogrow
            label="Descrição"
            class="col-12 q-py-lg"
            standout="bg-teal text-white"
          />
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
          <q-file
            v-if="editData.audio != null"
            filled
            bottom-slots
            v-model="editData.audio"
            label="audio(.mp3|wma)"
            counter
            class="col-5"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="editData.audio = null"
                class="cursor-pointer"
              />
            </template>

            <template v-slot:hint> .mp3 | .wma </template>
          </q-file>
        </div>
      </q-card-section>
      <q-separator />
      <div class="" v-if="editData.document != null">
        <pdf-pattern :documentPDF="editData.document" title="PDF" />
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";
import useReport from "src/composables/system/Requests/useReport";
import useNotify from "src/composables/useNotify";
import PdfPattern from "src/system/components/PdfPattern.vue";

export default defineComponent({
  name: "ReadreportLayout",
  components: {
    PdfPattern,
  },
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const { optionType, requestStatus, setDocument } = useReport();
    const titleRef = ref(null);
    const documentRef = ref(null);
    const { infoNotify } = useNotify();
    const onSubmit = () => {
      console.log("VAMOS ATUALIZAR AS COISAS!!!!");
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
    return {
      titleRef,
      sendDoc,
      onSubmit,
      documentRef,
      editData,
      optionType,
      requestStatus,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
