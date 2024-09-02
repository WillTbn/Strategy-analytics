<template>
  <div
    class="row ustify-center text-center q-gutter-lg q-mt-xl padding-i-mobile"
  >
    <div class="col-md-4 col-sm-6">
      <p class="text-h5 text-weight-bolder">Nossa Contribuição?</p>
    </div>
  </div>
  <div class="row justify-center text-center q-gutter-lg">
    <div
      class="col-md-3 col-sm-6"
      v-for="contribution in contributions"
      :key="contribution"
    >
      <services-gestao
        :title="contribution.title"
        :imgService="contribution.image"
        :description="contribution.description"
        :jscontrol="contribution.js"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
// import StageArticle from "../components/StageArticle.vue";
import ServicesGestao from "../components/ServicesGestao.vue";
// import GestaoSvg from "../components/GestaoSvg.vue";

export default defineComponent({
  name: "ContributionLayout",
  components: { ServicesGestao },

  setup() {
    const contributions = [
      {
        title: "Segurança Financeira",
        image: "img/contribution-segurancy.png",
        description:
          "Garantia de Estabilidade Financeira Estamos comprometidos em orientar milhões de indivíduos a construir um patrimônio seguro e duradouro, assegurando seu bem-estar financeiro ao longo da vida..",
        js: "left",
      },
      {
        title: "Acesso ao investimento",
        image: "img/contribution-investion.png",
        description:
          "Nós facilitamos os investimentos e os tornamos mais acessíveis.",
        js: "center",
      },
      {
        title: "Sem taxas desnecessarias",
        image: "img/contribution-nottax.png",
        description:
          "Proporcionamos consultoria especializada e de excelência, harmonizada com uma estrutura de custos surpreendentemente acessível.",
        js: "right",
      },
    ];
    return {
      contributions,
    };
  },
});
</script>
