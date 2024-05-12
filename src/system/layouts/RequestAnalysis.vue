<template>
  <div class="RequestAnalysis" style="height: 100%">
    <div
      class="row justify-center text-center items-center"
      style="height: 70dvh"
    >
      <div class="col-12">
        <span>Solicitação enviada</span><br />
        <div class="q-my-lg">
          <titleinter-medium text="Sua solicitação está em analise." />
          <br />
          <titleinter-medium text="Entraremos em contato em breve." />
          <br />
        </div>
        <span
          >Você será redirecionado para página inicial em alguns
          instantes.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import TitleinterMedium from "../components/TitleinterMedium.vue";
import { useLayoutStore } from "../../stores/layout";

export default defineComponent({
  name: "RequestAnalysis",
  components: { TitleinterMedium },
  setup() {
    const router = useRouter();
    const storeLayout = useLayoutStore();
    onMounted(() => {
      setTimeout(() => {
        storeLayout.updateCalendarsteps("home");
        storeLayout.updateLoansteps("home");
        router.replace({ path: "/system/wallet" });
      }, 2000);
    });
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.RequestAnalysis {
  height: 95dvh;
}
</style>
