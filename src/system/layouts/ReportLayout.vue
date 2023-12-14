<template>
  <div class="ReportLayout">
    <div class="row justify-center text-center">
      <div class="col-12">
        <textinter-normal text="Ultimo relatórios" />
        <q-separator inset></q-separator>
      </div>

      <div class="col-4"></div>
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
import { defineComponent } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";
export default defineComponent({
  name: "ReportLayout",
  components: { TextinterNormal },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
