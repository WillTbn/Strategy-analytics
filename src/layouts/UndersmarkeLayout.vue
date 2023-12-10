<template>
  <div class="UndersmarkeLayout q-my-lg text-white">
    <div class="row justify-center text-center q-py-lg">
      <div class="col-md-8 col-sm-12">
        <title-secondary
          text="Entenda um pouco mais sobre nossa metodologia "
        />
      </div>
    </div>

    <sydeby-syde
      v-for="list in listUnders"
      :key="list"
      :title="list.title"
      :subTitle="list.sub"
      :text="list.description"
      :reverse="list.reverse"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";
import SydebySyde from "../components/SydebySyde.vue";

export default defineComponent({
  name: "UndersmarkeLayout",
  components: { TitleSecondary, SydebySyde },
  setup() {
    const listUnders = [
      {
        title: "Valoração",
        sub: "Longo prazo (5 a 10+ anos)",
        reverse: false,
        description:
          "A Gestão de Investimentos é essencial na Strategy Analytics para cumprir com a nossa responsabilidade de promover os interesses econômicos de longo prazo dos nossos clientes. Acreditamos que empresas com uma gestão eficiente de riscos e oportunidades, especialmente em sustentabilidade, tendem a oferecer um desempenho financeiro sustentável e duradouro. Elevados padrões e liderança executiva forte são fundamentais para a resiliência e adaptação das empresas aos desafios macroeconômicos, impactando positivamente o seu desempenho financeiro ao longo do tempo.",
      },
      {
        title: "Indicadores Macroeconômicos",
        sub: "Longo prazo (1 a 3 anos)",
        reverse: true,
        description:
          "A Gestão de Investimentos é essencial na Strategy Analytics para cumprir com a nossa responsabilidade de promover os interesses econômicos de longo prazo dos nossos clientes. Acreditamos que empresas com uma gestão eficiente de riscos e oportunidades, especialmente em sustentabilidade, tendem a oferecer um desempenho financeiro sustentável e duradouro. Elevados padrões e liderança executiva forte são fundamentais para a resiliência e adaptação das empresas aos desafios macroeconômicos, impactando positivamente o seu desempenho financeiro ao longo do tempo.",
      },
      {
        title: "Sentimento",
        sub: "Médio prazo (3 a 6 meses)",
        reverse: false,
        description:
          "A Gestão de Investimentos é essencial na Strategy Analytics para cumprir com a nossa responsabilidade de promover os interesses econômicos de longo prazo dos nossos clientes. Acreditamos que empresas com uma gestão eficiente de riscos e oportunidades, especialmente em sustentabilidade, tendem a oferecer um desempenho financeiro sustentável e duradouro. Elevados padrões e liderança executiva forte são fundamentais para a resiliência e adaptação das empresas aos desafios macroeconômicos, impactando positivamente o seu desempenho financeiro ao longo do tempo.",
      },
      {
        title: "Ação dos Preços",
        sub: "Curto prazo (Semanas a 3 meses)",
        reverse: true,
        description:
          "A Gestão de Investimentos é essencial na Strategy Analytics para cumprir com a nossa responsabilidade de promover os interesses econômicos de longo prazo dos nossos clientes. Acreditamos que empresas com uma gestão eficiente de riscos e oportunidades, especialmente em sustentabilidade, tendem a oferecer um desempenho financeiro sustentável e duradouro. Elevados padrões e liderança executiva forte são fundamentais para a resiliência e adaptação das empresas aos desafios macroeconômicos, impactando positivamente o seu desempenho financeiro ao longo do tempo.",
      },
    ];
    return { listUnders };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
