<template>
  <div class="ReportLayout">
    <div class="row justify-center text-center">
      <div class="col-12">
        <textinter-normal text="Ultimo relatórios" />
        <q-separator inset></q-separator>
      </div>

      <div class="col-12">
        <q-card style="min-height: 35rem">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="center"
            narrow-indicator
          >
            <q-tab name="classic" label="Classic" />
            <q-tab name="crypto" label="Crypto" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="classic">
              <embed
                src="doc/classic.pdf"
                width="100%"
                height="500"
                type="application/pdf"
              />

              <!-- <object
                data="doc/classic.pdf"
                type="application/pdf"
                style="width: 100%; height: 100%"
              ></object> -->
              <!-- <q-img
                src="doc/classic.pdf"
                spinner-color="white"
                style="height: 140px; max-width: 150px"
              /> -->
            </q-tab-panel>

            <q-tab-panel name="crypto">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <!-- <q-scroll-area style="height: 230px; max-width: 300px;">
      <div class="row no-wrap" v-for="r in 4" :key="'r' + r">
        <div v-for="n in 10" :key="n" style="width: 150px" class="q-pa-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga quae veritatis blanditiis sequi id expedita amet esse aspernatur! Iure, doloribus!
        </div>
      </div>
    </q-scroll-area> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";
export default defineComponent({
  name: "ReportLayout",
  components: { TextinterNormal },
  setup() {
    return { tab: ref("classic") };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
