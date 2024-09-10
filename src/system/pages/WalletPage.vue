<template>
  <q-page class="WalletPage">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <balancecurrent-layout />
      </div>
    </div>
    <role-investment-layout />
  </q-page>
</template>

<script setup>
// import { onMounted, ref } from "vue";
import BalancecurrentLayout from "../layouts/wallet/BalancecurrentLayout.vue";
import RoleInvestmentLayout from "../layouts/wallet/RoleInvestmentLayout.vue";
</script>

<style scoped lang="sass">
.card-border
  border-radius: 18px
  border: solid 1px gray
  padding: 1rem
  margin-right: 12px
// não repita isso em casa
.WalletPage
  margin-top: -80px
</style>
