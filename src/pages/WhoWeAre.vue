<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main bg-who" :reverse="false">
      <div class="col-md-5 col-sm-8 q-ml-lg-lg text-left">
        <title-subtitle
          textTopPersonal="Quem somos"
          textClass="text-primary"
          textTitle="Strategy Analytics"
          textDescription="Com seis anos de experiência no mercado financeiro internacional, a Strategy Analytics se destaca como uma empresa de gestão de investimentos comprometida com um objetivo claro: promover o bem-estar financeiro de um número crescente de pessoas. Com uma equipe dedicada e uma abordagem baseada em um profundo entendimento dos mercados econômicos globais, oferecemos soluções exclusivas e personalizadas, ajustadas às necessidades e objetivos de cada perfil de investidor."
        />
      </div>
    </header-layout>
    <whoweare-layout />
    <contribution-layout />
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
import TitleSubtitle from "../components/TitleSubtitle.vue";
import WhoweareLayout from "../layouts/WhoweareLayout.vue";
import ContributionLayout from "../layouts/ContributionLayout.vue";
import NewsLetter from "../layouts/NewsLetter.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    TitleSubtitle,
    WhoweareLayout,
    ContributionLayout,
    NewsLetter,
  },
  setup() {},
});
</script>
<style></style>
