<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main" :reverse="false">
      <div class="col-md-5 col-sm-8 q-ml-lg-lg text-left">
        <title-subtitle
          textTopPersonal="Quem somos"
          textClass="text-negative"
          textTitle="Strategy Analytics"
          textDescription="Com seis anos de atuação exclusivamente no Brasil, nosso compromisso permanece firme – buscamos facilitar o acesso ao bem-estar financeiro para um número crescente de pessoas. Com um enfoque local e uma profunda compreensão do mercado brasileiro e norte americano, estamos dedicados a orientar nossos clientes em suas jornadas financeiras, oferecendo soluções inovadoras e adaptadas às suas necessidades individuais."
        />
      </div>
    </header-layout>
    <whoweare-layout />
    <contribution-layout />
    <news-letter />
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
