<template>
  <div class="row" :class="classAdd">
    <div class="col-sm-12 col-md-6">
      <slot />
    </div>
    <div class="col-sm-12 col-md-6" :class="{ 'border-img': border }">
      <q-img :src="image" :ratio="16 / 9" fit="fill" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextImage",
  props: {
    classAdd: {
      type: String,
      default: "justify-center text-left q-pa-lg q-my-xl",
    },
    image: { type: String },
    border: { type: Boolean },
  },
});
</script>
<style>
.border-img {
  border: solid 2px #0085ff;
}
</style>
