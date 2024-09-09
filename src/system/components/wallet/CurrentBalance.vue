<template>
  <div class="CurrentBalance">
    <div class="text-roboto-15-500" :class="subTitleClass">{{ name }}</div>
    <span class="text-inter-15-400">
      {{ $filters.currentValue(current, brCoin) }}
    </span>
    <br />
    <slot />
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CurrentBalance",
  props: {
    name: { type: String },
    current: { type: String },
    loading: { type: Boolean },
    subTitleClass: { type: String, default: "text-grey-7" },
    brCoin: { type: Boolean, default: false },

    containerClass: { type: String },
  },
  setup() {
    return {};
  },
});
</script>
<style lang=""></style>
