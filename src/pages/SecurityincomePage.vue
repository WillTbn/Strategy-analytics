<template>
  <div class="SecurityincomePage text-white">
    <!-- Seu conteúdo HTML aqui -->
    <variableprimary-layout
      title="Renda fixa"
      primaryTitle="Previdência Futura"
      secondTitle="Fundo de índice"
      sigla="PRF1"
      price="1.000.000"
      current=" +1,41 (+1,78%)"
      distri="7,49%"
      taxa="0,25%"
    />
    <whyincome-layout title="Por que PRF1?">
      <ol class="q-mt-xl">
        <li
          v-for="list in lists"
          :key="list"
          style="text-align: left"
          class="q-my-lg"
        >
          {{ list.content }}
        </li>
      </ol>
    </whyincome-layout>
    <profitability-layout></profitability-layout>
    <taxas-layout />
    <readings-layout />
    <news-letter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NewsLetter from "../layouts/NewsLetter.vue";
import VariableprimaryLayout from "../layouts/VariableprimaryLayout.vue";
import WhyincomeLayout from "../layouts/WhyincomeLayout.vue";
import ProfitabilityLayout from "../layouts/ProfitabilityLayout.vue";
import TaxasLayout from "../layouts/TaxasLayout.vue";
import ReadingsLayout from "../layouts/ReadingsLayout.vue";

export default defineComponent({
  name: "SecurityincomePage",
  components: {
    NewsLetter,
    VariableprimaryLayout,
    WhyincomeLayout,
    ProfitabilityLayout,
    TaxasLayout,
    ReadingsLayout,
  },
  setup() {
    const lists = [
      {
        content:
          "Investidores focados no aumento substancial do capital ao longo do tempo, ideal para quem busca um crescimento significativo em seu patrimônio.",
      },
      {
        content:
          "A ênfase é colocada em montar uma carteira robusta e bem estruturada, visando maximizar os lucros ao final do ciclo de investimento.",
      },
      {
        content:
          "Oferece opções de rendimentos periódicos (mensais, semestrais ou anuais), permitindo aos investidores escolher um plano que melhor se adapte às suas necessidades de liquidez e preferências de recebimento.",
      },
      {
        content:
          "A capacidade de ajustar os planos de investimento às circunstâncias e objetivos individuais dos investidores torna esta modalidade atraente para uma variedade de perfis, desde os mais conservadores aos mais agressivos.",
      },
      {
        content:
          "A ausência de um compromisso de longo prazo confere uma flexibilidade valiosa para os investidores, permitindo que ajustem seus planos e movimentem seus recursos conforme suas necessidades e circunstâncias mudem.",
      },
    ];
    return { lists };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
ol {
  list-style-position: inside;
}
</style>
