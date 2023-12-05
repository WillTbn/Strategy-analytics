<template>
  <div :class="parentClass">
    <span class="text-subtitle2" :class="{ 'text-up': upText }">{{
      textTop
    }}</span>
    <span class="text-subtitle2 text-negative text-weight-bolder">{{
      textTopRed
    }}</span>
    <p class="text-h3 text-weight-bolder">{{ textTitle }}</p>
    <span class="text-body2">{{ textDescription }}</span
    ><br />
    <span class="text-body2">{{ textDescription2 }}</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleSubtitle",
  props: {
    parentClass: { type: String },
    textTop: { type: String },
    textTopRed: { type: String },
    textTitle: { type: String },
    textDescription: { type: String },
    textDescription2: { type: String },
    upText: { type: Boolean, default: true },
  },
});
</script>
<style scoped>
.text-body3 {
  font-weight: 400;
  font-size: 23px;
  line-height: 23.68px;
}
.text-up {
  text-transform: uppercase;
}
</style>
