<template>
  <div class="PdfPattern">
    <!--    
    <div class="text-center q-my-xl" v-if="loadingSppiner">
      <q-spinner-hourglass color="primary" size="5em" />
    </div> -->
    <div class="row justif-center">
      <audio-pattern :audio="audio" class="col-12" v-if="audio" />
    </div>
    <div class="pdf-control">
      <object
        :data="documentPDF"
        type="application/pdf"
        width="100%"
        style="height: 35rem"
      >
        <p>
          Seu navegador não tem um plugin para PDF. Você pode
          <a :href="doc">clique aqui para baixar o PDF</a>.
        </p>
      </object>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PdfPattern",
  props: {
    documentPDF: { type: String, required: true },
    audio: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
