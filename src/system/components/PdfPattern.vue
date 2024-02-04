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
        v-if="!detectTouch"
      >
        <p>
          Seu navegador não tem um plugin para PDF. Você pode
          <q-btn label="clica aqui para abre pdf" @click="setPdfDialog()" />.
        </p>
      </object>
      <pdf-custom
        v-else
        :documentPDF="pdfCustom.pdfDocument"
        :audio="pdfCustom.audio"
        :key="pdfCustom"
      />

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
                {{ title }}
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
import { computed, defineComponent, onMounted, ref } from "vue";
import AudioPattern from "./AudioPattern.vue";
import PdfCustom from "./PdfCustom.vue";
import { Platform } from "quasar";

export default defineComponent({
  name: "PdfPattern",

  components: { AudioPattern, PdfCustom },
  props: {
    documentPDF: { type: String, required: true },
    audio: { type: String },
    title: { type: String },
    status: { type: Boolean },
  },
  setup(props) {
    const dialog = ref(false);
    // const $q = useQuasar();
    const detectTouch = computed(() => Platform.has.touch);
    const pdfCustom = ref({
      pdfDocument: props.documentPDF,
      audio: props.audio,
    });
    const setPdfDialog = () => {
      // dialog.value = true;
      pdfCustom.value.pdfDocument = props.documentPDF;
      pdfCustom.value.audio = props.audio;
      console.log("AQUI -> ", pdfCustom.value);
    };
    // onMounted(() => {
    //   if (detectTouch.value) {
    //     console.log("Tela detectada com touch");
    //     setPdfDialog();
    //   } else {
    //     console.log("AMIGO ESTOU AQUI 2");
    //   }
    // });
    return { dialog, detectTouch, setPdfDialog, pdfCustom };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
