<template>
  <div class="ReportcryptoLayout">
    <div class="row justify-center q-gutter-sm">
      <div class="col-12">
        <!-- <q-scroll-area style="height: 35rem"> -->
        <q-card style="max-height: 35rem" square flat>
          <pdf-pattern
            documentPDF="doc/report/crypto/Relatorio_06.01.2024.pdf"
          />
        </q-card>
        <!-- </q-scroll-area> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PdfPattern from "../../components/PdfPattern.vue";
export default defineComponent({
  name: "ReportcryptoLayout",
  components: { PdfPattern },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
