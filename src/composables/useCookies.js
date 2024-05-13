// import { storeToRefs } from "pinia";
import { Cookies, Dark } from "quasar";
import { useLayoutStore } from "src/stores/layout";
import { useUserStore } from "src/stores/user";

export default function useCookies() {
  const setOptionsCookie = { path: '/', secure: true, sameSite: "None" }
  const tokenName = process.env.COOKIE_TOKEN_NAME ?? "SA_token";
  const userCookie = process.env.COOKIE_TOKEN_NAME ?? "SA_user";
  const hasTokenCookie = Cookies.has(tokenName);
  const hasUserCookie = Cookies.has(userCookie);
  const getuserCookie = Cookies.get(userCookie);
  const tokenCookie = Cookies.get(tokenName);
  const storeLayout = useLayoutStore();
  const storeUser = useUserStore();
  // const {dashboard} = storeToRefs(storeLayout)

  const booleanVerify = (value) => {
    return value == "true" ? true : false;
  };

  const verify = () => {
    return Cookies.has("accept");
  };
  const toggleMod = () => {
    Dark.toggle();
    setDarkMode(Dark.isActive);
  };
  const setCookie = (name, value) => {
    Cookies.set(name, value, setOptionsCookie);
  };
  const getValue = (name) => {
    return Cookies.get(name);
  };

  const getDarkMode = async () => {
    // let valueDark = getValue("dark_mode") == "true" ? true : false;
    Dark.set(booleanVerify(getValue("dark_mode")));
  };

  const setDarkMode = (value) => {
    setCookie("dark_mode", value);
    Dark.set(value);
  };

  const setWidgetReport = (value) => {
    storeLayout.updatedDashReport(value);
    setCookie("widget_report", value);
  };

  const getWidgetReport = () => {
    return Cookies.has("widget_report")
      ? booleanVerify(getValue("widget_report"))
      : true;
  };
  const deleteTokenCookie = () => {
    Cookies.remove(tokenName, setOptionsCookie);
    Cookies.remove(userCookie, setOptionsCookie);
  }
  const setTokenCookie = (value) => {
    Cookies.set(tokenName, value, setOptionsCookie);
  };
  const setUserCookie = (value) => {
    Cookies.set(userCookie, value, setOptionsCookie);
    storeUser.setUserData(getuserCookie)
  }

  return {
    verify,
    toggleMod,
    getValue,
    getDarkMode,
    getWidgetReport,
    setCookie,
    setDarkMode,
    setWidgetReport,
    deleteTokenCookie,
    setTokenCookie,
    setUserCookie,
    getuserCookie,
    hasUserCookie,
    tokenName,
    hasTokenCookie,
    tokenCookie
  };
}
