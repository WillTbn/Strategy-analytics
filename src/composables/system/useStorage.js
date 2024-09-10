// import { storeToRefs } from "pinia";
import { LocalStorage } from "quasar";
import { useStoreLayout } from "src/stores/layoutStore";
import useCookies from "src/composables/useCookies";
import { storeToRefs } from "pinia";
export default function useStorage() {
  const {
    tokenCookie,
  } = useCookies()
  const storeLayout = useStoreLayout()
  const { navbar, system } = storeToRefs(storeLayout)
  /**
  * setando o valor do useLayoutStore(theme) ao storage local
  */
  const setNavTheme = async () => {
    LocalStorage.setItem('theme', navbar.value.theme)
  }
  /**
   * setando o valor da useLayoutStore(clock) ao storage local
   */
  const setClock = async () => {
    LocalStorage.setItem('clock', navbar.value.clock)
  }
  const setSystemTheme = async () => {
    LocalStorage.setItem('system-theme', system.value.theme)
  }
  /**
   * Verificar se existe localmente (theme) setado se sim configura no storage e local
   */
  const initialNavTheme = async () => {
    if (LocalStorage.hasItem('theme')) {
      storeLayout.setNavTheme(LocalStorage.getItem('theme'))
      // setTheme();
    }
  }
  /**
   * Verificar se existe localmente (clock) setado se sim configura no storage e local
   */
  const initialNavClock = async () => {
    if (LocalStorage.hasItem('clock')) {
      storeLayout.setNavClock(LocalStorage.getItem('clock'))
      // setClock();
    }
  }
  const initialSystemTheme = () => {
    if (LocalStorage.hasItem('system-theme')) {
      storeLayout.setSystemTheme(LocalStorage.getItem('system-theme'))
      // setClock();
    }
  }
  // const tokenCookie = Cookies.get(tokenName);
  return { setNavTheme, setClock, initialNavTheme, initialNavClock, setSystemTheme, initialSystemTheme }
}
