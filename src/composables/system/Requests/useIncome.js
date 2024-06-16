// import useNotify from '../../useNotify'
import { api } from "boot/axios";
import { computed, ref } from "vue";
import { useInvestmentStore } from 'src/stores/investments'
// import { storeToRefs } from 'pinia';
// import useStates from 'src/composables/useStates';
export default function userIncome() {
  const investmentStore = useInvestmentStore()
  // const { editData, isDirtyRole } = storeToRefs(investmentStore);
  // const { showLoading, hideLoading } = useStates()
  const loading = ref(false)
  const getAllIncome = async () => {
    loading.value = true
    try {
      const response = await api.get('investment');

      investmentStore.setdata(response.data.investment)
      console.log(response.data.investment)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao pegar as permissões');
    } finally {
      loading.value = false
    }
  }

  return {
    getAllIncome
  }
}
