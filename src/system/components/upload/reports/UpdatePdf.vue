<template>
  <div class="UpdatePdf">
    <q-file
      filled
      bottom-slots
      v-model="newPdf"
      label="document(.pdf)"
      counter
      class="col-5"
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="newPdf = null"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:hint> .pdf </template>
    </q-file>
    <div class="row justify-end text-end">
      <div class="col-4">
        <q-btn
          label="Trocar pdf"
          color="primary"
          @click.prevent="sendPdf"
          :disable="newPdf == null"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";

import HeaderCard from "../../cardDialog/HeaderCard.vue";
import useReport from "src/composables/system/Requests/useReport";
export default defineComponent({
  name: "UpdatePdf",
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const { setDocument } = useReport();
    const newPdf = ref(null);

    const sendPdf = async () => {
      await setDocument(editData.value.id, newPdf.value);
    };
    return {
      editData,
      sendPdf,
      newPdf,
    };
  },
});
</script>
<style lang=""></style>
