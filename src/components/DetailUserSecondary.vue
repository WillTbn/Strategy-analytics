<template>
  <q-card class="transparant-bg q-px-lg" flat>
    <q-card-section horizontal class="flex flex-center">
      <q-card-section class="">
        <q-avatar size="8rem">
          <img :src="image" :srcset="image" />
        </q-avatar>
      </q-card-section>
      <q-card-section class="q-py-xl">
        <div class="text-h4 text-weight-bold">{{ title }}</div>
        <span class="text-subtitle2">{{ office }}</span>
        <div
          class="text-italic q-mt-lg text-r4"
          style="max-width: 714px !important"
        >
          {{ description }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailUserSecondary",
  props: {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    office: { type: String },
  },
});
</script>
<style>
.text-r4 {
  font-size: 1.4vw;
}
</style>
