<template>
  <div class="LabelField row">
    <div :class="colInput">
      <span class="text-label">{{ labelInput }}</span>
      <slot />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "LabelField",
  props: {
    labelInput: { type: String },
    colInput: { type: String, default: "col-12 col-md-12" },
  },
});
</script>
<style lang=""></style>
