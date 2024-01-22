import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";
import useNotify from "./useNotify";

export default function useLogin() {
  const router = useRouter();
  const useStore = useUserStore();
  const notification = useNotify();
  const keyLocal = "SA_user";
  const users = [
    {
      cpf: "152.111.222-77",
      name: "Jorge Nunes",
      email: "jlbnunes@gmail.com",
      state: "Rio de Janeiro",
      country: "Brasil",
      investidor: "investor Obsidian",
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
    },
    {
      cpf: "111.111.111-11",
      name: "Maria Fasques Monteiro",
      email: "mariafasquesmonteiro@gmail.com",
      state: "California",
      country: "USA",
      investidor: "investor Obsidian",
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
    },
    {
      cpf: "222.222.222-22",
      name: "João Velasques Todesgo",
      email: "joaov.todesgo@gmail.com",
      state: "Victoria",
      country: "Australia",
      investidor: "investor Obsidian",
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
    },
    {
      cpf: "0",
      name: "Charles Leclerc",
      email: "leclercchales@gmail.com",
      state: "São pauulo",
      country: "Brasil",
      investidor: "investor Obsidian",
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
    },
  ];

  const getDataUser = (value) => {
    let user = users.find((x) => x.cpf == value);
    return user ?? "";
    // notification.errorNotify("Usuário o senha inválido!")
  };

  const getLoggedIn = async () => {
    const json = localStorage.getItem(keyLocal);
    const userData = JSON.parse(json);

    if (!userData) {
      router.push({ name: "login" });
      return;
    }
    useStore.setUserData(getDataUser(userData.cpf));
  };
  /**
   *
   * @param {string} value //cpf
   */
  const setUserLoggedin = async (value) => {
    if (getDataUser(value)) {
      localStorage.setItem(keyLocal, JSON.stringify(getDataUser(value)));
      router.push("/system/");
    } else {
      notification.errorNotify("Usuário ou senha inválido!");
    }
  };

  const setLogout = async () => {
    localStorage.removeItem(keyLocal);
    router.go();
  };

  return {
    setUserLoggedin,
    getLoggedIn,
    getDataUser,
    setLogout,
  };
}
