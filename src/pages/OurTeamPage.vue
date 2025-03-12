<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main bg-who" :reverse="false">
      <div class="col-md-5 col-sm-8 q-ml-lg-lg text-control">
        <title-subtitle
          textTopPersonal="Nossa liderança"
          textClass="text-primary"
          textTitle="Conheça nossa equipe"
          textDescription="Nossa equipe representa uma combinação harmoniosa de experiência consolidada e talento emergente, unida por uma paixão genuína pelo nosso trabalho. Composta por profissionais renomados com décadas de atuação no mercado e jovens talentos promissores, nossa organização conta com especialistas altamente qualificados e comunicativos, comprometidos em atender de forma eficiente e personalizada às necessidades de investidores de todos os perfis. "
        />
      </div>
    </header-layout>
    <team-content-layout></team-content-layout>
    <network-layout></network-layout>
    <news-letter />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="secondary" /> </q-page-scroller
  ></q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";
import NewsLetter from "../layouts/NewsLetter.vue";
import TeamContentLayout from "../layouts/TeamContentLayout.vue";
import NetworkLayout from "../layouts/NetworkLayout.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    TitleSubtitle,
    TeamContentLayout,
    NetworkLayout,
    NewsLetter,
  },
  setup() {},
});
</script>
