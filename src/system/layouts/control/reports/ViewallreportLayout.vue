<template>
  <div class="ViewallreportLayout">
    <titlebody-layout textTitle="Controle de relatórios" />
    <action-layout />
    <listreport-layout />
  </div>
</template>
<script>
import TitlebodyLayout from "../../TitlebodyLayout.vue";
import ListreportLayout from "../ListreportLayout.vue";
import ActionLayout from "../ActionLayout.vue";
import { defineComponent } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "ViewallreportLayout",
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    return {
      editData,
    };
  },
  // Outras configurações do componente aqui
});
</script>
