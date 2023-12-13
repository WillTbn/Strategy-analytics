<template>
  <div class="MarketriskLayout q-my-lg">
    <div class="row justify-center text-center q-py-lg">
      <div class="col-md-8 col-sm-10">
        <title-secondary
          text="Pense na abordagem como um barômetro de risco do mercado"
        />
      </div>
    </div>
  </div>
  <div class="text-white control-risk-py" v-for="list in lists" :key="list">
    <risk-details
      :colorText="list.color"
      :risk="list.risk"
      :image="list.image"
      :exposure="list.exposure"
      :chances="list.chances"
      :borderColor="list.border"
    />
  </div>
  <div class="row justify-center text-center q-py-lg text-white control-py">
    <div class="col-9">
      <title-secondary
        text="Quanto menor o risco, maior é a probabilidade de se obter retornos"
      />
    </div>
    <div class="col-10 text-left q-my-lg q-py-lg text-body2">
      <p>
        Na dinâmica do mercado de valores, os períodos caracterizados por baixos
        riscos representam oportunidades cruciais que exigem identificação e
        ação precisa. É nesses momentos que nossa metodologia se destaca,
        aproveitando-se de um sistema meticulosamente desenvolvido para
        maximizar o potencial de investimento. Esta abordagem reflete nossa
        filosofia de não adotar uma postura estática diante das flutuações do
        mercado, mas sim uma flexibilidade estratégica e adaptativa.
      </p>
      <p>
        Reconhecemos que o mercado apresenta fases distintas: períodos de
        agressividade, onde é possível obter ganhos significativos com riscos
        minimizados, e períodos de alta volatilidade, que exigem uma abordagem
        mais cautelosa. Durante estes últimos, nossa estratégia se inclina para
        a conservação de capital, evitando exposições desnecessárias ao risco,
        até que uma nova janela de oportunidade se apresente.
      </p>
      <p>
        O cerne de nossa estratégia reside no alinhamento preciso de quatro
        variáveis chave, conforme indicado pelo nosso sistema de análise. A
        intersecção desses fatores – valoração, sentimentos do mercado,
        indicadores macroeconômicos e ação dos preços – nos fornece uma
        compreensão aprofundada do nível de risco e da intensidade do mercado
        atual. É esta sincronização estratégica que nos permite navegar pelo
        mercado de valores com uma perspectiva clara, prudência e assertividade.
      </p>
    </div>
  </div>
  <undersmarke-Layout class="control-py" />
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";
import RiskDetails from "../components/RiskDetails.vue";
import UndersmarkeLayout from "./UndersmarkeLayout.vue";

export default defineComponent({
  name: "MarketriskLayout",
  components: { TitleSecondary, RiskDetails, UndersmarkeLayout },
  setup() {
    const lists = [
      {
        color: "color-red",
        risk: "Alto risco",
        image: "img/risco-alto.png",
        exposure: "Exposição não recomendada",
        chances: "Baixas chances de retornos no médio prazo",
        border: "red-border",
      },
      {
        color: "color-yellow",
        risk: "Risco Médio",
        image: "img/risco-medio.png",
        exposure: "Exposição não recomendada",
        chances: "Baixas chances de retornos no médio prazo",
        border: "yellow-border",
      },
      {
        color: "color-green",
        risk: "Baixo Risco",
        image: "img/risco-baixo.png",
        exposure: "Exposição não recomendada",
        chances: "Baixas chances de retornos no médio prazo",
        border: "green-border",
      },
    ];
    return { lists };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-risk-py {
  padding: 5rem;
}
@media (max-width: 768px) {
  .control-risk-py {
    padding-inline: 0 !important;
  }
}
</style>
