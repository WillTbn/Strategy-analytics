<template>
  <div class="row justify-center locat-team-layout" style="align-items: center">
    <detail-user
      v-for="item in primaryUsers"
      :key="item"
      class="col-md-6 col-sm-12"
      :title="item.name"
      :description="item.history"
      :image="item.avatar"
      :office="item.office"
    />
  </div>
  <div class="row justify-center hidden">
    <detail-user-secondary
      v-for="item in secondaryUsers"
      :key="item"
      class="col-md-6 col-sm-12"
      :title="item.name"
      :description="item.history"
      :image="item.avatar"
      :office="item.office"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DetailUser from "../components/DetailUser.vue";
import DetailUserSecondary from "../components/DetailUserSecondary.vue";

export default defineComponent({
  name: "LocalTeamLayout",
  components: { DetailUser, DetailUserSecondary },
  setup() {
    const primaryUsers = [
      {
        name: "Éric Vicente",
        avatar: "img/localTeam/Erik.png",
        office: "Presidente Strategy Analytics ®",
        history:
          "Fundador, presidente e CEO da Strategy Analytics ®. Estabeleceu a Strategy Analytics em 2018  e, sob sua liderança, a empresa evoluiu para nível global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Marco Aurélio",
        office: "Country Manager",
        avatar: "img/localTeam/MarcoAurelio.jpg",
        history:
          "Marco é Country Manager da Strategy Analytics, responsável pela liderança e direcionamento estratégico dos negócios da Strategy Analytics",
      },
    ];
    const secondaryUsers = [
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Joãozinho",
        office: "Presidente Strategy Analytics",
        avatar: "img/image-4.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
    ];
    return {
      primaryUsers,
      secondaryUsers,
    };
  },
});
</script>
