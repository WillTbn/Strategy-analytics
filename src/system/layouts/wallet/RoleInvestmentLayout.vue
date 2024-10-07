<template>
  <div class="RoleInvestmentLayout">
    <roles-investment-details
      v-if="getExpansive"
      title="Expansão Patrimonial"
      :currentValue="$filters.formatPartternCurrency(getExpansive.value)"
      :lastValue="$filters.formatPartternCurrency(getExpansive.data_info)"
      :descriptionAction="getExpansive.description"
      brCoin="$"
    />
    <roles-investment-details
      v-if="getPersonalite"
      title="Reserva de emergência"
      :currentValue="$filters.formatPartternCurrency(getPersonalite.value)"
      :lastValue="$filters.formatPartternCurrency(getExpansive.data_info)"
      brCoin="$"
      :descriptionAction="getPersonalite.description"
    />
    <roles-investment-details
      title="Previdência Futura"
      currentValue="0,00"
      lastValue="0,00"
      brCoin="$"
      descriptionAction="Ainda não está investindo na sua aposentadoria?"
    />
    <roles-investment-details
      title="Poupança"
      currentValue="0,00"
      lastValue="0,00"
      brCoin="$"
      descriptionAction="Comece a usar a poupança para obter lucros!"
    />
    <roles-investment-details
      title="Blockchain"
      currentValue="0,00"
      lastValue="0,00"
      brCoin="$"
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
    const { getCurrentInvest, getLastMonth, getPersonalite, getExpansive } =
      storeToRefs(userStore);
    return { getCurrentInvest, getLastMonth, getPersonalite, getExpansive };
  },
});
</script>
<style lang="sass"></style>
