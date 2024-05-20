import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'
import { date } from 'quasar'

export default function useAdm() {

  const usersAdm = ref([])
  const loading = ref()
  const { errorNotify, successNotify } = useNotify()

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
  const createAdm = async (value) => {
    value.birthday = date.formatDate(value.birthday, 'DD-MM-YYYY')
    loading.value = true
    console.log(value);
    try {
      const response = await api.post('users/create', { ...value });

      successNotify('Usuário criado com sucesso!');
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (e) {
      console.log(e)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }
  }
  return {
    getAllAdm,
    createAdm,
    usersAdm,
    loading
  }
}
