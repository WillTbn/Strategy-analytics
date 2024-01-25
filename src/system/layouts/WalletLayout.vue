<template>
  <div class="WalletLayout">
    <div class="row justify-center q-mt-sm">
      <div class="col-12 text-center">
        <p class="f-inter title-wallet">Carteira Strategy Analytics</p>
      </div>
      <div class="col-12">
        <chart-wallet />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ChartWallet from "../components/ChartWallet.vue";
// import TextinterNormal from "../components/TextinterNormal.vue";

export default defineComponent({
  name: "WalletLayout",
  components: { ChartWallet },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.title-wallet {
  /* font-size: 25px; */
  font-size: large;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 80% */
}
</style>
