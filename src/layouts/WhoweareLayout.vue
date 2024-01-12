<template>
  <div
    class="row ustify-center text-center q-gutter-lg q-mt-xl padding-i-mobile"
  >
    <div class="col-md-4 col-sm-6">
      <p class="text-h5 text-weight-bolder">Quem somos?</p>
    </div>
  </div>
  <div class="row justify-center text-center q-gutter-lg border-blue">
    <div class="col-md-3 col-sm-6" v-for="product in products" :key="product">
      <services-gestao
        :title="product.title"
        :imgService="product.image"
        :description="product.description"
        :jscontrol="product.js"
      />
    </div>
  </div>
  <!-- <div class="row q-mt-xl"> -->
  <text-image
    v-for="are in WeAre"
    :key="are"
    :image="are.image"
    :classAdd="are.className"
    :border="true"
  >
    <div class="col-2 col-md-3">
      <title-subtitle
        :textTitle="are.title"
        :textDescription="are.description"
      />

      <!-- <span class="text-h6 text-weight-bolder">{{ are.title }}</span
      ><br />
      <span class="text-subtitle2">{{ are.description }}</span> -->
    </div>
  </text-image>
  <!-- </div> -->
</template>
<script>
import TitleSubtitle from "../components/TitleSubtitle.vue";
import { defineComponent, ref } from "vue";
import ServicesGestao from "../components/ServicesGestao.vue";
import TextImage from "../components/TextImage.vue";

export default defineComponent({
  name: "WhoweareLayout",
  components: { ServicesGestao, TextImage, TitleSubtitle },
  setup() {
    const products = [
      {
        title: "Consolidada",
        image: "img/consolidada.png",
        description:
          "Entregando o serviço que mais se adapta ao interesse de todos perfil de investimento.",
        js: "js-left",
      },
      {
        title: "Produtos",
        image: "img/produtos.png",
        description:
          "Entregando o serviço que mais se adapta ao interesse de todos perfil de investimento.",
        js: "js-center",
      },
      {
        title: "Produtos",
        image: "img/produtos-2.png",
        description:
          "A Strategy Analytics tem se comprometido a investir e atender clientes em toda a região",
        js: "js-right",
      },
    ];

    const WeAre = [
      {
        title: "Somos Investidores",
        description:
          "Colocando em prática as economias de pessoas e instituições em todo o mundo nos mercados globais.",
        className: "justify-center items-center text-left q-pa-lg q-my-xl",
        image: "img/landing-page/banner-half-investidores-1900.jpg",
      },
      {
        title: "Somos técnologos",
        description:
          "Inovando constantemente para fornecer comodidade, transparência e precisão de investimentos.",
        className:
          "justify-center items-center text-right q-pa-lg q-my-xl reverse",
        image: "img/landing-page/banner-half-tecnologo-1900.jpg",
      },
      {
        title: "Somos da equipe",
        description:
          "Colocando em prática as economias de pessoas e instituições em todo o mundo nos mercados globais.",
        className: "justify-center items-center text-left q-pa-lg q-my-xl",
        image: "img/landing-page/banner-half-equipe.jpg",
      },
    ];

    return {
      products,
      WeAre,
    };
  },
});
</script>
