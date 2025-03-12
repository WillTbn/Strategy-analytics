import { ref } from 'vue'
import useCase from '../useCase';
export default function useDepositHelpers() {
  const { dateUSFromBr } = useCase()
  const receiptStatus = (value) => {
    if (value != "Não enviado") {
      return dateUSFromBr(value)
    }
    return value
  }
  const columnsWainting = [
    {
      name: "transaction_code",
      align: "left",
      label: "Código da transação",
      field: "transaction_code",
      sortable: true,
    },
    {
      name: "value",
      align: "left",
      label: "Valor",
      field: "value",
      sortable: true,
    },
    {
      name: "created_at",
      align: "left",
      label: "Criado em",
      field: "created_at",
      format: (val) => dateUSFromBr(val),
      sortable: true,
    },
    {
      name: "receipt",
      align: "left",
      label: "Envio recibo",
      field: "receipt",
      // format: (val) => { return val ? val : "Não enviado" },
      format: (val) => receiptStatus(val),
      sortable: true,
    },
    {
      name: "actions",
      label: "Ações",
      align: "center",
      field: "action",
    },
  ];
  const viewDeposit = ref(false)
  const depositEdit = ref()
  const btnActions = [
    {
      color: "green",
      icon: "fa-solid fa-clipboard-list",
      tooltipText: "Avaliar",
      action: "updateDeposit",
    },
  ];
  const actions = {
    updateDeposit: (e) => {
      viewDeposit.value = true
      depositEdit.value = e
      console.log('Estou dentro da actions!!!')
    },
  };
  const handlerAction = (name, row) => {
    actions[name](row);
  };
  return {
    columnsWainting,
    btnActions,
    viewDeposit,
    handlerAction,
    depositEdit
  }
}
