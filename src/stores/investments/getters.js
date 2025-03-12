
import { Cookies } from "quasar";
const getters = {
  getUserInvestment: (state) => (params) => {
    // if (state.abilities.length > 0) {
    //   return state.abilities.includes('all-access') ?? state.abilities.includes(params)
    // }
    return state.data.filter((e) => { return e.name == params })

  },
};

export default { ...getters };
