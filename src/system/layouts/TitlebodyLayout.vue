<template>
  <div class="TitlebodyLayout row justify-center items-center q-py-lg">
    <div class="col-8 q-mx-lg">
      <a href="javascript:history.back()">
        <q-icon name="fa-solid fa-arrow-left" color="primary" />
      </a>
    </div>
    <div class="col-12 text-center q-my-xs-md q-my-md-none">
      <titleinter-medium :text="textTitle" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
export default defineComponent({
  name: "TitlebodyLayout",
  components: { TitleinterMedium },
  props: {
    textTitle: { type: String },
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
