import { api, axios } from "boot/axios";
import { useUserStore } from "src/stores/user";
import { Cookies } from "quasar";
import { useRouter } from "vue-router";
import useNotify from "../useNotify";
import { ref } from "vue";
import { route } from "quasar/wrappers";
import useCookies from "../useCookies";

export default function useAuth() {
  const useStore = useUserStore();
  const {
    setTokenCookie,
    deleteTokenCookie,
    setUserCookie,
    tokenName, hasTokenCookie, tokenCookie,
    getuserCookie, hasUserCookie

  } = useCookies()

  const router = useRouter();
  const { errorNotify, infoNotify } = useNotify();
  const loading = ref(false);
  const errors = ref({
    person: "",
    password: "",
  });
  const role = ref(null)

  const auth = async (value) => {
    loading.value = true;
    api
      .post("login", value)
      .then((resp) => {
        if (resp.data.token) {
          console.log(resp);
          setTokenCookie(resp.data.token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`
          useStore.setAbilities(resp.data.abilities);


          router.replace({ path: "/system/" });
        }
      })
      .catch((e) => {
        console.log("aqui -> ", tokenName);
        errorNotify(e.response.data.message);
        errors.value = e.response.data.errors;
      })
      .finally(() => (loading.value = false));
  };
  const verifyLogged = async () => {
    loading.value = true
    if (hasUserCookie) {
      console.log('esta aqui o user cookie -> ', getuserCookie)
      setUserCookie(getuserCookie)
      return;
    }
    const useTokenData = Cookies.get(tokenName);
    api.defaults.headers.common['Authorization'] = `Bearer ${useTokenData}`
    console.log('token -> ', useTokenData)
    try {
      const resp = await api.get("auth/validate", useTokenData)
      const data = resp.data.data
      useStore.setUserData(data);
    } catch (e) {
      console.log('não tem resp -> ', e)
      errorNotify("Faça login!");
      deleteTokenCookie()
      // router.replace({ name: "login" });
    } finally {
      loading.value = false
    }
  };
  const setLogout = async () => {
    const useTokenData = Cookies.get(tokenName);
    // console.log('estou no setLogout ->', tokenName)
    api.defaults.headers.common['Authorization'] = `Bearer ${useTokenData}`
    await api.post("auth/logout", useTokenData).then((resp) => {
      deleteTokenCookie()
      infoNotify(resp.data.message)
    })
      .catch(e => console.log(e))
      .finally(() => router.push({ path: "/login" }));
  };
  const routeRetorn = (role) => {
    const routeName = role == 3
      ? "wallet"
      : "users"

    return routeName
  };

  return {
    auth,
    verifyLogged,
    setLogout,
    routeRetorn,
    errors,
    loading,
    role,
  };
}
