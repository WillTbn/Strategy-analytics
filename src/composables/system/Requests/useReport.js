import useNotify from '../../useNotify'
import useCookies from '../../useCookies'
import { api, axios } from "boot/axios";
import { computed, ref } from "vue";
import { useReportStore } from "src/stores/report";
import { date } from 'quasar'
import useStates from 'src/composables/useStates';
import { storeToRefs } from 'pinia';
import useCase from '../useCase';
export default function useReport() {
  const { errorNotify, successNotify, multError } = useNotify()
  const { tokenCookie } = useCookies()
  const storeReport = useReportStore()
  const { showLoading, hideLoading } = useStates()
  const loading = ref(false)
  const { editData, isDirtyReport } = storeToRefs(storeReport)
  const { same, sameDate } = useCase()

  const verifySame = computed(() => {
    if (
      editData.value.id != '' &&
      same(isDirtyReport.value.title, editData.value.title) &&
      same(isDirtyReport.value.description, editData.value.description) &&
      same(isDirtyReport.value.type, editData.value.type) &&
      sameDate(editData.value.display_date_at, isDirtyReport.value.display_date_at)
    ) {
      return true
    }
    return false
  })

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
    console.log('SET DOCUMENTO', file)
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
      successNotify(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
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
      multError(e.response.data.errors)
    } finally {
      loading.value = false
    }
  }
  const getOne = async (id) => {
    showLoading('Estamos pegando o relátorio')
    loading.value = true
    try {
      const response = await api.get(`reports/${id}`)
      storeReport.setEditaData(response.data.report)
      showLoading(response.data.message)
    } catch (e) {
      console.log(e.response.data.message)
      errorNotify(e.response.data.message);
    } finally {
      loading.value = false
      hideLoading()
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
  const setDataReport = async (value) => {
    showLoading(requestStatus[4])
    console.log('oque chegou -> ', value)
    loading.value = true

    const report = {
      'report_id': value.id,
      'display_date_at': value.display_date_at,
      'description': value.description,
      'title': value.title,
      'type': value.type,
    }

    try {
      showLoading(requestStatus[1])
      const res = await api.put(`reports`, { ...report })
      showLoading(res.data.message)
      successNotify(res.data.message, 30000)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (e) {
      console.log(e.response.data.message)
      multError(e.response.data.errors)
    } finally {
      hideLoading()
      loading.value = false
    }
  }

  const updateAudio = async (report_id, audio) => {
    showLoading(requestStatus[1])
    let formData = new FormData();
    formData.append('audio', audio, audio.name);
    formData.append('report_id', report_id);
    console.log(formData)
    try {
      showLoading(requestStatus[3])
      const res = await api.post('/reports/audio', formData)
      successNotify(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (e) {
      // errorNotify(e.response.data.message);
      multError(e.response.data.errors)
    } finally {
      hideLoading()
    }

  }
  const deleteAudio = async (report_id) => {
    showLoading(requestStatus[1])

    try {
      showLoading(requestStatus[3])
      const res = await api.post('/reports/audio/delete', { ...report_id })
      successNotify(res.data.message)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (e) {
      multError(e.response.data.errors)
    } finally {
      hideLoading()
    }

  }

  return {
    loading,
    requestStatus,
    step,
    optionType,
    verifySame,
    setDocument,
    getOne,
    getAllreport,
    setReport,
    setDataReport,
    deleteReport,
    updateAudio,
    deleteAudio
  }
}
