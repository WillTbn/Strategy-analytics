<template>
  <div class="control-author">
    <q-avatar size="200px" font-size="52px" color="teal" text-color="white">
      <img :src="image" :alt="author" :srcset="image" />
    </q-avatar>
    <br />
    <span class="text-5 text-weight-bolder">{{ author }}</span
    ><br />
    <span class="text-body2">{{ office }}</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthorCarousel",
  props: {
    author: { type: String },
    image: { type: String },
    office: { type: String },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
