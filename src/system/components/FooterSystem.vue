<template>
  <footer class="FooterSystem bg-transparent row">
    <!-- class="fixed-bottom text-caption text-weight-thin text-grey-13" -->
    <div class="col"></div>

    <register-data class="col-10 text-center" :version="mode" />
    <div class="col"></div>
  </footer>
</template>

<script>
import { defineComponent, onBeforeMount } from "vue";
import RegisterData from "./RegisterData.vue";

export default defineComponent({
  name: "FooterSystem",
  components: {
    RegisterData,
  },
  setup() {
    const mode = process.env.VERSION_APP;
    onBeforeMount(() => {
      console.log("Essa é a versão ->", process.env.VERSION_APP);
    });
    return { mode };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
