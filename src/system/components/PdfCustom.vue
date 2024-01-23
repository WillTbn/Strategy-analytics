<template>
  <div class="PdfCustom">
    <div class="text-center q-my-xl" v-if="loadingSppiner">
      <q-spinner-hourglass color="primary" size="5em" />
    </div>
    <div class="row justif-center">
      <audio-pattern :audio="audio" class="col-12" v-if="audio" />
    </div>
    <div class="pdf-control">
      <div
        style="position: relative; display: block"
        v-for="page in pages"
        :key="page"
      >
        <VuePDF
          ref="pdfRef"
          :pdf="pdf"
          :page="page"
          :scale="scale"
          @loaded="onLoaded"
        >
          <q-skeleton width="150px" />
          <q-skeleton height="25rem" />
        </VuePDF>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import AudioPattern from "./AudioPattern.vue";
// import { PageViewport } from "pdfjs-dist/types/src/display/display_utils";
export default defineComponent({
  name: "PdfCustom",
  components: { VuePDF, AudioPattern },
  props: {
    documentPDF: { type: String, required: true },
    audio: { type: String },
    scale: { type: Number, default: 1 },
  },
  setup(props) {
    const loadingSppiner = ref(true);
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    const { pdf, pages } = usePDF(props.documentPDF);
    // let { height, width } = viewport()
    return { pdf, pages, loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.pdf-control {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
