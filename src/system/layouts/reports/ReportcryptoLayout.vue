<template>
  <div class="ReportcryptoLayout">
    <div class="row justify-center q-gutter-sm">
      <div class="col-12">
        <q-scroll-area style="height: 35rem">
          <q-card style="max-height: 35rem">
            <pdf-custom
              documentPDF="doc/report/crypto/Relatorio_06.01.2024.pdf"
              :scale="dashboard.pdfScale"
            />
          </q-card>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "src/stores/layout";
import { defineComponent, ref } from "vue";
import PdfCustom from "../../components/PdfCustom.vue";
export default defineComponent({
  name: "ReportcryptoLayout",
  components: { PdfCustom },
  setup() {
    const layoutStore = useLayoutStore();
    const { dashboard } = storeToRefs(layoutStore);
    const loadingSppiner = ref(true);
    // const { pdf, pages } = usePDF("");
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    return { dashboard, loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
