<template>
  <div class="PdfCustom">
    <div class="text-center q-my-xl" v-if="loadingSppiner">
      <q-spinner-hourglass color="primary" size="5em" />
    </div>
    <div class="row justif-center">
      <audio-pattern :audio="audio" class="col-12" v-if="audio" />
      <div class="col-6 q-my-lg" style="max-width: 500px">
        <q-btn
          color="primary"
          @click="scale = scale > 0.25 ? scale - 0.25 : scale"
          label="-"
        />
        <span>{{ scale * 100 }}%</span>
        <q-btn
          color="primary"
          @click="scale = scale < 2 ? scale + 0.25 : scale"
          label="+"
        />
      </div>
    </div>
    <div class="row text-center justify-center">
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
    // scale: { type: Number, default: 0.21 },
  },
  setup(props) {
    const scale = ref(1);
    const loadingSppiner = ref(true);
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    const { pdf, pages } = usePDF(props.documentPDF);
    return { scale, pdf, pages, loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.PdfCustom {
}
</style>
