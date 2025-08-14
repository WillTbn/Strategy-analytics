<template>
  <q-inner-loading
    :showing="loading"
    label="Please wait..."
    label-class="text-teal"
    label-style="font-size: 1.1em"
  />
  <div class="balance-items col-12 col-sm q-mt-md-lg q-mt-xs-md">
    <div class="tool">
      <div class="q-mb-sm">
        <div class="row items-center">
          <div
            style="width: 12px; height: 12px; border-radius: 1px"
            class="q-mr-sm"
            :class="colorItem"
          ></div>
          <span class="text-roboto-15-500 text-weight-bolder">{{ title }}</span>
        </div>
      </div>
      <div class="row justify-between items-center q-mt-lg">
        <div class="col-lg-6 col-12" style="display: flex; align-items: end">
          <div style="line-height: 1rem">
            <p class="text-roboto-32-700">
              {{ $filters.currentValue(balance, brCoin) }}
            </p>
            <p class="text-weight-light">
              (USD {{ $filters.convertCoin(balance) }})
            </p>
          </div>
        </div>
        <p class="text-roboto-16-400 text-muted col-lg-6 col-12">
          +2% vs. período anterior
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BalanceItems",
  props: {
    title: { type: String },
    icon: { type: String },
    balance: { type: String, default: "0,00" },
    country: { type: Boolean, default: false },
    cipher: { type: String, default: "R$" },
    brCoin: { type: Boolean, default: true },
    objText: { type: [Object, Boolean], default: false },
    colorItem: { type: String },
    btnBgColor: { type: String, default: "btn-bank" },
    bgBadgeBank: { type: String, default: "badge-bank" },
    loading: { type: Boolean },
    // iconTheme: { type: String, default: "white" },
  },
  setup() {
    return {};
  },
});
</script>
