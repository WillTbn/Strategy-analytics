import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'

export default function useBank() {
  const loading = ref(false)
  const buttonSubmit = ref(false)
  const { multError, successNotify } = useNotify()
  const updateOrCreate = async (data) => {
    loading.value = true
    const method = data.id ? 'put' : 'post'

    // console.log(method)
    try {
      const res = await api[method](`bank`, { ...data });
      console.log(res)
      successNotify(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (e) {
      multError(e.response.data.errors)
    } finally {
      // buttonSubmit.value = false
      loading.value = false
    }
  }
  const deleted = async (id) => {
    loading.value = true
    try {
      const res = await api.delete(`bank/${id}`,);
      console.log(res)
      successNotify(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (e) {
      multError(e.response.data.errors)

    } finally {
      // buttonSubmit.value = false
      loading.value = false
    }
  }

  return {
    updateOrCreate,
    deleted,
    loading
  }

}
