import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'

export default function useAccount() {
  const loading = ref(false)
  const buttonSubmit = ref(false)
  const { errorNotify, successNotify } = useNotify()
  const updateData = async (data) => {
    loading.value = true
    try {
      const res = await api.post(`account/data`, { name: data.name, phone: data.account.phone });
      console.log(res)
      successNotify(res.data.message)
    } catch (e) {
      errorNotify(e.response.data.message);
    } finally {
      // buttonSubmit.value = false
      loading.value = false
    }
  }
  const sendAvatar = async ($file) => {
    loading.value = true

    api.defaults.headers.common['Accept'] = 'form-data';
    api.defaults.headers.common['Accept'] = 'application/json';
    try {
      const res = await api.post(`account/avatar`, $file);
      console.log(res)
      successNotify(res.data.message)
    } catch (e) {
      errorNotify(e.response.data.message);
    } finally {
      buttonSubmit.value = false
      loading.value = false
    }

  }

  return {
    updateData,
    sendAvatar,
    loading,
    buttonSubmit
  }

}
