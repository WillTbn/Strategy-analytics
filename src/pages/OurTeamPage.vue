<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main" :reverse="false" image="img/image 1.png">
      <div class="col-md-5 col-sm-8 q-ml-lg-lg text-control">
        <title-subtitle
          textTopPersonal="Nossa liderança"
          textClass="text-primary"
          textTitle="Conheça nossa equipe"
          textDescription="Nossa equipe é um motivo de orgulho, composta por profissionais renomados com décadas de experiência no mercado e jovens talentos prodígios que são apaixonados pelo que fazem. Juntos, formamos uma organização, com especialistas locais em cada escritório, dedicados a atender às necessidades de um público diversificado. Nosso compromisso é constante na busca de inovações para tornar o mundo dos investimentos acessível a um número ainda maior de pessoas."
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
