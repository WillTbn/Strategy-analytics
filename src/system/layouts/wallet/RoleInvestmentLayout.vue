<template>
  <div class="RoleInvestmentLayout">
    <roles-investment-details
      title="Expansão Patrimonial"
      :currentValue="$filters.convertCoin(getCurrentInvest)"
      :lastValue="$filters.convertCoin(getLastMonth)"
      descriptionAction="Ainda não está expandindo seu patrimônio?"
      brCoin="$"
    />
    <roles-investment-details
      title="Previdência Futura"
      currentValue="0,00"
      lastValue="0,00"
      descriptionAction="Ainda não está investindo na sua aposentadoria?"
    />
    <roles-investment-details
      title="Poupança"
      currentValue="0,00"
      lastValue="0,00"
      descriptionAction="Comece a usar a poupança para obter lucros!"
    />
    <roles-investment-details
      title="Blockchain"
      currentValue="0,00"
      lastValue="0,00"
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
