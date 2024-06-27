
import { Cookies } from "quasar";
import useStates from "src/composables/useStates";
const { compareMinutes } = useStates();
const getters = {
  already: (state) => {
    return compareMinutes(state.data.created_at) ? "Continue de onde parou..." : "Realize um deposito na sua conta Strategy"
  },
};
370896
export default { ...getters };
