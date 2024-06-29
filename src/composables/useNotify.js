import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();
  const time = 2500;
  const actions = { icon: 'close', 'aria-label': 'Dismiss', color: "dark" }
  const successNotify = (message, getTime = time) => {
    $q.notify({
      type: "positive",
      position: "top",
      message: message || "Tudo certo!",
      actions: [actions],
      timeout: getTime
    });
  };
  const alternativeNotify = (message, getTime = time) => {
    $q.notify({
      color: "primary",
      position: "top",
      message: message || "Ops... precisamos recomeça.",
      actions: [actions],
      timeout: getTime
    });
  };

  const errorNotify = (message, getTime = time) => {
    $q.notify({
      type: "negative",
      position: "top",
      message: message || "Falha!",
      actions: [actions],
      timeout: getTime
    });
  };
  const infoNotify = (message, getTime = time) => {
    $q.notify({
      type: "info",
      position: "top",
      message: message || "Informação adquirida!",
      actions: [actions],
      timeout: getTime
    });
  };
  /**
   * 
   * @param {Array|object} obj erros que seram ixibidos um apos o outros
   * @param {number} getTime quantos segundos vai aparece a notificações
   */
  const multError = (obj, getTime = 1) => {
    // let qua = 2
    for (const key in obj) {
      getTime++
      let formatInt = parseInt(`${getTime}000`)
      errorNotify(obj[key], formatInt)
    }
  }

  return {
    errorNotify,
    successNotify,
    infoNotify,
    alternativeNotify,
    multError
  };
}
