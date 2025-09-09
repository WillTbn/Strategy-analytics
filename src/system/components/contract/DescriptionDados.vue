<template>
  <div class="col-auto description-dados">
    <p class="">{{ title }}</p>
    <div class="block-amount">
      <span class="text-primary">
        {{ $filters.currentValue(amount, true) }}
      </span>
      <div class="divisor"></div>
      <span class="">{{ conversion }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "DescriptionDados",
});

defineProps({
  amount: { type: [Number, String] },
  title: { type: String },
  conversion: { type: String },
});
// Seu código aqui
</script>

<style scoped>
.divisor {
  width: 6px;
  height: 6px;
  background: #989898;
  opacity: 1;
}
.block-amount {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
