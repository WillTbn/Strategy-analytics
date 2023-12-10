<template>
  <div class="MethodologyLayout">
    <div class="row justify-center text-center q-py-xl">
      <div class="col-8">
        <title-secondary
          text="Aplicamos nossa metodologia em todos nossos serviços "
        />
      </div>
    </div>

    <div class="row justify-center">
      <card-method
        v-for="opt in options"
        :key="opt"
        class="col-md-8 col-sm-12 q-my-lg"
        :name="opt.name"
        :title="opt.title"
        :price="opt.price"
        :current="opt.current"
        :distri="opt.distri"
        :className="opt.className"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";
import CardMethod from "../components/CardMethod.vue";

export default defineComponent({
  name: "MethodologyLayout",
  components: { TitleSecondary, CardMethod },
  setup() {
    const options = [
      {
        name: "Renda variável",
        title: "Expansão patrimonial",
        price: "300.000",
        current: "22,84%",
        distri: "1,22%",
        className: "btn-blue",
      },
      {
        name: "Renda fixa",
        title: "Previdência Futura",
        price: "1.000",
        current: "0,99%",
        distri: "1,89%",
        className: "btn-red",
      },
      {
        name: "Renda flexível",
        title: "Liquidez Elevada",
        price: "10.000",
        current: "2,89%%",
        distri: "0,89%",
        className: "btn-white",
      },
    ];
    return { options };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
