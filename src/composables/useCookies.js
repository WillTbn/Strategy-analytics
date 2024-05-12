// import { storeToRefs } from "pinia";
import { Cookies, Dark } from "quasar";
import { useLayoutStore } from "src/stores/layout";

export default function useCookies() {
  const setOptionsCookie = { path: '/', secure: true, sameSite: "None" }
  const tokenName = process.env.COOKIE_TOKEN_NAME ?? "SA_token";
  const hasTokenCookie = Cookies.has(tokenName);
  const tokenCookie = Cookies.get(tokenName);
  const storeLayout = useLayoutStore();
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
  }
  const setTokenCookie = (value) => {
    Cookies.set(tokenName, value, setOptionsCookie);
  };

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
    tokenName,
    hasTokenCookie,
    tokenCookie
  };
}
