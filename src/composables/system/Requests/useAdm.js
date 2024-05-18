export default function useAdm() {
  const getAllAdm = async () => {
    loading.value = true
    try {
      const reponse = await api.get('users');
      // storeReport.setdata(reponse.data.reports)
      // console.log('report -> ', reponse)
    } catch (e) {
      errorNotify('Erro ao pegar os usuarios');
    } finally {
      loading.value = false
    }
  }
  return {
    getAllAdm
  }
}
