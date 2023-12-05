<template>
  <q-card class="my-card" square flat bordered>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ subtitle }}</div>
    </q-card-section>
    <q-card-section>
      {{ description }}
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardSimple",
  props: {
    title: { type: String },
    subtitle: { type: String },
    description: { type: String },
  },
});
</script>
<style scoped>
.my-card {
  background-color: rgba(217, 217, 217, 0.3);
  height: 310px;
  border-radius: 16px !important;
  border: 0px, 0px, 6px, 0px !important;
}

.border-blue {
  border-bottom: 6px solid #0085ff;
}
.border-red {
  border-bottom: 6px solid #ff0000;
}
.border-yellow {
  border-bottom: 6px solid #baba00;
}
.border-white {
  border-bottom: 6px solid #f1f3fb;
}
</style>
