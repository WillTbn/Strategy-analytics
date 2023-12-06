<template>
  <div class="row text-left q-py-xl">
    <div class="col-6 q-ma-xl">
      <p class="text-h4">
        Leia detalhes das nossas perspectivas para a 2º metade de 2023:
      </p>
    </div>
  </div>
  <q-tabs
    v-model="tab"
    dense
    no-caps
    class="text-white q-px-xl q-mx-lg"
    active-color="text-white"
    active-bg-color="dark"
    align="left"
    indicator-color="transparent"
  >
    <q-tab name="0" label="Perspectivas globais de investimentos" />
    <q-tab name="1" label="Exibição de classe de ativos" />
    <q-tab name="2" label="Aproveitamendo as megaforças" />
  </q-tabs>
  <q-tab-panels
    v-model="tab"
    animated
    class="transparant-bg"
    transition-prev="jump-up"
    transition-next="jump-down"
  >
    <q-tab-panel v-for="tab in tabsDetails" :key="tab" :name="tab.id">
      <details-content
        class="detailsContent"
        :primaryTitle="tab.pTitle"
        :primaryDescr="tab.pDescription"
        :secondaryTitle="tab.sTitle"
        :secondaryDescr="tab.sDescription"
        :image="tab.img"
      ></details-content>
    </q-tab-panel>
  </q-tab-panels>
</template>
<script>
import { defineComponent, ref } from "vue";
import DetailsContent from "../components/DetailsContent.vue";

export default defineComponent({
  name: "DetailsLayouts",
  components: { DetailsContent },
  setup() {
    const tabsDetails = [
      {
        id: "0",
        pTitle: "O novo regime continua",
        pDescription:
          "Os últimos seis meses forneceram mais uma evidência de que estamos em um novo regime de maior volatilidade macroeconômica e de mercado. Esse regime é o resultado de uma série de restrições de oferta: elas significam que as economias de mercado desenvolvidas não podem mais produzir tanto sem alimentar uma inflação mais alta. Acreditamos que restrições de oferta serão uma característica permanente devido às mega forças que vemos moldando as perspectivas.",
        sTitle: "Novas oportunidades de investimentos",
        sDescription:
          " <p>Acreditamos que as oportunidades de investimento neste ambienteeconômico são diferentes das do passado. Como resultado, atualizamos nossos temas de investimentos começando com a 'Segurando Firme'.</p><p> Os mercados passaram a acreditar que os bancos centrais não flexibilizartão rapidamente a política em um mundo moldado por restrições de oferta– notadamente pela escassez de trabalhadores nos EUA.</p><p> Os bancos centrais são forçados a manter a política rígida contra aspressões inflacionárias. Incompatível com os retornos da classe deativos, isso interrompe quatro décadas de crescimento constante.</p><p> Um mercado de ações incomum</p><p>Valor de mercado da S&P vs. desempenho relativo do índice de mesmo peso,1990-2023.</p>",
        img: "img/image-2.png",
      },
      {
        id: "1",
        pTitle: "Novas oportunidades de <br/> investimentos",
        pDescription:
          "<p>Acreditamos que as oportunidades de investimento neste ambienteeconômico são diferentes das do passado. Como resultado, atualizamos nossos temas de investimentos começando com a 'Segurando Firme'.</p><p> Os mercados passaram a acreditar que os bancos centrais não flexibilizartão rapidamente a política em um mundo moldado por restrições de oferta– notadamente pela escassez de trabalhadores nos EUA.</p><p> Os bancos centrais são forçados a manter a política rígida contra aspressões inflacionárias. Incompatível com os retornos da classe deativos, isso interrompe quatro décadas de crescimento constante.</p><p> Um mercado de ações incomum</p><p>Valor de mercado da S&P vs. desempenho relativo do índice de mesmo peso,1990-2023.</p>",
        sTitle: "Novas oportunidades de investimentos",
        sDescription:
          " <p>Acreditamos que as oportunidades de investimento neste ambienteeconômico são diferentes das do passado. Como resultado, atualizamos nossos temas de investimentos começando com a 'Segurando Firme'.</p><p> Os mercados passaram a acreditar que os bancos centrais não flexibilizartão rapidamente a política em um mundo moldado por restrições de oferta– notadamente pela escassez de trabalhadores nos EUA.</p><p> Os bancos centrais são forçados a manter a política rígida contra aspressões inflacionárias. Incompatível com os retornos da classe deativos, isso interrompe quatro décadas de crescimento constante.</p><p> Um mercado de ações incomum</p><p>Valor de mercado da S&P vs. desempenho relativo do índice de mesmo peso,1990-2023.</p>",
        img: "",
      },
      {
        id: "2",
        pTitle: "O novo regime continua",
        pDescription:
          "Os últimos seis meses forneceram mais uma evidência de que estamos em um novo regime de maior volatilidade macroeconômica e de mercado. Esse regime é o resultado de uma série de restrições de oferta: elas significam que as economias de mercado desenvolvidas não podem mais produzir tanto sem alimentar uma inflação mais alta. Acreditamos que restrições de oferta serão uma característica permanente devido às mega forças que vemos moldando as perspectivas.",
        sTitle: "Novas oportunidades de investimentos",
        sDescription:
          " <p>Acreditamos que as oportunidades de investimento neste ambienteeconômico são diferentes das do passado. Como resultado, atualizamos nossos temas de investimentos começando com a 'Segurando Firme'.</p><p> Os mercados passaram a acreditar que os bancos centrais não flexibilizartão rapidamente a política em um mundo moldado por restrições de oferta– notadamente pela escassez de trabalhadores nos EUA.</p><p> Os bancos centrais são forçados a manter a política rígida contra aspressões inflacionárias. Incompatível com os retornos da classe deativos, isso interrompe quatro décadas de crescimento constante.</p><p> Um mercado de ações incomum</p><p>Valor de mercado da S&P vs. desempenho relativo do índice de mesmo peso,1990-2023.</p>",
        img: "img/image-2.png",
      },
    ];
    return {
      tab: ref("0"),
      tabsDetails,
    };
  },
});
</script>
<style>
.q-tab-panel {
  padding: 0 !important;
}
.detailsContent {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#06121c+0,08090e+24,08090e+87,0e080c+99,0f080c+99,130a0f+99,2c1723+100,1e181f+100,1e1b1f+100 */
  background: radial-gradient(
    ellipse at center,
    rgba(6, 18, 28, 1) 0%,
    rgba(8, 9, 14, 1) 24%,
    rgba(8, 9, 14, 1) 87%,
    rgba(14, 8, 12, 1) 99%,
    rgba(15, 8, 12, 1) 99%,
    rgba(19, 10, 15, 1) 99%,
    rgba(44, 23, 35, 1) 100%,
    rgba(30, 24, 31, 1) 100%,
    rgba(30, 27, 31, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>
