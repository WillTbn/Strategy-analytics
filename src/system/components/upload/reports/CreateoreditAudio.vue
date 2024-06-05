<template>
  <q-card class="q-px-xl q-py-sm">
    <q-card-section>
      <header-card titleCard="Novo audio" />
    </q-card-section>
    <q-card-section>
      <form @submit.prevent.stop="onSubmit">
        <q-file
          filled
          bottom-slots
          v-model="audioNew"
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
              @click.stop.prevent="audioNew = null"
              class="cursor-pointer"
            />
          </template>

          <template v-slot:hint> .mp3 | .wma </template>
        </q-file>
        <q-card-actions align="right" class="q-my-md">
          <!-- <q-btn flat label="fechar" color="red-14" v-close-popup /> -->
          <q-btn label="Atualizar audio" color="primary" type="submit" />
        </q-card-actions>
        <!-- <div class="row justify-end q-ma-lg text-end">
          <div class="col-10">
            <q-btn color="positive" label="Atualizar audio" type="submit" />
          </div>
        </div> -->
      </form>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";

import HeaderCard from "../../cardDialog/HeaderCard.vue";
import useReport from "src/composables/system/Requests/useReport";
export default defineComponent({
  name: "CreateoreditAudio",
  components: {
    HeaderCard,
  },
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const { updateAudio } = useReport();
    const audioNew = ref(null);

    const onSubmit = async () => {
      await updateAudio(editData.value.id, audioNew.value);
    };
    return {
      editData,
      onSubmit,
      audioNew,
    };
  },
});
</script>
<style lang=""></style>
