<template>
  <q-card class="IncomeLayout">
    <q-card-section>
      <header-card :titleCard="'Adicionar rendimentos para ' + user.name" />
    </q-card-section>
    <q-card-section>
      <div
        class="row justify-center q-my-lg"
        v-if="getUserInvestment(user.investment).length > 0"
      >
        <div class="col-12 text-center">
          <p class="text-overline">Atual rendimento do cliente</p>
        </div>
        <details-investment
          :details="getUserInvestment(user.investment)[0]"
          class="col-12"
        />
      </div>
      <form @submit.prevent.stop="onSubmit" class="row justify-center">
        <q-select
          filled
          v-model="income"
          :options="data"
          option-value="id"
          option-label="name"
          stack-label
          label="Selecione o investimento"
          class="col-10"
        >
          <template v-slot:selected>
            Investimento:
            <q-chip
              v-if="income"
              square
              color="white"
              text-color="primary"
              class="q-my-none q-ml-xs q-mr-none"
            >
              {{ income.name }}
              <q-badge
                color="warning"
                text-color="white"
                :label="income.monthly_estimate"
              />
              <q-badge
                color="positive"
                text-color="white"
                :label="income.annual_estimate"
              />
              <q-badge
                color="primary"
                text-color="white"
                :label="income.type"
              />
            </q-chip>
            <q-badge v-else>*none*</q-badge>
          </template>
        </q-select>
        <div class="col-12 text-center">
          <q-toggle
            v-model="wallet"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="Transfere saldo da carteira para o investimento"
          />
        </div>

        <div class="row q-mt-lg justify-center" v-if="income">
          <div class="text-center col-12">
            <p class="text-overline">Vai atualizar para</p>
          </div>
          <div class="col-12">
            <details-investment :details="income" />
          </div>
        </div>
        <q-card-actions align="right" class="col-12 q-mt-xl">
          <!-- <q-btn flat label="fechar" color="red-14" v-close-popup /> -->
          <q-btn
            label="atualizar"
            color="primary"
            type="submit"
            :disable="income"
          />
        </q-card-actions>
      </form>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { useInvestmentStore } from "src/stores/investments";
import { storeToRefs } from "pinia";
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
import DetailsInvestment from "src/system/components/wallet/DetailsInvestment.vue";
import useIncome from "src/composables/system/Requests/useIncome";
import useClient from "src/composables/system/Requests/useClient";

export default defineComponent({
  name: "IncomeLayout",
  components: { HeaderCard, DetailsInvestment },
  props: {
    user: { type: Object },
  },
  setup(props) {
    const wallet = ref(true);
    const income = ref("");
    const investmentStore = useInvestmentStore();
    const { data, getUserInvestment } = storeToRefs(investmentStore);
    // const currentIncome = getUserInvestment("Tesouro IPCA+...");
    const { getAllIncome } = useIncome();
    const { setIncome } = useClient();

    const onSubmit = async () => {
      const dataIncome = {
        user_id: props.user.id,
        investment_id: income.value.id,
        transiction_wallet: wallet.value,
      };
      await setIncome(dataIncome);
      console.log("ola", dataIncome);
    };
    onMounted(async () => {
      // income.value = getUserInvestment(props.user.investment)
      await getAllIncome();
    });
    return {
      onSubmit,
      data,
      income,
      getUserInvestment,
      wallet,
      // currentIncome,
    };
  },
});
</script>
<style lang=""></style>
