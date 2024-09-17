<template>
  <q-page class="text-white" style="min-height: 2160px">
    <header-layout class="main control-mb bg-header" :reverse="false">
      <div class="col-md-5 col-sm-10 q-ml-lg-lg text-left">
        <title-subtitle
          textTop="perspectivas para 1° semestre de 2024"
          textTitle="Queda na taxa de juros e a ascensão das empresas de inteligência artificial "
          textDescription="O cenário econômico está otimista com o mercado precificando cada vez mais início nos cortes da taxa de juros, porém, ainda é necessário prosseguir com cautela. Com o afrouxamento inflacionário em vista, as empresas de inteligência artificial continuam sua ascensão. Entenda como as Big Techs estão se beneficiando desse cenário, aproveitando as novas oportunidades e o ambiente econômico potencialmente favorável."
        />
        <q-btn
          color="primary"
          class="q-mt-sm"
          dense
          no-caps
          padding="xs lg"
          label="Veja os ETFS disponíveis"
          icon="fa-solid fa-chevron-right"
          to="/perspective"
        />
      </div>
    </header-layout>
    <weoffer-layout />
    <panorama-layout />
    <news-letter />
    <!-- <subscribers-layout /> -->
    <!-- <div class="empty" style="min-height: 12000px"></div> -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import HeaderLayout from "../layouts/HeaderLayout.vue";

import { defineComponent, ref } from "vue";
import WeofferLayout from "../layouts/WeofferLayout.vue";
import PanoramaLayout from "../layouts/PanoramaLayout.vue";
import NewsLetter from "../layouts/NewsLetter.vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    TitleSubtitle,
    WeofferLayout,
    PanoramaLayout,
    NewsLetter,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.bg-index {
  background: linear-gradient(
    45deg,
    #1a1e2d 0%,
    #1b1f2e 7%,
    #13476d 23%,
    #11517c 28%,
    #10517e 30%,
    #124e78 33%,
    #1a1e2d 53%,
    #1a1e2d 84%,
    #4e1723 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+  */
}
.main {
  position: relative;
  width: 100%;
}

.bg-header {
  background-image: url("https://strategyanalytics.com.br/img/landing-page/banner-home-right-2700novo.jpg");
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
