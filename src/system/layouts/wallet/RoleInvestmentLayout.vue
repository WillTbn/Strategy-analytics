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
        <div class="text-subtitle2">
          {{ item.description }},
          <b class="cursor-pointer text-underline"> clique aqui</b> e comece
          agora!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "RoleInvestmentLayout",
  setup() {
    const roles = [
      {
        title: "Expansão Patrimonial",
        current: "00,00",
        brCoin: true,
        // description: false,
        description: "Vamos expandir seu patrimônio?",
      },
      {
        title: "Previdência Futura",
        current: "00,00",
        brCoin: true,
        description: "Ainda não está investindo na sua aposentadoria?",
      },
      {
        title: "Expansão Patrimonial",
        current: "00,00",
        brCoin: true,
        description: "Aproveite o mercado de criptomoedas!",
      },
      {
        title: "Expansão Patrimonial",
        current: "00,00",
        brCoin: false,
        description: "Aproveite o mercado de criptomoedas!",
      },
    ];
    return { roles };
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
