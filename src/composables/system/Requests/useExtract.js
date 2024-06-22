import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { useUserStore } from 'src/stores/user';
import { ref } from 'vue'

export default function useExtract() {
  const { errorNotify } = useNotify()
  const userStore = useUserStore()
  const loading = ref(false)
  const dataLoader = ref(false);
  const getDataChart = async () => {
    loading.value = true
    await api.get('extract/chartWallet')
      .then((response) => {
        userStore.setWalletChart(response.data.extract_chart)
        console.info('Aqui-->>', response.data.extract_chart)
        dataLoader.value = true
      })
      .catch((e) => {
        console.log(e);
        errorNotify('Erro ao pegar os dados para o chart');
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    getDataChart,
    loading,
    dataLoader
  }
}
