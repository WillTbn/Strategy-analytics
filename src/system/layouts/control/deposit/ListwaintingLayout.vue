<template>
  <div class="ListwaintingLayout">
    <q-table
      title="depositos"
      :filter="filter"
      :rows="waintings"
      no-data-label="Não há nenhuma deposito pendente de confirmação."
      no-results-label="Esse não encontramos nenhuma dados com o valor da pesquisa"
      :columns="columnsWainting"
      row-key="transaction_code"
      v-bind="{ ...$tableStyle }"
    ></q-table>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDepositStore } from "src/stores/deposit";
import useDeposit from "src/composables/system/Requests/useDeposit";
import useDepositHelpers from "src/composables/system/Helpers/useDepositHelpers";

export default defineComponent({
  name: "ListwaintingLayout",
  setup() {
    const filter = ref("");
    const { getWaintings } = useDeposit();
    const depositStore = useDepositStore();
    const { waintings } = storeToRefs(depositStore);
    const { columnsWainting } = useDepositHelpers();
    onMounted(async () => {
      await getWaintings();
    });
    return { filter, columnsWainting, waintings };
  },
});
</script>
<style lang=""></style>
