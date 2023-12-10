<template>
  <div class="transparant-bg q-px-lg" flat>
    <div class="row justify-center items-center">
      <div class="col-md-3 col-sm-12">
        <q-avatar size="16rem">
          <img :src="image" :srcset="image" />
        </q-avatar>
      </div>
      <div class="col-md-6 col-sm-12 q-py-xl">
        <div class="text-h4 text-weight-bold">{{ title }}</div>
        <span class="text-subtitle2">{{ office }}</span>
        <div
          class="text-italic q-mt-lg text-h6"
          style="max-width: 714px !important"
        >
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailUser",
  props: {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    office: { type: String },
  },
});
</script>
<style scoped>
.text-r4 {
  font-size: 8vw;
}
</style>
