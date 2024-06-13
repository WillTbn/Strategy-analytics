import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'
import { date } from 'quasar'

export default function useClient() {

  const usersClient = ref([])
  // const extractClient = ref([{
  //   "id": 5,
  //   "user_id": 6,
  //   "transaction_name": "pix",
  //   "transaction_date": "2024-06-11 21:48:36",
  //   "transaction_data": {
  //     "value": 632.1,
  //     "data": {
  //       "transaction_id": "#0011",
  //       "investment": true,
  //       "trans_name": "pix"
  //     }
  //   },
  //   "transaction_value": "632.10",
  //   "created_at": "2024-06-12T00:48:36.000000Z",
  //   "updated_at": "2024-06-12T00:48:36.000000Z"
  // }])
  const extractClient = ref([])
  const loading = ref()
  const { errorNotify, successNotify } = useNotify()

  const getAllClient = async () => {
    loading.value = true
    try {
      const reponse = await api.get('clients')
      usersClient.value = reponse.data.clients
      // storeReport.setdata(reponse.data.reports)
      // console.log('report -> ', reponse)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao pegar os usuarios');
    } finally {
      loading.value = false
    }
  }
  const getExtract = async (user_id) => {
    loading.value = true
    await api.get(`extract/${user_id}`).then((e) => {
      e.data.extract
      extractClient.value = e.data.extract
    }).catch((e) => {
      console.log(e)
      errorNotify('Erro ao pegar o extrato do usuário');
    }).finally(() => {
      loading.value = false
    })
    // try {
    //   const reponse = await api.get(`extract/${user_id}`)
    //   extractClient.value = reponse.data.extract
    //   console.log(extractClient.value)
    // } catch (e) {
    //   console.log(e)
    //   errorNotify('Erro ao pegar o extrato do usuário');
    // } finally {
    //   loading.value = false
    // }
  }
  return {
    getAllClient,
    getExtract,
    usersClient,
    loading,
    extractClient
  }
}
