import useNotify from '../../useNotify'
import useCookies from '../../useCookies'
import { api, axios } from "boot/axios";
import { ref } from "vue";
import { useReportStore } from "src/stores/report";
import { date } from 'quasar'
export default function useReport() {
  const { errorNotify, successNotify } = useNotify()
  const { tokenCookie } = useCookies()
  const storeReport = useReportStore()
  const loading = ref(false)
  const step = ref('Inicializando envio ....')
  const requestStatus = {
    1: 'Iniciando envio...',
    2: 'Enviando documento....',
    3: 'Enviando audio....',
    4: 'analisando os dados....'
  }
  const optionType = ["crypto", "classic"];
  const getAllreport = async () => {
    loading.value = true
    try {
      const reports = await api.get('reports');
      storeReport.setdata(reports.data.reports)
      console.log('report -> ', reports)
    } catch (e) {
      errorNotify('Erro ao pegar os ralatorios');
    } finally {
      loading.value = false
    }
  }
  const setDocument = async (id, file) => {
    console.log('SET DOCUMENTO')
    step.value = 'Enviando documentos ....'
    loading.value = true
    let formData = new FormData();
    formData.append('document', file, file.name);
    formData.append('report_id', id);
    console.log(formData)
    api.defaults.headers.common['Accept'] = 'form-data';
    api.defaults.headers.common['Accept'] = 'application/json';
    try {
      const res = await api.post('reports/document', formData);
      // const res = await api.post(`reports/document/${id}`, formData);

      console.log(res)
    } catch (e) {
      console.log(e)
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }
  }
  const setReport = async (data) => {
    loading.value = true
    data.display_date_at = date.formatDate(data.display_date_at, 'DD-MM-YYYY')
    let formData = new FormData();
    formData.append('document', data.document, data.document.name);
    if (data.audio)
      formData.append('audio', data.audio, data.audio.name);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('type', data.type);
    formData.append('display_date_at', data.display_date_at);
    api.defaults.headers.common['Accept'] = 'form-data';
    api.defaults.headers.common['Accept'] = 'application/json';

    try {
      const response = await api.post('reports/create', formData);
      loading.value = false
      successNotify('Relatorio criado com sucesso!');
      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch (e) {
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }
  }
  const getOne = async (id) => {

    loading.value = true
    try {
      const response = await api.get(`reports/${id}`)
      storeReport.setEditaData(response.data.report)
    } catch (e) {
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }
  }
  const deleteReport = async (id) => {
    console.log('oque chegou -> ', id)
    loading.value = true
    try {
      await api.delete(`reports/${id}`)
      window.location.reload()
    } catch (e) {
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    requestStatus,
    step,
    optionType,
    setDocument,
    getOne,
    getAllreport,
    setReport,
    deleteReport
  }
}
