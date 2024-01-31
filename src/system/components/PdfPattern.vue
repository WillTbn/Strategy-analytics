<template>
  <div class="PdfPattern">
    <div class="row justif-center">
      <audio-pattern :audio="audio" class="col-12" v-if="audio" />
    </div>
    <div class="pdf-control" style="height: 35rem">
      <!-- 
      <iframe
        :src="documentPDF"
        height="100%"
        width="100%"
        frameborder="0"
      ></iframe>
      <embed
      :src="documentPDF"
      width="100%"
      height="100%"
      type="application/pdf"
      />
    -->

      <object
        :data="documentPDF"
        type="application/pdf"
        width="100%"
        height="100%"
        id="object-pdf"
      >
        <p>
          Seu navegador não tem um plugin para PDF. Você pode
          <q-btn label="clica aqui para abre pdf" @click="setPdfDialog()" />.
          <!-- :href="documentPDF" -->
        </p>
      </object>

      <q-dialog
        v-model="dialog"
        transition-show="rotate"
        transition-hide="rotate"
        full-width
        full-height
      >
        <q-card>
          <q-card-section>
            <q-toolbar>
              <q-avatar
                text-color="white"
                color="transparant"
                icon="fa-solid fa-file"
              >
              </q-avatar>
              <q-toolbar-title>
                <!-- <span class="text-weight-bold"> -->
                {{ title }}
                <!-- </span> -->
              </q-toolbar-title>

              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <pdf-custom
              :documentPDF="pdfCustom.pdfDocument"
              :audio="pdfCustom.audio"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AudioPattern from "./AudioPattern.vue";
import PdfCustom from "./PdfCustom.vue";

export default defineComponent({
  name: "PdfPattern",
  components: { AudioPattern, PdfCustom },
  props: {
    documentPDF: { type: String, required: true },
    audio: { type: String },
    title: { type: String },
  },
  setup(props) {
    const dialog = ref(false);
    const pdfCustom = ref({ pdfDocument: null, audio: null });
    const setPdfDialog = () => {
      dialog.value = true;
      pdfCustom.value.pdfDocument = props.documentPDF;
      pdfCustom.value.audio = props.audio;
      console.log("AQUI -> ", pdfCustom.value);
    };
    return { dialog, setPdfDialog, pdfCustom };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
