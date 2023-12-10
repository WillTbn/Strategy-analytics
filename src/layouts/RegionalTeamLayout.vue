<template>
  <detail-user
    v-for="item in primaryUsers"
    :key="item"
    class="q-px-xl"
    :title="item.name"
    :description="item.history"
    :image="item.avatar"
    :office="item.office"
  />
  <detail-user-secondary
    v-for="item in secondaryUsers"
    :key="item"
    class="col-md-6 col-sm-12"
    :title="item.name"
    :description="item.history"
    :image="item.avatar"
    :office="item.office"
  />
</template>
<script>
import { defineComponent } from "vue";
import DetailUser from "../components/DetailUser.vue";
import DetailUserSecondary from "../components/DetailUserSecondary.vue";

export default defineComponent({
  name: "RegionalTeamLayout",
  components: { DetailUser, DetailUserSecondary },
  setup() {
    const primaryUsers = [
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
    ];
    const secondaryUsers = [
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
        office: "Presidente Strategy Analytics",
        avatar: "img/seninha.png",
        history:
          "Fundador, presidente e CEO da Strategy Analytics, Inc. Juntamente com sete sócios, ele estabeleceu a Strategy Analytics em 1988 e, sob sua liderança, a empresa evoluiu para uma líder global em soluções de investimento e tecnologia, destinadas a auxiliar investidores na construção de um futuro financeiro mais promissor.",
      },
      {
        name: "Seninha",
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
