<template>
  <div class="ReportcryptoLayout">
    <div class="row justify-center q-gutter-sm" v-if="last.crypto">
      <div class="col-12">
        <q-card style="max-height: 35rem" square flat>
          <pdf-pattern
            :documentPDF="last.crypto.document"
            title="Crypto Premiumm"
          />
        </q-card>
      </div>
    </div>
    <not-report typeReport="crypto" v-else />
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";

import PdfPattern from "../../components/PdfPattern.vue";
import NotReport from "../../components/report/NotReport.vue";
export default defineComponent({
  name: "ReportcryptoLayout",
  components: { PdfPattern, NotReport },
  setup() {
    const reportStore = useReportStore();
    const { last } = storeToRefs(reportStore);
    return { last };
  },
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
