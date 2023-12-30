<template>
  <div class="EditcalendarPage">
    <div class="row justify-center text-center">
      <div class="col-12">
        <titleinter-medium text="Data de distribuição de lucros" />
      </div>




    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";

export default defineComponent({
  name: "EditcalendarPage",
  components: { TitleinterMedium },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
