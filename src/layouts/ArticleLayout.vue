<template>
  <div class="row text-center q-ma-xl">
    <div class="col-12 q-mt-xl q-pt-lg">
      <span class="text-h3">Temas centrais do artigo</span>
    </div>

    <div class="col-md-4 col-sm-12" v-for="etap in etaps" :key="etap">
      <stage-article
        :etaps="etap.etaps"
        :title="etap.title"
        :description="etap.description"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, watch } from "vue";
import StageArticle from "../components/StageArticle.vue";
// import ServicesGestao from "../components/ServicesGestao.vue";
// import GestaoSvg from "../components/GestaoSvg.vue";

export default defineComponent({
  name: "ArticleLayout",
  components: {
    StageArticle,
  },

  setup() {
    const etaps = [
      {
        title: "Mantendo-se firme",
        etaps: "01",
        description:
          "Acreditamos que as restrições de produção manterão a inflação rígida e obrigarão os bancos centrais a manter a política mais rigorosa no longo prazo. Acreditamos que este novo regime econômico proporciona oportunidades abundantes de investimento diferentes.",
        jscontrol: "js-left",
      },
      {
        title: "Impulsionando novas oportunidades",
        etaps: "02",
        description:
          "A alta volatilidade trouxe um desempenho de segurança mais divergente em relação ao mercado mais amplo. Acreditamos que isso cria outras oportunidades para gerar retornos, com exposições e visões mais detalhadas.",
        jscontrol: "js-center",
      },
      {
        title: "Aproveitando as megaforças",
        etaps: "03",
        description:
          "As mega forças estão moldando as oportunidades de investimento hoje, e não em um futuro distante. Acreditamos que a chave é identificar catalisadores que podem sobrecarregar essas forças e como elas interagem umas com as outras.",
        jscontrol: "js-right",
      },
    ];
    return {
      etaps,
    };
  },
});
</script>
