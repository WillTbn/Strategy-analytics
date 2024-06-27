import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import useStates from 'src/composables/useStates'
import { useDepositStore } from "src/stores/deposit";
import { ref } from 'vue'

export default function useDeposit() {
  const { errorNotify, alternativeNotify } = useNotify()
  const useDeposit = useDepositStore()
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
        console.info('Aqui-->>', dataPayment.qrcode)
        dataLoader.value = true
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
  return {
    getCodePix, verifyInitial, deleteDeposit,
    loading,
    dataLoader
  }
}
