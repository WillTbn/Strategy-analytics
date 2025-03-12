<template>
  <div class="ProfitabilyChart q-mr-md-md">
    <p class="text-h5" style="width: 271px">Crescimento hipotético de 10.000</p>
    <div class="">
      <span class="text-subtitle1">Desde o ínicio</span><br />
      <span class="text-h2 text-weight-bolder">
        {{ growthData.primary }}
      </span>
      <br />
      <span class="text-subtitle2 text-weight-bolder text-positive">
        {{ growthData.secondary }}
        <q-icon name="fa-solid fa-arrow-trend-up" />
      </span>
    </div>
    <!-- <div class="row justify-around">
      <div class="col-12"> -->
    <q-img :src="growthData.image" fit="contain" :srcset="growthData.image" />

    <!-- </div>
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStoreLayout } from "../stores/layoutStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "ProfitabilyChart",
  props: {
    growthData: { type: Object },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-chat {
  width: 603.98px;
  height: 299.963px;
  flex-shrink: 0;
  fill: linear-gradient(180deg, #5dff63 0%, #caffd0 34.53%, #fff 73.98%);

  mix-blend-mode: multiply;
}
.control-svg {
  width: 653px;
  height: 500px;
}
@media (max-width: 768px) {
  .control-svg {
    width: 353px;
    height: 423px;
  }
}
</style>
