<template>
  <div class="RoleInvestmentLayout">
    <div
      class="row justify-center q-py-lg"
      v-for="(item, index) in roles"
      :key="index"
    >
      <div class="col-12">
        <q-separator color="grey-10" />
      </div>
      <div class="col-12 col-md-8 q-my-lg">
        <div class="text-roboto-23-500">
          {{ item.title }}
        </div>
        <div class="text-roboto-23-400-shadow">
          {{ $filters.currentValue(item.current, item.brCoin) }}
        </div>
        <div v-if="item.current != '0,00'">
          <span>No ultimo mês</span><br />
          <span class="text-roboto-23-400-shadow">
            <q-icon color="green" name="fa-solid fa-plus"></q-icon>
            {{ $filters.currentValue(last, item.brCoin) }}
          </span>
        </div>

        <div class="text-subtitle2" v-else>
          {{ item.description }},
          <b class="cursor-pointer text-underline"> clique aqui</b> e comece
          agora!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "RoleInvestmentLayout",
  props: {
    last: { type: String, default: "0,00" },
    current: { type: String },
  },
  setup(props) {
    // Função para converter strings no formato "100,00" para números
    const convertToNumber = (value) => {
      if (typeof value !== "string") return 0;
      return parseFloat(value.replace(",", "."));
    };

    // Converter as propriedades last e current para números
    const lastValue = convertToNumber(props.last);
    const currentValue = convertToNumber(props.current);

    // Somar os valores convertidos
    const total = lastValue + currentValue;
    // Função para formatar o número no formato desejado
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };
    const roles = [
      {
        title: "Expansão Patrimonial",
        current: formatCurrency(total),
        brCoin: true,
        // description: false,
        description: "Vamos expandir seu patrimônio?",
      },
      {
        title: "Previdência Futura",
        current: "0,00",
        brCoin: true,
        description: "Ainda não está investindo na sua aposentadoria?",
      },
      {
        title: "Expansão Patrimonial",
        current: "0,00",
        brCoin: true,
        description: "Aproveite o mercado de criptomoedas!",
      },
      {
        title: "Expansão Patrimonial",
        current: "0,00",
        brCoin: false,
        description: "Aproveite o mercado de criptomoedas!",
      },
    ];
    return { roles, total, formatCurrency };
  },
});
</script>
<style lang="sass">
.separ
  height: 1rem
  border-top: 1px rgba(0, 0, 0, 0.20)
  border-bottom: 1px rgba(0, 0, 0, 0.20)
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10)
</style>
