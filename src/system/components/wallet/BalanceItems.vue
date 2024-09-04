<template>
  <div class="banlanceItems col-12 col-md q-mb-md-lg q-mb-xs-md">
    <div class="badge-bank card-balance column" :class="{ ' tool': !objText }">
      <div class="q-mb-lg col">
        <q-avatar class="q-mr-lg">
          <q-icon :name="icon" class="q-pa-sm" size="1.5rem" />
        </q-avatar>
        <span class="text-roboto-15-500 text-weight-bolder">{{ title }}</span>
        <q-icon
          v-if="objText"
          :name="objText.moreInfoIcon"
          class="float-right cursor-pointer"
        />
      </div>
      <div class="q-mb-lg col" v-if="!objText">
        <span class="text-roboto-15-500 text-secondary q-px-sm"
          >Saldo total</span
        >
        <p class="text-weight-bolder text-roboto-24-500 q-px-sm">
          {{ $filters.currentValue("2.907.903,00", brCoin) }}
        </p>
      </div>
      <p v-if="!objText" class="text-roboto-15-500">Mais Informações</p>
      <div class="q-mb-md col" v-if="objText">
        <p class="text-weight-bolder text-h5 q-pr-xl">
          {{ objText.title }}
        </p>
      </div>
      <div class="col">
        <q-btn
          class="btn-bank"
          color="btn-bank"
          no-caps
          rounded
          v-if="objText"
          :label="objText.btn"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "balanceItems",
  props: {
    title: { type: String },
    icon: { type: String },
    balance: { type: String, default: "0,00" },
    country: { type: Boolean, default: false },
    cipher: { type: String, default: "R$" },
    brCoin: { type: Boolean, default: true },
    objText: { type: [Object, Boolean], default: false },
  },
  setup() {
    return {};
  },
});
</script>
<style>
.card-balance {
  padding: 1.3rem;
  border-radius: 24px !important;
  /* margin-right: 12px; */
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  min-height: 245.49px;
}
</style>
