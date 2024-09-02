<template>
  <div class="HeaderCard row justify-between">
    <div class="text-h6 col-6">{{ titleCard }}</div>
    <div class="col-1">
      <q-btn icon="close" flat round color="red-14" v-close-popup />
      <!-- <q-icon name="close" color="red-14" v-close-popup /> -->
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderCard",
  props: { titleCard: { type: String } },
});
</script>
<style lang=""></style>
