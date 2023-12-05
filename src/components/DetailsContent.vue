<template>
  <div class="row text-left q-py-xl">
    <div class="col-12 q-ma-xl"></div>
    <div class="col-8 q-mx-xl">
      <span class="text-h4 text-weight-bolder" v-html="primaryTitle"></span
      ><br />
      <span class="text-subtitle2" v-html="primaryDescr"> </span>
    </div>
    <div class="col-12 q-ma-xl"></div>
    <div class="col-8 q-ma-xl">
      <span class="text-h4 text-weight-bolder" v-html="secondaryTitle"> </span
      ><br />

      <span class="text-subtitle2" v-html="secondaryDescr"> </span>
    </div>
    <div class="col-6 q-my-xl">
      <q-img :src="image" :ratio="4 / 3" fit="none" />
      <q-btn
        v-if="image"
        class="q-ml-lg"
        dense
        no-caps
        padding="xs lg"
        label="Ler perspectivas para segunda metade (PDF)"
        icon="fa-solid fa-chevron-right"
        to="/"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailsContent",
  props: {
    primaryTitle: { type: String },
    primaryDescr: { type: String },
    secondaryTitle: { type: String },
    secondaryDescr: { type: String },
    image: { type: String, default: "img/image-2.png" },
  },
});
</script>
