<template>
  <div class="VariableprimaryLayout justify-md-around q-ma-lg q-pa-lg row">
    <div class="col-11 q-my-lg">
      <p>{{ title }}</p>
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
    <div class="col-11 q-my-lg">
      <p class="">De acordo com o prospecto atual</p>
      <p class="text-method">Taxa de adm. {{ taxa }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VariableprimaryLayout",
  props: {
    title: { type: String },
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
</style>
