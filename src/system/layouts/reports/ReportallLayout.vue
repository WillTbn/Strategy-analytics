<template>
  <div class="ReportallLayout">
    <!-- <div class="row justify-center text-center" v-if="loadingSppiner">
      <div class="col-12 self-center q-my-xl">
        <q-spinner-hourglass color="primary" size="5em" />
      </div>
    </div> -->
    <!--  -->
    <div class="row justify-center q-gutter-sm">
      <div class="col-5">
        <q-banner rounded inline-actions>
          Premium Classic

          <template v-slot:action>
            <q-toggle
              v-model="visibleOne"
              :icon="
                visibleOne ? 'fa-regular fa-eye' : 'fa-solid fa-eye-low-vision'
              "
            />
          </template>
        </q-banner>
        <!-- <q-card style="max-height: 35rem; position: relative">
          <div v-for="page in pages" :key="page" class="control-vuepdf">
            <VuePDF :pdf="pdf" :page="page" :scale="scale" />
          </div>
        </q-card> -->
        <q-scroll-area style="height: 35rem" v-show="visibleOne">
          <div
            class="col text-center self-center q-my-xl"
            v-if="loadingSppiner"
          >
            <q-spinner-hourglass color="primary" size="5em" />
          </div>
          <q-card style="max-height: 35rem">
            <div v-for="page in pages" :key="page">
              <VuePDF :pdf="pdf" :page="page" :scale="scale" @loaded="onLoaded">
                <q-skeleton width="150px" />
                <q-skeleton height="35rem" />
              </VuePDF>
            </div>
          </q-card>
        </q-scroll-area>
      </div>
      <div class="col-5">
        <q-banner rounded inline-actions>
          Crypto Regular

          <template v-slot:action>
            <q-toggle
              v-model="visibleTwo"
              :icon="
                visibleTwo ? 'fa-regular fa-eye' : 'fa-solid fa-eye-low-vision'
              "
            />
          </template>
        </q-banner>
        <q-scroll-area style="height: 35rem" v-show="visibleTwo">
          <div
            class="col self-center text-center q-my-xl"
            v-if="loadingSppiner"
          >
            <q-spinner-hourglass color="primary" size="5em" />
          </div>
          <q-card style="max-height: 35rem">
            <div v-for="page in pages" :key="page">
              <VuePDF :pdf="pdf" :page="page" :scale="scale" @loaded="onLoaded">
                <q-skeleton width="150px" />
                <q-skeleton height="35rem" />
              </VuePDF>
            </div>
          </q-card>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ReportallLayout",
  components: { VuePDF },
  setup() {
    const visibleOne = ref(false);
    const visibleTwo = ref(false);
    const scale = ref(0.2);
    const loadingSppiner = ref(true);
    const { pdf, pages } = usePDF("doc/classic.pdf");
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    return {
      visibleOne,
      visibleTwo,
      pdf,
      pages,
      scale,
      loadingSppiner,
      onLoaded,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-vuepdf {
  overflow: scroll;
}
</style>
