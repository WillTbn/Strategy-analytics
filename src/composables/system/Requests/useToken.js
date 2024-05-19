import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'

export default function useToken() {
  const loading = ref(false)
  const { errorNotify, successNotify } = useNotify()
  const resendToken = async ($token_id) => {
    loading.value = true
    try {
      const res = await api.put(`tokens/${$token_id}`);
      console.log(res)
      successNotify(res.data.message)
    } catch (e) {
      console.log(e)
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }

  }

  return {
    resendToken,
    loading
  }

}
