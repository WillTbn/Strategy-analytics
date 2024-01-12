<template>
  <div class="ReportPage bg-transparent">
    <div class="row justify-center text-center q-pt-lg">
      <div class="col-3" v-for="link in links" :key="link">
        <q-btn
          outline
          no-caps
          rounded
          color="dark"
          :label="link.name"
          @click.prevent="goStep(link.value)"
          flat
          class="border-btn"
        />
      </div>
    </div>

    <q-tab-panels v-model="reportSteps" animated class="bg-transparent">
      <q-tab-panel name="all">
        <reportall-layout />
      </q-tab-panel>

      <q-tab-panel name="classic"> Classic </q-tab-panel>
      <q-tab-panel name="crypto"> Crypto </q-tab-panel>
      <q-tab-panel name="select"> Data selecionar </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "../../stores/layout";
import { defineComponent, ref } from "vue";
import ReportallLayout from "../layouts/reports/ReportallLayout.vue";

export default defineComponent({
  name: "ReportPage",
  components: { ReportallLayout },
  setup() {
    const layoutStore = useLayoutStore();
    const { reportSteps } = storeToRefs(layoutStore);
    const goStep = (value) => {
      layoutStore.upateReportsteps(value);
    };
    const links = [
      { name: "Ver tudo", value: "all" },
      { name: "Classic", value: "classic" },
      { name: "Crypto", value: "crypto" },
      { name: "Selecionar data", value: "select" },
    ];

    return { tab: ref("mails"), links, reportSteps, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
