import { useQuasar } from "quasar";

export default function useNotify() {
  const $q = useQuasar();

  const successNotify = (message) => {
    $q.notify({
      type: "positive",
      position: "top",
      message: message || "Tudo certo!",
    });
  };

  const errorNotify = (message) => {
    $q.notify({
      type: "negative",
      position: "top",
      message: message || "Falha!",
    });
  };
  const infoNotify = (message) => {
    $q.notify({
      type: "info",
      position: "top",
      message: message || "Informação adquirida!",
    });
  };

  return {
    errorNotify,
    successNotify,
    infoNotify,
  };
}
