import { api } from 'src/boot/axios';
import useNotify from 'src/composables/useNotify'
import { ref } from 'vue'
import { date } from 'quasar'

export default function useClient() {
  const columnsClient = [
    {
      name: "id",
      required: true,
      label: "ID",
      align: "left",
      field: (row) => row.id,
      format: (val) => `#${val}`,
      sortable: true,
      required: true
    },
    {
      name: "name",
      align: "left",
      label: "Nome",
      field: "name",
      sortable: true,
    },
    {
      name: "email",
      align: "left",
      label: "Email",
      field: "email",
      sortable: true,
    },
    {
      name: "balance",
      align: "left",
      label: "Saldo",
      field: "balance",
      sortable: true,
    },
    {
      name: "loan",
      align: "left",
      label: "Saldo devedor",
      field: "loan",
      sortable: true,
    },
    {
      name: "investment",
      align: "left",
      label: "Saldo investido",
      field: "investment",
      sortable: true,
    },
    {
      name: "birthday",
      align: "left",
      label: "Data nascimento",
      field: "birthday",
      sortable: true,
    },
    // {
    //   name: "audio",
    //   label: "Audio",
    //   field: (row) => row.audio,
    //   format: (val) => {
    //     return val == null ? "X" : val;
    //   },
    // },
    {
      name: "actions",
      label: "Ações",
      align: "center",
      field: "action",
    },
  ];
  const usersClient = ref([])
  const loading = ref()
  const { errorNotify, successNotify } = useNotify()

  const getAllClient = async () => {
    loading.value = true
    try {
      const reponse = await api.get('clients')
      usersClient.value = reponse.data.clients
      // storeReport.setdata(reponse.data.reports)
      // console.log('report -> ', reponse)
    } catch (e) {
      console.log(e)
      errorNotify('Erro ao pegar os usuarios');
    } finally {
      loading.value = false
    }
  }
  return {
    getAllClient,
    columnsClient,
    usersClient,
    loading
  }
}
