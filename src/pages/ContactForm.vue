<template>
  <q-page class="text-white">
    <contact-layout />
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
