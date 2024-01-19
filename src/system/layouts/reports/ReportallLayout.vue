<template>
  <div class="ReportallLayout">
    <div class="row justify-center q-gutter-sm">
      <div class="col-12 col-md-5">
        <q-banner
          class="q-my-sm"
          rounded
          dense
          inline-actions
          v-for="item in premium"
          :key="item"
        >
          <q-expansion-item
            expand-separator
            :label="item.name"
            :caption="item.date"
            dense
            dense-toggle
            :label-lines="1"
          >
            <q-scroll-area style="height: 35rem">
              <q-card style="max-height: 35rem">
                <pdf-custom :documentPDF="item.doc" />
              </q-card>
            </q-scroll-area>
          </q-expansion-item>
        </q-banner>
      </div>
      <div class="col-md-5 col-12">
        <q-banner
          class="q-my-sm"
          rounded
          inline-actions
          v-for="item in crypto"
          :key="item"
        >
          <q-expansion-item
            expand-separator
            :label="item.name"
            :caption="item.date"
            dense
            dense-toggle
            :label-lines="1"
          >
            <q-scroll-area style="height: 35rem">
              <q-card style="max-height: 35rem">
                <pdf-custom :documentPDF="item.doc" :audio="item.audio" />
              </q-card>
            </q-scroll-area>
          </q-expansion-item>
        </q-banner>
      </div>
    </div>
  </div>
</template>

<script>
// import { VuePDF, usePDF } from "@tato30/vue-pdf";
import { defineComponent, ref } from "vue";
import PdfCustom from "../../components/PdfCustom.vue";

export default defineComponent({
  name: "ReportallLayout",
  components: { PdfCustom },
  setup() {
    // const { pdf, pages } = usePDF("doc/classic.pdf");

    const premium = [
      {
        name: "Premium Classic",
        date: "18/01/2024",
        doc: "doc/classic.pdf",
      },
      {
        name: "Premium Classic",
        date: "11/12/2023",
        doc: "doc/classic.pdf",
        audio: "audios/CP-SA.mp3",
      },
      {
        name: "Premium Classic",
        date: "14/11/2023",
        doc: "doc/classic.pdf",
      },
    ];
    const crypto = [
      {
        name: "Cryptomoedas ",
        date: "18/01/2024",
        doc: "doc/classic.pdf",
        audio: "audios/CP-SA.mp3",
      },
      {
        name: "Cryptomoedas ",
        date: "11/12/2023",
        doc: "doc/classic.pdf",
      },
      {
        name: "Cryptomoedas ",
        date: "14/11/2023",
        doc: "doc/classic.pdf",
      },
    ];

    return {
      premium,
      crypto,
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
