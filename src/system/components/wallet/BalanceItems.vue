<template>
  <div class="banlanceItems col-12 col-md q-mb-md-lg q-mb-xs-md">
    <div class="bg-grey-3 text-black card-balance" style="">
      <div class="header-balance">
        <q-avatar color="green-14">
          <q-icon :name="icon" class="q-pa-sm" size="1.5rem" />
        </q-avatar>
        <span class="text-subtitle1 text-weight-bolder">{{ title }}</span>
      </div>
      <div class="body-balance">
        <span class="text-subtitle2 q-px-sm">Saldo total</span>
        <p class="text-weight-bolder text-h5 q-px-sm">
          {{ cipher }} {{ balance }}
        </p>
      </div>
      <p>Mais Informações</p>
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
  },
  setup() {
    return {};
  },
});
</script>
<style>
.card-balance {
  padding: 1.3rem;
  border-radius: 14px;
  margin-right: 12px;
}
.header-balance {
  padding-bottom: 2rem;
}
.body-balance {
  padding-bottom: 3rem;
}
</style>
