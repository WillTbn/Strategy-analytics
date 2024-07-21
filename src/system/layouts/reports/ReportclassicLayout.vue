<template>
  <div class="ReportclassicLayout">
    <div class="row justify-center q-gutter-sm" v-if="last.classic">
      <div class="col-12">
        <q-card style="max-height: 35rem" square flat>
          <pdf-pattern
            :documentPDF="last.classic.document"
            title="Premium Classic"
          />
        </q-card>
      </div>
    </div>
    <not-report typeReport="classic" v-else />
  </div>
</template>

<script>
import { useReportStore } from "src/stores/report";
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";

import PdfPattern from "../../components/PdfPattern.vue";
import NotReport from "src/system/components/report/NotReport.vue";

export default defineComponent({
  name: "ReportclassicLayout",
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
