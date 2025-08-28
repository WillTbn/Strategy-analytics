<template>
  <q-card class="card-overview-layout bg-transparent row" :class="classAdd">
    <div class="col-12">
      <h2 class="text-h6 text-weight-bolder q-ml-lg">
        {{ title }}
        <q-btn color="primary" flat no-caps v-if="btnLink">
          {{ btnText }}
          <component :is="icon" class="q-ml-xs" />
        </q-btn>
      </h2>
    </div>
    <slot></slot>
  </q-card>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "CardOverviewLayout",
});
defineProps({
  title: String,
  btnLink: [String, Boolean],
  link: String,
  btnText: String,
  icon: String,
  classAdd: String,
});
// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
