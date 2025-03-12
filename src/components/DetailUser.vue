<template>
  <!-- <div class="transparant-bg" flat>
    <div class="row justify-center items-center">
      <div class="col-md-auto col-sm-12">
        <q-avatar size="10rem">
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
  </div> -->
  <!-- <q-list bordered class="rounded-borders col-md-6 col-12" dense>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="12rem">
          <img :src="image" :srcset="image" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">
          <span class="text-h4 text-weight-bold">
            {{ title }}
          </span>
          <p class="text-subtitle2">{{ office }}</p>
        </q-item-label>
        <q-item-label lines="8">
          <p class="text-italic q-mt-sm text-h6">
            {{ description }}
          </p>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list> -->
  <q-card class="transparant-bg q-px-lg" flat>
    <q-card-section horizontal class="flex flex-center">
      <q-card-section class="">
        <q-avatar size="12rem" v-if="image">
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
  font-size: 1.4vw;
}
</style>
