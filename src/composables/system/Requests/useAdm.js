import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'

export default function useAdm() {

  const usersAdm = ref([])
  const loading = ref()
  const { errorNotify } = useNotify()

  const getAllAdm = async () => {
    loading.value = true
    try {
      const reponse = await api.get('users')
      usersAdm.value = reponse.data.users
      // storeReport.setdata(reponse.data.reports)
      // console.log('report -> ', reponse)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao pegar os usuarios');
    } finally {
      loading.value = false
    }
  }
  return {
    getAllAdm,
    usersAdm,
    loading
  }
}
