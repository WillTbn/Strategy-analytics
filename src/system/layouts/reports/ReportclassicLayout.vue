<template>
  <div class="ReportclassicLayout">
    <div class="row justify-center q-gutter-sm">
      <div class="col-12">
        <q-scroll-area style="height: 35rem">
          <q-card style="max-height: 35rem">
            <pdf-custom
              documentPDF="doc/report/classic/Relatorio_20.01.2024.pdf"
            />
          </q-card>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
// import { VuePDF, usePDF } from "@tato30/vue-pdf";

import PdfCustom from "../../components/PdfCustom.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ReportclassicLayout",
  components: { PdfCustom },
  setup() {
    const scale = ref(0.2);
    const loadingSppiner = ref(true);
    // const { pdf, pages } = usePDF("");
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    return { scale, loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
