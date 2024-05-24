import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();
  const time = 2500;
  const actions = { icon: 'close', 'aria-label': 'Dismiss' }
  const successNotify = (message, getTime = time) => {
    $q.notify({
      type: "positive",
      position: "top",
      message: message || "Tudo certo!",
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

  return {
    errorNotify,
    successNotify,
    infoNotify,
  };
}
