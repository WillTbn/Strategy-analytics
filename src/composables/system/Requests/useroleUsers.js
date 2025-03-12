import useNotify from '../../useNotify'
import useCookies from '../../useCookies'
import { api, axios } from "boot/axios";
import { computed, ref } from "vue";
import { useRoleStore } from "src/stores/role";
import { date } from 'quasar'
import useStates from 'src/composables/useStates';
import { storeToRefs } from 'pinia';
import useCase from '../useCase';
export default function useroleUsers() {
  const { errorNotify, successNotify, multError } = useNotify()
  const { tokenCookie } = useCookies()
  const roleStore = useRoleStore()
  const { showLoading, hideLoading } = useStates()
  const loading = ref(false)
  const { editData, isDirtyRole } = storeToRefs(roleStore)
  const { same, sameDate } = useCase()
  const getAll = async () => {
    loading.value = true
    try {
      const response = await api.get('roles');

      roleStore.setdata(response.data.role)
      // storeReport.setdata(reports.data.reports)
      console.log('roles -> ', response.data)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao pegar as permissões');
    } finally {
      loading.value = false
    }
  }
  const setRoleUser = async (user_id, role_id) => {

    const data = {
      'user_id': user_id,
      'role_id': role_id
    }

    loading.value = true
    try {
      const response = await api.put('users/role', { ...data });

      // roleStore.setdata(response.data.role)
      // storeReport.setdata(reports.data.reports)
      successNotify(response.data.message, 3000)
      showLoading('Atualizando dados da sua tela..')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      console.log('roles -> ', response.data)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao atualizar as permissões');
    } finally {
      loading.value = false
    }
  }
  return {
    getAll,
    setRoleUser,
    loading,
  }
}
