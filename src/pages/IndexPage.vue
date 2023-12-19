<template>
  <q-page class="text-white" style="min-height: 2160px" padding>
    <header-layout class="main control-mb" :reverse="false">
      <div class="col-md-5 col-sm-10 q-ml-lg-lg text-left">
        <title-subtitle
          textTop="perspectivas para 2° metade do ano de 2023"
          textTitle="Novo regime, novas oportunidades"
          textDescription="28 de Junho de 2023 | O novo e mais volátil regime econômico, oferece oportunidades de investimento diferentes, e ao mesmo tempo abrangentes. A persistência das restrições de produção está obrigando os principais bancos centrais a manter taxas de juros elevadas.
        Identificamos oportunidades nas classes de ativos e aproveitarmos as megaforças."
        />
        <q-btn
          color="negative"
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
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
.main {
  position: relative;
  width: 100%;
  /*
  height: 120vh;
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
  );
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-repeat: round; */
  /* margin-top: -100px; */
}
.main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: inherit;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  filter: blur(10px);
}
</style>
