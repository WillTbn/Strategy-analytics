<template>
  <q-page class="text-white control-bg items-center">
    <header-layout class="main" :reverse="false">
      <div class="col-md-5 col-sm-8 q-ml-lg-lg text-left">
        <title-subtitle
          textTopPersonal="Nossa gestão"
          textClass="text-negative"
          textTitle="Administração de investimentos da Strategy Analytics"
          textDescription="A equipe de Gestão de Investimentos da Strategy Analytics é fundamental para o papel da Strategy Analytics como gestora de confiança e de ativos."
        />
      </div>
    </header-layout>
    <managementcontent-layout />
    <news-letter />
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";
import NewsLetter from "../layouts/NewsLetter.vue";
import ManagementcontentLayout from "../layouts/ManagementcontentLayout.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    TitleSubtitle,
    ManagementcontentLayout,
    NewsLetter,
  },
  setup() {},
});
</script>
