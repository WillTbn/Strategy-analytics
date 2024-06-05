<template>
  <div class="EditfilesLayout">
    <!-- control audio -->
    <div class="row justify-around q-my-sm q-gutter-lg">
      <div class="col-12 col-md-4 col-sm-12">
        <p class="text-h6">Audio</p>
        <div class="" v-if="audio == null">
          <created-audio />
        </div>

        <div class="row justify-around" v-else>
          <q-btn
            label="troca audio"
            color="primary"
            @click.prevent="audioNewDialog = true"
          />
          <q-btn
            label="tira audio desse relatorio"
            color="red-14"
            @click.prevent="audioDelete = true"
          />
        </div>
      </div>
      <!-- control audio -->
      <!-- control document -->
      <div class="col-12 col-md-4 col-sm-12">
        <p class="text-h6">PDF</p>
        <update-pdf />
      </div>
    </div>

    <q-dialog v-model="audioNewDialog" v-bind="{ ...$dialogCard }">
      <createoredit-audio />
    </q-dialog>
    <q-dialog v-model="audioDelete" v-bind="{ ...$dialogCard }">
      <delete-audio />
    </q-dialog>
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { useReportStore } from "src/stores/report";
import CreateoreditAudio from "src/system/components/upload/reports/CreateoreditAudio.vue";
import DeleteAudio from "src/system/components/upload/reports/DeleteAudio.vue";
import CreatedAudio from "src/system/components/upload/reports/CreatedAudio.vue";
import UpdatePdf from "src/system/components/upload/reports/UpdatePdf.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "EditfilesLayout",
  props: {
    document: { type: String },
    audio: { type: String },
  },
  components: {
    CreateoreditAudio,
    DeleteAudio,
    CreatedAudio,
    UpdatePdf,
  },
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const newAudio = ref(null);
    const audioNewDialog = ref(false);

    const audioDelete = ref(false);

    const sendAudio = async () => {};
    return {
      audioNewDialog,

      audioDelete,
      editData,
      newAudio,
      sendAudio,
    };
  },
});
</script>
<style></style>
