<template>
  <div class="CreatedAudio">
    <q-file
      filled
      bottom-slots
      v-model="newAudio"
      label="audio(.mp3|wma)"
      counter
      class="col-5"
    >
      <template v-slot:prepend>
        <q-icon name="cloud_upload" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="newAudio = null"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:hint> .mp3 | .wma </template>
    </q-file>
    <div class="row justify-end text-end">
      <div class="col-4">
        <q-btn
          label="envia audio"
          color="primary"
          @click.prevent="sendAudio"
          :disable="newAudio == null"
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
  name: "CreatedAudio",
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const { updateAudio } = useReport();
    const newAudio = ref(null);

    const sendAudio = async () => {
      await updateAudio(editData.value.id, newAudio.value);
    };
    return {
      editData,
      sendAudio,
      newAudio,
    };
  },
});
</script>
<style lang=""></style>
