import { api } from 'src/boot/axios';
import useCookies from 'src/composables/useCookies';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'

export default function useAccount() {
  const loading = ref(false)
  const buttonSubmit = ref(false)
  const { errorNotify, successNotify, multError } = useNotify()
  const { updateCookieAccount, updateNameByAccount } = useCookies()
  const updateData = async (data) => {
    loading.value = true
    try {
      const res = await api.post(`account/data`, { name: data.name, phone: data.account.phone });
      await updateNameByAccount(res.data.user, res.data.account)
      console.log(res)
      successNotify(res.data.message)
    } catch (e) {
      multError(e.response.data.errors)
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
      await updateCookieAccount(res.data.account)
      successNotify(res.data.message)
    } catch (e) {
      multError(e.response.data.errors)
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
