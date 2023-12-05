<template>
  <div class="row" :class="classAdd">
    <div class="col-6">
      <slot />
    </div>
    <div class="col-6">
      <q-img :src="image" :ratio="16 / 9" />
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
  },
});
</script>
