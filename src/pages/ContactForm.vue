<template>
  <q-page class="text-white">
    <contact-layout />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-page>
</template>
<script>
import ContactLayout from "../layouts/ContactLayout.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { ContactLayout },
  setup() {},
});
</script>
<style></style>
