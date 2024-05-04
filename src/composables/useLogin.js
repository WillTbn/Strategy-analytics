import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";
import useNotify from "./useNotify";
import { storeToRefs } from "pinia";

export default function useLogin() {
  const router = useRouter();
  const useStore = useUserStore();
  const { isClient } = storeToRefs(useStore);
  const notification = useNotify();
  //tem que colocar isso no .env
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
      role_id: 1,
      abilities: ["all-access", "view-users", "view-clients"],
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
      role_id: 1,
      abilities: ["all-access", "view-users", "view-clients"],
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
      investment: {
        initial: 50000,
        current: null,
      },
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
      role_id: 2,
      abilities: ["view-clients"],
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
      investment: {
        initial: 50000,
        current: null,
      },
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
      role_id: 3,
      abilities: [],
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
      investment: {
        initial: 50000,
        current: null,
      },
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
      cpf: "037.855.176-02",
      password: "Simone1%",
      name: "Simone Dos Santos Cateringer",
      email: "Simalhas5@gmail.com",
      state: "Minas Gerais",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(35) 9725-1727",
      avatar: "https://strategyanalytics.com.br/system/profiles/simone.jpg",
      abilities: ["client"],
      role_id: 3,
      account: [],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      investment: {
        initial: 0,
        current: null,
      },
      loan: {},
    },
  ];

  const expireLogin = (user) => {
    return user.expiration_date < Date.now();
  };
  const setExpiration = () => {
    const nowDate = new Date();
    return nowDate.setHours(nowDate.getHours() + 12);
  };
  const logOut = () => {
    const expiration = JSON.parse(json).expiration_date;
    !expiration ? setLogout() : "";
  };

  const getDataUser = (value, expiration_date = null) => {
    let user = users.find((x) => x.cpf == value);
    if (expiration_date) {
      user.expiration_date = expiration_date;
    }
    // logOut();
    return user ?? "";
    // notification.errorNotify("Usuário o senha inválido!")
  };

  const verifyPassword = (data, password) => {
    return data.password === password ?? false;
  };
  const routeRetorn = () => {
    return isClient
      ? router.push({ path: "/system/dashboard" })
      : router.push({ path: "/system/clients" });
  };
  const verifyLogged = async () => {
    const userData = JSON.parse(json);
    if (userData) {
      expireLogin(userData)
        ? setLogout()
        : router.replace({ path: "/system/dashboard" });
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
    // useStore.setLoan(getDataUser(userData.cpf).loan);
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
      localStorage.setItem(
        keyLocal,
        JSON.stringify(getDataUser(value.person, setExpiration()))
      );
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
  const getAll = async () => {
    return users;
  };
  return {
    setUserLoggedin,
    getLoggedIn,
    getDataUser,
    setLogout,
    verifyLogged,
    UploadAvatar,
    getAll,
  };
}
