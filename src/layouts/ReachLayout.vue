<template>
  <div class="ReachLayout row justify-center q-my-xl padding-i-mobile">
    <div class="col-md-8 col-sm-12 q-my-xl">
      <q-img :ratio="4 / 3" src="img/map-global.png" fit="scale-down" />
    </div>
    <div class="col-lg-9 col-sm-10 q-my-xl text-control">
      <p class="title-reach padding-i-mobile">
        Alcance global com experiência local
      </p>
      <p class="text-reach padding-i-mobile">
        Estamos comprometidos com a transparência em nossas atividades de gestão
        de investimentos. É importante para nós que os nossos clientes
        compreendam como o trabalho que realizamos em seu nome se alinha com os
        seus interesses económicos.
      </p>
    </div>
    <div class="col-12"></div>
    <div
      class="col-md-3 col-sm-10 q-my-lg"
      v-for="button in reachButton"
      :key="button"
    >
      <button-primary :textLabel="button.text"></button-primary>
    </div>
    <div class="col-lg-9 col-sm-10 q-my-xl q-py-xl">
      <ul>
        <li v-for="item in reachList" :key="item" class="text-list">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";
export default defineComponent({
  name: "ReachLayout",
  components: { ButtonPrimary },
  setup() {
    const reachButton = [
      { text: "Políticas de administração", action: "" },
      { text: "Relatórios de administração", action: "" },
      { text: "Boletins de votação", action: "" },
    ];
    const reachList = [
      { text: "Princípios", action: "" },
      { text: "Diretrizes de votação", action: "" },
      {
        text: "Resumo das políticas de administração de Investimentos",
        action: "",
      },
    ];
    return { reachButton, reachList };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.title-reach {
  height: 47px;
  flex-shrink: 0;
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 50px */
}
.text-reach {
  height: 94px;
  flex-shrink: 0;
  color: #fff;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.945%; /* 23.677px */
}
ul {
  list-style: none;
  padding: 10px 0;
}
.text-list {
  height: 27px;
  flex-shrink: 0;
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  padding: 40px 0;
  line-height: 100%; /* 32px */
}

@media (max-width: 768px) {
  .title-reach {
    font-size: 25px !important;
    width: 377px;
  }
  .text-reach {
    font-size: 18px !important;
  }
  .text-list {
    font-size: 16px !important;
  }
}
</style>
