<template>
  <div class="row text-center q-ma-xl">
    <div class="col-12 q-mt-xl q-pt-lg">
      <gestao-svg />
    </div>

    <div class="col-md-4 col-sm-12" v-for="service in services" :key="service">
      <services-gestao
        :title="service.title"
        :imgService="service.img"
        :description="service.description"
        :jscontrol="service.jscontrol"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, watch } from "vue";
import ServicesGestao from "../components/ServicesGestao.vue";
import GestaoSvg from "../components/GestaoSvg.vue";

export default defineComponent({
  name: "ServicesLayout",
  components: {
    ServicesGestao,
    GestaoSvg,
  },

  setup() {
    const services = [
      {
        title: "Gerenciamento de Risco",
        img: "img/gerenciamento.png",
        description: "Diversificação e consolidação de patrimônio.",
        animate: "animate__animated",
        slide: "animate__slideInLeft",
        jscontrol: "js-left",
      },
      {
        title: "Diluição de Custos",
        img: "img/diluicao-custo.png",
        description: "Taxas de administração e de performance mínimas.",
        animate: "animate__animated",
        slide: "animate__slideInUp",
        jscontrol: "js-center",
      },
      {
        title: "Gestão Profissional",
        img: "img/gestao.png",
        description:
          "Profissionais entregando rentabilidades acima do mercado, focando sempre em menos risco e mais retorno.",
        animate: "animate__animated",
        slide: "animate__slideInRight",
        jscontrol: "js-right",
      },
    ];
    return {
      services,
    };
  },
});
</script>
