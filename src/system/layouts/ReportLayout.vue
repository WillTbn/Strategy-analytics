<template>
  <div class="ReportLayout">
    <div class="row justify-center text-center">
      <div class="col-12">
        <textinter-normal text="Ultimos relatórios" />
        <q-separator inset></q-separator>
      </div>

      <div class="col-12">
        <div style="min-height: 35rem">
          <q-tabs
            v-model="tab"
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="center"
            narrow-indicator
            dense
          >
            <q-tab name="classic" label="Classic" no-caps />
            <q-tab name="crypto" label="Crypto" no-caps />
          </q-tabs>
          <q-separator inset></q-separator>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="classic">
              <reportclassic-layout />
            </q-tab-panel>

            <q-tab-panel name="crypto">
              <reportcrypto-layout />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportclassicLayout from "../layouts/reports/ReportclassicLayout.vue";
import ReportcryptoLayout from "../layouts/reports/ReportcryptoLayout.vue";
import { defineComponent, ref } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";

export default defineComponent({
  name: "ReportLayout",
  components: { TextinterNormal, ReportclassicLayout, ReportcryptoLayout },
  setup() {
    return { tab: ref("classic") };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
