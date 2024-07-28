import { api, axios } from "boot/axios";
import { useUserStore } from "src/stores/user";
import { Cookies } from "quasar";
import { useRouter } from "vue-router";
import useNotify from "../useNotify";
import { ref } from "vue";
import { route } from "quasar/wrappers";
import useCookies from "../useCookies";
import useStates from "../useStates";

export default function useAuth() {
  const useStore = useUserStore();
  const { redirectRouteForUser } = useStates()
  const {
    setTokenCookie,
    deleteTokenCookie,
    setUserCookie,
    tokenName, hasTokenCookie, tokenCookie,
    getuserCookie, hasUserCookie

  } = useCookies()

  const router = useRouter();
  const { errorNotify, infoNotify, alternativeNotify } = useNotify();
  const loading = ref(false);
  const errors = ref({
    person: "",
    password: "",
  });
  const role = ref(null)
  const interceptorsRequest = async () => {
    const success = res => res
    const error = err => {

      if (401 === err.response.status) {
        console.log('estou com erro 401, tem que inválida esse token');
        deleteTokenCookie()
        alternativeNotify('Sessão expirou , refaça login para prosseguir', 3000)
        router.replace({ path: "/login" });
      } else {
        console.log('Não tenho status 401')
        return Promise.reject(err)
      }
    }
    api.interceptors.response.use(success, error);
  }
  const auth = async (value) => {
    loading.value = true;
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    const urlCors = process.env.API_URL_CORS

    axios.get(urlCors).then(response => {
      api
        .post("login", value)
        .then((resp) => {
          if (resp.data.token) {
            setTokenCookie(resp.data)
            useStore.setAbilities(resp.data.abilities)
            router.replace({ path: "/system/" });
          }
        })
        .catch((e) => {
          errorNotify(e.response.data.message);
          errors.value = e.response.data.errors;
        })
        .finally(() => (loading.value = false));
    }).catch((e) => {
      errorNotify('Error ao authentificar csrf ');
      console.log(e)
    }).finally(() => loading.value = false);
  };
  const verifyLogged = async () => {
    await interceptorsRequest();

    loading.value = true
    // console.log('Estou na verificação de cookie', hasUserCookie)
    const useTokenData = Cookies.get(tokenName);
    api.defaults.headers.common['Authorization'] = `Bearer ${useTokenData}`
    if (hasUserCookie) {
      // console.log('has usercookie'),
      setUserCookie(getuserCookie)
      return;
    }

    try {
      const resp = await api.get("auth/validate", useTokenData)
      const data = resp.data.data
      setUserCookie(data);
      useStore.setUserData(data);
      await redirectRouteForUser(data.role_id)
    } catch (e) {
      infoNotify("Faça login!");
      deleteTokenCookie()
    } finally {
      loading.value = false
    }
  };
  const setLogout = async () => {
    loading.value = true
    const useTokenData = Cookies.get(tokenName);

    api.defaults.headers.common['Authorization'] = `Bearer ${useTokenData}`
    await api.post("auth/logout", useTokenData).then((resp) => {
      deleteTokenCookie()
      infoNotify(resp.data.message)
    })
      .catch(e => console.log(e))
      .finally(() => {
        loading.value = true
        router.replace({ path: "/login" })
      });
  };
  return {
    auth,
    verifyLogged,
    setLogout,
    errors,
    loading,
    role,
  };
}
