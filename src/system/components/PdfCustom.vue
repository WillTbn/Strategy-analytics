<template>
  <div class="PdfCustom">
    <div class="text-center q-my-xl" v-if="loadingSppiner">
      <q-spinner-hourglass color="primary" size="5em" />
    </div>
    <div v-if="audio" class="row text-center justify-center">
      <audio-pattern :audio="audio" class="col-12" />
      <div class="col-12" v-for="page in pages" :key="page">
        <VuePDF :pdf="pdf" :page="page" :scale="scale" @loaded="onLoaded">
          <q-skeleton width="150px" />
          <q-skeleton height="25rem" />
        </VuePDF>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import AudioPattern from "./AudioPattern.vue";

export default defineComponent({
  name: "PdfCustom",
  components: { VuePDF, AudioPattern },
  props: {
    documentPDF: { type: String, required: true },
    audio: { type: String },
  },
  setup(props) {
    const loadingSppiner = ref(true);
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    const { pdf, pages } = usePDF(props.documentPDF);
    return { pdf, pages, scale: ref(0.21), loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
