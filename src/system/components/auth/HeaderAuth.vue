<template>
  <div
    class="HeaderAuth justify-center text-white row items-center content-center text-center"
    style="height: 40vh"
  >
    <div class="col-md-12 self-center">
      <logo-small />
    </div>
    <div class="col-md-12 col-sm-6 self-center">
      <span class="text-h3 text-weight-bold">{{ text }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import LogoSmall from "../LogoSmall.vue";
export default defineComponent({
  name: "HeaderAuth",
  components: {
    LogoSmall,
  },
  props: {
    text: { type: String },
  },
  setup() {
    return {};
  },
});
</script>
