import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();
  const time = 2500;
  const actions = { icon: 'close', 'aria-label': 'Dismiss' }
  const successNotify = (message) => {
    $q.notify({
      type: "positive",
      position: "top",
      message: message || "Tudo certo!",
      actions: [actions],
      timeout: time
    });
  };

  const errorNotify = (message) => {
    $q.notify({
      type: "negative",
      position: "top",
      message: message || "Falha!",
      actions: [actions],
      timeout: time
    });
  };
  const infoNotify = (message) => {
    $q.notify({
      type: "info",
      position: "top",
      message: message || "Informação adquirida!",
      actions: [actions],
      timeout: time
    });
  };

  return {
    errorNotify,
    successNotify,
    infoNotify,
  };
}
