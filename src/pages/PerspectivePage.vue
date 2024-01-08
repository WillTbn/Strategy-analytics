<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main bg-header-perpective" :reverse="true">
      <div class="col-md-5 col-sm-10 q-ml-lg text-left">
        <title-subtitle
          textTop="perspectivas para 2° metade do ano de 2023"
          textTitle="Novo regime, novas oportunidades"
          textDescription="28 de Junho de 2023 | O novo e mais volátil regime econômico, oferece oportunidades de investimento diferentes, e ao mesmo tempo abrangentes. A persistência das restrições de produção está obrigando os principais bancos centrais a manter taxas de juros elevadas.
        Identificamos oportunidades nas classes de ativos e aproveitarmos as megaforças."
        />
        <q-btn
          class="q-mt-sm"
          size="sm"
          dense
          no-caps
          color="secondary"
          padding="xs lg"
          label="Ler perspectivas para segunda metade (PDF)"
          icon="fa-solid fa-chevron-right"
          to="/"
        />
      </div>
    </header-layout>
    <article-layout />
    <details-layouts />
    <authors-layout />
    <news-letter />
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
import { defineComponent, ref } from "vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import ArticleLayout from "../layouts/ArticleLayout.vue";
import DetailsLayouts from "../layouts/DetailsLayouts.vue";
import AuthorsLayout from "../layouts/AuthorsLayout.vue";
import NewsLetter from "../layouts/NewsLetter.vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";
export default defineComponent({
  components: {
    HeaderLayout,
    ArticleLayout,
    DetailsLayouts,
    AuthorsLayout,
    NewsLetter,
    TitleSubtitle,
  },
  setup() {},
});
</script>
<style>
.bg-header-perpective {
  background-image: url("img/landing-page/banner-home-left-darkblue.jpg");
  background-position-x: center;
  background-repeat: no-repeat;
}
</style>
