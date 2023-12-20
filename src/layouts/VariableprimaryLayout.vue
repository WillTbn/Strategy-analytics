<template>
  <div
    class="VariableprimaryLayout q-ma-lg q-pa-lg row margin-i-desktop control-mb"
  >
    <div class="col-md-1 col-sm-4 q-my-lg">
      <span>{{ title }}</span> <br />
      <q-avatar
        square
        size="100px"
        color="primary"
        font-size="22px"
        text-color="white"
      >
        {{ sigla }}
      </q-avatar>
    </div>
    <div class="col-lg-4 col-sm-12 self-center margin-text">
      <span class="font-control"> {{ primaryTitle }} </span><br />
      <span class="font-control">
        {{ secondTitle }}
      </span>
    </div>
    <div class="flex-break col-12"></div>
    <div class="col-md-3 col-sm-12 q-my-lg">
      <p class="">Preço unitário</p>
      <p class="text-method">BRL {{ price }}</p>
    </div>
    <div class="col-md-3 col-sm-12 q-my-lg">
      <p class="">Variação da previdência</p>
      <p class="text-method">
        <q-icon name="fa-solid fa-chevron-up" color="green" /> {{ current }}
      </p>
    </div>
    <div class="col-md-3 col-sm-12 q-my-lg">
      <p class="">Rendimento total do Fundo</p>
      <p class="text-method">
        Anualizado:
        <q-icon name="fa-solid fa-chevron-up" color="green" /> {{ distri }}
      </p>
    </div>
    <div class="flex-break col-12"></div>
    <div class="col-9 q-my-lg">
      <p class="">De acordo com o prospecto atual</p>
      <p class="text-method">Taxa de adm. {{ taxa }}</p>
    </div>
  </div>
</template>

<script>
// import TitleSecondary from "../components/TitleSecondary.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VariableprimaryLayout",

  props: {
    title: { type: String },
    primaryTitle: { type: String },
    secondTitle: { type: String },
    sigla: { type: String },
    price: { type: String },
    current: { type: String },
    distri: { type: String },
    taxa: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.font-control {
  color: #fff;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
}
@media (min-width: 768px) {
  .margin-i-desktop {
    margin-inline: 3rem;
  }
  .margin-text {
    margin-top: 24px;
    margin-left: 24px;
  }
  .font-control {
    font-size: 40px;
  }
}
</style>
