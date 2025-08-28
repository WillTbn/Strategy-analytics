<template>
  <q-page class="WalletPage q-ma-lg">
    <balancecurrent-layout />
    <resume-contracts-layout />
    <loan-resume-layout />
    <!-- <role-investment-layout /> -->
  </q-page>
</template>

<script setup>
// import { onMounted, ref } from "vue";
import BalancecurrentLayout from "../layouts/wallet/BalancecurrentLayout.vue";
import ResumeContractsLayout from "../layouts/wallet/ResumeContractsLayout.vue";
import LoanResumeLayout from "../layouts/wallet/LoanResumeLayout.vue";
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
