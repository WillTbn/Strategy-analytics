<template>
  <div class="row control-j-center items-center">
    <div
      class="col-md-4 col-sm-12 control-py self-center"
      v-for="list in listItems"
      :key="list"
    >
      <div class="container">
        <p class="text-h4 text-weight-bolder">{{ list.title }}</p>
        <p class="text-weight-bold q-mx-sm">{{ list.one }}</p>
        <p class="text-weight-bold q-mx-sm">{{ list.two }}</p>
        <p class="text-weight-bold q-mx-sm">{{ list.three }}</p>
      </div>
    </div>
  </div>
  <div class="row justify-center items-center q-ma-xl q-py-xl">
    <div class="col-md-6 col-sm-12">
      <p class="text-h4 text-weight-bolder">
        Agregar valor financeiro na vida dos nossos clientes a longo prazo
      </p>
    </div>
    <div class="col-md-4 col-sm-12">
      <p class="text-h8">
        A Gestão de Investimentos é essencial na Strategy Analytics para cumprir
        com a nossa responsabilidade de promover os interesses econômicos de
        longo prazo dos nossos clientes. Acreditamos que empresas com uma gestão
        eficiente de riscos e oportunidades, especialmente em sustentabilidade,
        tendem a oferecer um desempenho financeiro sustentável e duradouro.
        Elevados padrões e liderança executiva forte são fundamentais para a
        resiliência e adaptação das empresas aos desafios macroeconômicos,
        impactando positivamente o seu desempenho financeiro ao longo do tempo.
      </p>
    </div>
  </div>
  <reach-layout></reach-layout>
</template>
<script>
import { defineComponent } from "vue";
import ReachLayout from "./ReachLayout.vue";
export default defineComponent({
  name: "ManagementcontentLayout",
  components: { ReachLayout },

  setup() {
    const listItems = [
      {
        title: "Políticas de administração",
        one: "Princípios",
        two: "Prioridades com clientes",
        three: "Resumo de políticas para 2023",
      },
      {
        title: "Administração em Ação",
        one: "Plataforma InvestVisão",
        two: "Relatório Anual",
        three: "Centro Avançado de Inteligência de Investimentos",
      },
    ];
    return { listItems };
  },
});
</script>
<style scoped>
.container {
  align-items: center;
  display: grid;
  justify-content: center;
}
</style>
