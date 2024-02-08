import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";
import useNotify from "./useNotify";

export default function useLogin() {
  const router = useRouter();
  const useStore = useUserStore();
  const notification = useNotify();
  const keyLocal = "SA_user";
  const json = localStorage.getItem(keyLocal);
  const users = [
    {
      cpf: "448.811.378-83",
      password: "Strategy",
      name: "Éric Siqueira Vicente",
      email: "fantoma2010.siqueira@gmail.com",
      state: "São Paulo",
      country: "Brasil",
      investor: "Investor Strategy",
      phone: "(12) 981578736",
      avatar:
        "https://strategyconect.com/wp-content/uploads/2023/12/circular_image_3_minimal_zoom.png",
      account: [
        {
          id: 2,
          bank: " 336 - Banco C6 S.A.",
          agency: "0001",
          number: "20043688-0",
          nickname: "C6 bank",
        },
      ],
      profit_date: { label: "5º dia útil do mês", value: "five", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "430.034,83" },
          { name: "Valor contratado", value: "395.535,43" },
          { name: "Parcela", value: "9 de 48" },
          { name: "Valor da parcela", value: "3.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "12/03/2024" },
          { name: "Taxa de juros ao mês:", value: "1,98%" },
        ],
      },
    },
    {
      cpf: "152.111.222-77",
      password: "Strategy",
      name: "Jorge Nunes",
      email: "jlbnunes@gmail.com",
      state: "Rio de Janeiro",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(12) 98342-5387",
      avatar: "https://jorgenunes.vercel.app/assets/img/Jorge_Nunes-dev.jpeg",
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "130.034,83" },
          { name: "Valor contratado", value: "595.535,43" },
          { name: "Parcela", value: "47 de 48" },
          { name: "Valor da parcela", value: "10.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "06/03/2024" },
          { name: "Taxa de juros ao mês:", value: "0,98%" },
        ],
      },
    },
    {
      cpf: "111.111.111-11",
      password: "Strategy",
      name: "Maria Fasques Monteiro",
      email: "mariafasquesmonteiro@gmail.com",
      state: "California",
      country: "USA",
      investor: "investor Obsidian",
      phone: "(51) 322-5387",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "1.034,83" },
          { name: "Valor contratado", value: "25.535,43" },
          { name: "Parcela", value: "30 de 48" },
          { name: "Valor da parcela", value: "1.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "22/03/2024" },
          { name: "Taxa de juros ao mês:", value: "2,98%" },
        ],
      },
    },
    {
      cpf: "222.222.222-22",
      password: "Strategy",
      name: "João Velasques Todesgo",
      email: "joaov.todesgosdadsadasdasdsadasdsad@gmail.com",
      state: "Victoria",
      country: "Australia",
      investor: "investor Obsidian",
      phone: "(48) 32321-5387",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "34,83" },
          { name: "Valor contratado", value: "55.555,43" },
          { name: "Parcela", value: "48 de 48" },
          { name: "Valor da parcela", value: "1.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "22/03/2024" },
          { name: "Taxa de juros ao mês:", value: "0,98%" },
        ],
      },
    },
    {
      cpf: "0",
      password: "Strategy",
      name: "Charles Leclerc",
      email: "leclercchales@gmail.com",
      state: "São pauulo",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(12) 98897-6543",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
      account: [
        {
          id: 1,
          bank: "C6 BANK",
          agency: "0507",
          number: "142085-2",
          nickname: "bb",
        },
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "430.034,83" },
          { name: "Valor contratado", value: "395.535,43" },
          { name: "Parcela", value: "9 de 48" },
          { name: "Valor da parcela", value: "3.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "12/03/2024" },
          { name: "Taxa de juros ao mês:", value: "1,98%" },
        ],
      },
    },
    {
      cpf: "26.7406.868-07",
      password: "102030",
      name: "Lúcio Flávio de Souza",
      email: "contatolucio@hotmail.com",
      state: "São pauulo",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(12) 99242-99263",
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
      account: [
        {
          id: 1,
          bank: "Caixa",
          agency: "0314",
          number: "153881-0",
          nickname: "caixa",
        }
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "430.034,83" },
          { name: "Valor contratado", value: "395.535,43" },
          { name: "Parcela", value: "9 de 48" },
          { name: "Valor da parcela", value: "3.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "12/03/2024" },
          { name: "Taxa de juros ao mês:", value: "1,98%" },
        ],
      },
    }
  ];

  const getDataUser = (value) => {
    let user = users.find((x) => x.cpf == value);
    return user ?? "";
    // notification.errorNotify("Usuário o senha inválido!")
  };

  const verifyPassword = (data, password) => {
    return data.password === password ?? false;
  };
  const verifyLogged = async () => {
    const userData = JSON.parse(json);
    if (userData) {
      router.replace({ path: "/system/dashboard" });
    }
  };
  const getLoggedIn = async () => {
    const userData = JSON.parse(json);
    if (!userData) {
      router.replace({ path: "/login" });
      // router.push({ name: "login" });
      return;
    }
    useStore.setUserData(getDataUser(userData.cpf));
  };
  /**
   *
   * @param {string} value //cpf
   */
  const setUserLoggedin = async (value) => {
    if (
      getDataUser(value.person) &&
      verifyPassword(getDataUser(value.person), value.password)
    ) {
      localStorage.setItem(keyLocal, JSON.stringify(getDataUser(value.person)));
      router.push("/system/dashboard");
    } else {
      notification.errorNotify("Usuário ou senha inválido!");
    }
  };

  const setLogout = async () => {
    localStorage.removeItem(keyLocal);

    // router.push({ name: "login" });

    window.location.reload();
    // router.go();
  };
  const UploadAvatar = async (e) => {
    useStore.setAvatarUpload(e);
  };

  return {
    setUserLoggedin,
    getLoggedIn,
    getDataUser,
    setLogout,
    verifyLogged,
    UploadAvatar,
  };
}
