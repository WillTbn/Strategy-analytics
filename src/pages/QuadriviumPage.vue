<template>
  <div class="QuadriviumPage q-py-lg">
    <article-primary topText="Estratégia de Investimento" title="Quadrivium">
      <div class="row justify-center text-left q-my-xl q-px-lg">
        <div class="col-md-8 col-sm-11">
          <p class="paragraph" v-for="p in paragraph" :key="p">
            {{ p.content }}
          </p>
        </div>
      </div>
    </article-primary>

    <marketrisk-layout />
    <methodology-layout />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ArticlePrimary from "../components/ArticlePrimary.vue";
import MarketriskLayout from "../layouts/MarketriskLayout.vue";
import MethodologyLayout from "../layouts/MethodologyLayout.vue";

export default defineComponent({
  name: "QuadriviumPage",
  components: { ArticlePrimary, MarketriskLayout, MethodologyLayout },
  setup() {
    const paragraph = [
      {
        content:
          "Na Strategy Analytics, adotamos a metodologia Quadrivium para navegar pelas complexidades do mercado financeiro. Esta abordagem nos permite focar em ação dos preços, valoração e indicadores macroeconômicos e de sentimento, fundamentais para a construção de carteiras resilientes e adaptativas.",
      },
      {
        content:
          "Nossa estratégia é orientada pelo ciclo dos mercados, capitalizando em ativos de renda variável em períodos de baixo risco e favorecendo ativos de renda fixa em tempos de risco elevado. Esta metodologia baseada em risco é projetada para maximizar a performance da carteira: quando os riscos são mínimos, aumentamos a exposição em renda variável, potencializando os retornos",
      },
      {
        content:
          "A tomada de decisão na Strategy Analytics é meticulosamente calculada e alinhada com uma visão otimista de mercado compartilhada por todos os integrantes da equipe. Nossa meta é alcançar lucros substanciais com o menor risco possível, sempre com o objetivo de consolidar e preservar o patrimônio das famílias que confiam em nós.",
      },
      {
        content:
          "om uma gestão de risco rigorosa e uma estratégia de diversificação bem- estabelecida, mantemos um desempenho excepcional durante os mercados em alta e garantimos lucros consideráveis ao proteger os ativos durante os períodos de volatilidade. A Strategy Analytics está comprometida em sustentar a excelência operacional e em exceder as expectativas de performance, independentemente das condições de mercado.",
      },
    ];
    return { paragraph };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.paragraph {
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  line-height: 102.945%; /* 32.943px */
}
</style>
