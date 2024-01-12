<template>
  <div class="ReportclassicLayout">
    <div class="row justify-center text-center" v-if="loadingSppiner">
      <div class="col-12 self-center q-my-xl">
        <q-spinner-hourglass color="primary" size="5em" />
      </div>
    </div>
    <!--  -->
    <div class="row justify-center q-gutter-sm">
      <div class="col-12">
        <q-scroll-area style="height: 35rem">
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
  name: "ReportclassicLayout",
  components: { VuePDF },
  setup() {
    const scale = ref(0.2);
    const loadingSppiner = ref(true);
    const { pdf, pages } = usePDF("doc/classic.pdf");
    const onLoaded = (value) => {
      if (value) {
        loadingSppiner.value = false;
      }
    };
    return { pdf, pages, scale, loadingSppiner, onLoaded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
