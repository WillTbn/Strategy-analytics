import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import useStates from 'src/composables/useStates'
import { useDepositStore } from "src/stores/deposit";
import { ref } from 'vue'

export default function useDeposit() {
  const { errorNotify, alternativeNotify, multError, successNotify } = useNotify()
  const useDeposit = useDepositStore()
  const { receipt, data, waintings } = storeToRefs(useDeposit)
  const loading = ref(false)
  const dataLoader = ref(false);
  const { showLoading, hideLoading } = useStates()
  const getCodePix = async (amount, step) => {
    loading.value = true
    showLoading('Preparando seu qrCode para pagamento');
    const dataDeposit = {
      'amount': amount,
    }
    await api.post('payment/pix', { ...dataDeposit })
      .then((response) => {
        useDeposit.setQrcode(response.data.code_pix)
        useDeposit.setData(response.data.deposit)
        console.info('Aqui-->>', response.data.code_pix)
        dataLoader.value = true
        useDeposit.setStep(step);
      })
      .catch((e) => {
        console.log(e);
        errorNotify('Erro ao pegar os código pix');
      })
      .finally(() => {
        loading.value = false
        hideLoading()
      })

  }
  const verifyInitial = async () => {
    showLoading('Carregando dados...');
    await api.get('payment').then((response) => {
      if (response.data.payment) {
        let dataPayment = response.data.payment;
        useDeposit.setQrcode(dataPayment.qrcode)
        useDeposit.setData(dataPayment)
        console.info('Aqui-->>', dataPayment)
        dataLoader.value = true
        if (dataPayment.image || dataPayment.transaction_id) {
          useDeposit.setStep('finally')
          return
        }
        useDeposit.setStep('qrcode');
      }
    })
      .catch((e) => {
        console.log(e);
        errorNotify('Erro de request');
      })
      .finally(() => {
        loading.value = false
        hideLoading()
      })
  }
  const sendUploadReceipt = async () => {
    showLoading('Analisando as informações.. ');
    let formatData = new FormData()
    if (receipt.value.upload) {
      formatData.append('file', receipt.value.upload, receipt.value.upload.name);
    }
    formatData.append('transaction_id', receipt.value.transaction);
    formatData.append('id', data.value.id);

    api.defaults.headers.common['Accept'] = 'form-data';
    api.defaults.headers.common['Accept'] = 'application/json';
    await api.post('payment/receipt', formatData).then((response) => {
      console.log(response.data)
      successNotify(response.data.message, 3000)
      useDeposit.setStep('finally')
      useDeposit.setSendReceipt(false)
    }).catch((e) => {
      console.log(e)
      multError(e.response.data.errors, 1)
    }).finally(() => {
      loading.value = false
      hideLoading()
    })
  }
  const deleteDeposit = async (id) => {
    console.log('iddd -> ', id);
    let initialData = {
      value: 50,
    }
    showLoading('Realizando o delete....');
    await api.delete(`payment/${id}`).then((response) => {
      useDeposit.setData({ ...initialData })
      useDeposit.setStep('first');
      alternativeNotify(response.data.message, 4000)
    })
      .catch((e) => {
        console.log(e);
        errorNotify('Erro de request');
      })
      .finally(() => {
        loading.value = false
        hideLoading()
      })
  }

  //ADM's
  const getWaintings = async () => {
    loading.value = true
    showLoading('Pegando os dados ....');
    await api.get('payment/wainting')
      .then((response) => {
        useDeposit.setWainting(response.data.deposits)
      })
      .catch((e) => {
        console.log(e);
        errorNotify('Erro ao pegar os Depositos waintings');
      })
      .finally(() => {
        loading.value = false
        hideLoading()
      })
  }

  return {
    getCodePix, verifyInitial, deleteDeposit,
    sendUploadReceipt, getWaintings,
    loading,
    dataLoader
  }
}
