<template>
  <div class="text-white">
    <span class="text-h4 text-weight-bold">{{ title }}</span
    ><br />
    <span>{{ description }}</span
    ><br />
    <span>{{ description2 }}</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleDescription",
  props: {
    title: { type: String, default: "Titulo" },
    description: { type: String },
    description2: { type: String },
  },
});
</script>
