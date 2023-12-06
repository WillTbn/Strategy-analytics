<template>
  <div class="row text-left q-py-xl">
    <div class="col-6 q-ma-xl">
      <p class="text-h4 text-weight-bolder">Strategy Analytics</p>
      <span>
        Nosso objetivo é claro e direto: ajudar um número cada vez maior de
        pessoas a alcançar o bem-estar financeiro, conduzindo-as rumo à
        estabilidade e prosperidade.
      </span>

      <p class="text-h6 text-weight-bolder q-pt-xl">Quem somos</p>
    </div>
  </div>
  <q-tabs
    v-model="tab"
    dense
    no-caps
    class="text-white q-px-xl q-mx-lg"
    active-color="text-white"
    active-bg-color="dark"
    align="left"
    indicator-color="transparent"
  >
    <q-tab name="teamlocal" label="Nossa equipe local" />
    <q-tab name="teamregional" label="Nossa equipe regional" />
  </q-tabs>
  <q-tab-panels
    v-model="tab"
    animated
    class="transparant-bg"
    transition-prev="jump-up"
    transition-next="jump-down"
  >
    <q-tab-panel name="teamlocal" class="detailsContent row">
      <local-team-layout></local-team-layout>
    </q-tab-panel>
    <q-tab-panel name="teamregional" class="detailsContent row">
      <regional-team-layout></regional-team-layout>
    </q-tab-panel>
    <!-- <q-tab-panel name="0" class="detailsContent" bg-color="dark">
      {{ tabsDetails[0][0].name }}
    </q-tab-panel> -->
    <!-- <q-tab-panel :name="tab" class="detailsContent" bg-color="dark">
      {{ tabsDetails[tab][0].name }}
    </q-tab-panel> -->
  </q-tab-panels>
</template>
<script>
import { defineComponent, ref } from "vue";
// import DetailUser from "../components/DetailUser.vue";
import LocalTeamLayout from "./LocalTeamLayout.vue";
import RegionalTeamLayout from "./RegionalTeamLayout.vue";

export default defineComponent({
  name: "TeamContentLayout",
  components: { LocalTeamLayout, RegionalTeamLayout },
  setup() {
    const teamLocal = [
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
    ];
    const teamRegional = [
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },

      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },

      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history: "Novas oportunidades de investimentos",
      },
    ];
    return {
      tab: ref("teamlocal"),
      teamLocal,
      teamRegional,
    };
  },
});
</script>
<style>
.detailsContent {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#06121c+0,08090e+24,08090e+87,0e080c+99,0f080c+99,130a0f+99,2c1723+100,1e181f+100,1e1b1f+100 */
  background: radial-gradient(
    ellipse at center,
    rgba(6, 18, 28, 1) 0%,
    rgba(8, 9, 14, 1) 24%,
    rgba(8, 9, 14, 1) 87%,
    rgba(14, 8, 12, 1) 99%,
    rgba(15, 8, 12, 1) 99%,
    rgba(19, 10, 15, 1) 99%,
    rgba(44, 23, 35, 1) 100%,
    rgba(30, 24, 31, 1) 100%,
    rgba(30, 27, 31, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>
