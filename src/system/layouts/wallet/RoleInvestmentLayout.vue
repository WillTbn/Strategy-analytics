<template>
  <div class="RoleInvestmentLayout">
    <roles-investment-details
      title="Expansão Patrimonial"
      :currentValue="getCurrentInvest"
      :lastValue="getLastMonth"
    />
    <roles-investment-details
      title="Previdência Futura"
      :currentValue="0.0"
      :lastValue="0.0"
      descriptionAction="Ainda não está investindo na sua aposentadoria?"
    />
    <roles-investment-details
      title="Poupança"
      :currentValue="0.0"
      :lastValue="0.0"
      descriptionAction="Comece a usar a poupança para obter lucros!"
    />
    <roles-investment-details
      title="Blockchain"
      :currentValue="0.0"
      :lastValue="0.0"
      :brCoin="false"
      descriptionAction="Aproveite o mercado de criptomoedas!"
    />
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";

import RolesInvestmentDetails from "src/system/components/wallet/RolesInvestmentDetails.vue";
export default defineComponent({
  name: "RoleInvestmentLayout",
  components: {
    RolesInvestmentDetails,
  },
  setup() {
    const userStore = useUserStore();
    const { getCurrentInvest, getLastMonth } = storeToRefs(userStore);
    return { getCurrentInvest, getLastMonth };
  },
});
</script>
<style lang="sass"></style>
