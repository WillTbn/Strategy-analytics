import { api, axios } from 'src/boot/axios';
import { ref } from 'vue'
import useNotify from 'src/composables/useNotify'
export default function useRegister() {
  const loading = ref(false)
  const statusPerson = ref(false)
  const registrationStatus = ref(false)
  const { infoNotify, errorNotify, successNotify } = useNotify()
  const validateCPF = async (person) => {
    try {
      loading.value = true
      const res = await api.post('validator-cpf', { value: person, type: "cpf" })
      console.log('resposta -> ', res.data)
      if (!res.data.valid) {
        infoNotify('CPF não é valido!')
      }
      statusPerson.value = res.data.valid
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao consumir API cpf.')

    } finally {
      loading.value = false
    }
  }
  const viaCEP = async (cep) => {
    try {
      loading.value = true
      const res = await api.post(`validator-cep`, { cep: cep })
      return res.data

    } catch (e) {
      console.log(e)
      errorNotify('Erro ao consumir via cep API.')

    } finally {
      loading.value = false
    }
  }
  const registration = async (data) => {
    try {
      loading.value = true
      const res = await api.post('register', { ...data })
      console.log('resposta -> ', res.data)
      successNotify(res.data.message, 40000)
      registrationStatus.value = true
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao tentar registar.')

    } finally {
      loading.value = false
    }
  }
  return {
    validateCPF,
    viaCEP,
    registration,
    registrationStatus,
    statusPerson, loading,
  }
}
