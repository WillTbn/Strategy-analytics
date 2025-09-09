<template>
  <div class="loading-step">
    <div class="row q-gutter-xs q-mb-sm">
      <div v-for="(item, index) in stepTotal" :key="index" class="col">
        <q-linear-progress
          rounded
          size="8px"
          :value="item <= stepNumber ? 1 : 0"
          class="progress-control"
        />
      </div>
    </div>
    <span class="text-weigth-bolder">Passo {{ stepNumber }}</span>
    <span class="text-grey">/ {{ stepTotal }}</span>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "LoadingStep",
});
defineProps({
  progress: { type: Number, default: 1.0 },
  stepText: { type: String, default: "Passo 1" },
  stepNumber: { type: Number, default: 1 },
  stepTotal: { type: Number, default: 5 },
});
// Seu código aqui
</script>

<style scoped>
.q-linear-progress {
  width: 4rem !important;
}
</style>
