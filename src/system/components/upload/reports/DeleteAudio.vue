<template>
  <q-card class="q-px-xl q-py-sm">
    <q-card-section>
      <header-card titleCard="Deletando audio" />
    </q-card-section>
    <q-card-section>
      <p>
        Tem certeza que deseja deleta esse audio do relátorio
        <b> {{ editData.title }}</b
        >?
      </p>
    </q-card-section>
    <q-card-actions align="right" class="q-my-md">
      <!-- <q-btn flat label="fechar" color="red-14" v-close-popup /> -->
      <q-btn label="confirmar" color="red-14" @click.prevent="onSubmit" />
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { storeToRefs } from "pinia";

import HeaderCard from "../../cardDialog/HeaderCard.vue";
import useReport from "src/composables/system/Requests/useReport";
export default defineComponent({
  name: "DeleteAudio",
  components: {
    HeaderCard,
  },
  setup() {
    const reportStore = useReportStore();
    const { editData } = storeToRefs(reportStore);
    const { deleteAudio } = useReport();
    const audioNew = ref(null);

    const onSubmit = async () => {
      const report = {
        report_id: editData.value.id,
      };
      await deleteAudio(report);
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
