<template>
  <div class="WalletLayout">
    <div class="row justify-center q-mt-sm">
      <div class="col-12 text-center">
        <p class="f-inter title-wallet">Carteira Strategy Analytics</p>
      </div>
      <div class="col-12">
        <chart-wallet v-show="dataLoader" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import ChartWallet from "../components/ChartWallet.vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import useExtract from "src/composables/system/Requests/useExtract";
// import TextinterNormal from "../components/TextinterNormal.vue";

export default defineComponent({
  name: "WalletLayout",
  components: { ChartWallet },
  setup() {
    const strat = ref(false);
    const { getDataChart, dataLoader } = useExtract();
    const useStore = useUserStore();
    const { walletChart } = storeToRefs(useStore);
    onMounted(async () => {
      await getDataChart();
    });
    return { strat, walletChart, dataLoader };
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
