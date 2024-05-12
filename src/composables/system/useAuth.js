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
    tokenName, hasTokenCookie, tokenCookie,

  } = useCookies()

  const router = useRouter();
  const { errorNotify, infoNotify } = useNotify();
  const loading = ref(false);
  const errors = ref({
    person: "",
    password: "",
  });

  const auth = async (value) => {
    loading.value = true;
    api
      .post("login", value)
      .then((resp) => {
        if (resp.data.token) {
          console.log(resp);
          setTokenCookie(resp.data.token,)
          axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`
          useStore.setAbilities(resp.data.abilities);

          window.location.reload();
          // router.replace({ path: "/system/wallet" });
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
    if (!hasTokenCookie || tokenCookie == "undefined") {
      console.log("não encontrei o token");
      deleteTokenCookie()
      router.push({ name: "login" });
      loading.value = false
      return;
    }
    const useTokenData = Cookies.get(tokenName);
    api.defaults.headers.common['Authorization'] = `Bearer ${useTokenData}`
    const resp = await api.get("auth/validate", useTokenData).then((resp) => {
      const data = resp.data.data
      useStore.setUserData(data);
      routeRetorn(data.role_id);
    }).catch((e) => {
      console.log('não tem resp')
      errorNotify("Faça login!");
      deleteTokenCookie()
      router.replace({ name: "login" });
      return;
    }).finally(() => {
      loading.value = false
    });

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
    return role == 3
      ? router.push({ path: "/system/wallet" })
      : router.push({ path: "/system/users" });
  };

  return {
    auth,
    verifyLogged,
    setLogout,
    errors,
    loading,
  };
}
