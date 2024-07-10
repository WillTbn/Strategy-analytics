<template>
  <q-card class="BalancecurrentLayout bg-transparent" flat>
    <div class="q-pa-md row justify-between q-pa-xl">
      <q-card-section
        class="col-12 col-md-6 q-pa-xl q-mb-md-lg q-mb-xs-md"
        height="10rem"
      >
        <div class="text-subtitle2">Patrimônio nos EUA</div>
        <span class="text-h2 text-weight-bolder text-grey-7">
          {{ $filters.currentValue(wallet.current_balance) }}
        </span>
        <br />
        <u class="text-subtitle2 text-weight-bolder text-grey-7">
          Entenda seu Patrimônio
        </u>
        <q-inner-loading
          :showing="loading"
          label="Please wait..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
      </q-card-section>
      <q-card-section
        class="col-12 col-md-6 q-pa-xl q-mb-md-lg q-mb-xs-md bg-grey-3 text-grey-7"
        height="10rem"
        style="border-radius: 14px"
      >
        <div class="text-subtitle2">Disponivel para investir</div>
        <span class="text-h2 text-weight-bolder">
          {{ $filters.currentValue(wallet.current_investment) }}
        </span>
        <q-inner-loading
          :showing="loading"
          label="Please wait..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useDataUser from "src/composables/system/Requests/useDataUser";
export default defineComponent({
  name: "BalancecurrentLayout",
  setup() {
    const teste = ref(true);
    const userStore = useUserStore();
    const { wallet } = storeToRefs(userStore);
    const { getWallet, loading } = useDataUser();
    onMounted(async () => {
      await getWallet();
    });
    return { wallet, loading, teste };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
