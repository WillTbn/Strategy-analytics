<template>
  <div
    class="row ustify-center text-center q-gutter-lg q-mt-xl padding-i-mobile"
  >
    <div class="col-md-4 col-sm-6">
      <p class="text-h5 text-weight-bolder">Nossos compromissos:</p>
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
        title: "Segurança",
        image: "img/contribution-segurancy.png",
        description:
          "A Strategy Analytics se compromete em garantir sua estabilidade financeira. Por meio de orientação constante e foco em construir um patrimônio estável, asseguramos seu bem-estar ao longo da vida.",
        js: "left",
      },
      {
        title: "Valorização",
        image: "img/contribution-investion.png",
        description:
          "Nos dedicamos a promover a expansão contínua do seu patrimônio. Através de um acompanhamento atento e da adaptação às tendências de mercado, garantimos que seus investimentos cresçam e se valorizem de forma eficaz. ",
        js: "center",
      },
      {
        title: "Soluções Financeiras",
        image: "img/contribution-nottax.png",
        description:
          "Oferecemos aos nossos clientes de alto nível, alavancagem através de empréstimos garantindo um fluxo de caixa saudável e a segurança necessária para o crescimento de suas empresas. Nosso compromisso é maximizar o aproveitamento das oportunidades de mercado e fornecer o suporte financeiro que atende às suas necessidades, promovendo um crescimento sustentável para o seu negócio.",
        js: "right",
      },
    ];
    return {
      contributions,
    };
  },
});
</script>
