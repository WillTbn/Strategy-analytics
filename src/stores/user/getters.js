
import { Cookies } from "quasar";
const getters = {
  // doubleCount: (state) => state.counter * 2,
  getInvestiment: (state) => {
    return state.data.investment.initial;
  },
  currentInvestimentSeries: (state) => (arraySeries) => {
    console.log("Estou aqui", arraySeries);
    let investmentInitial = state.data.investment.initial;
    const arrayReturn = [];
    for (let i = 0; i < arraySeries.length; i++) {
      let valueNew;
      let addValue;
      addValue = investmentInitial * (arraySeries[i] / 100);
      valueNew = investmentInitial + addValue;
      arrayReturn.push(valueNew);
    }
    console.log("array return -> ", arrayReturn);
    return arrayReturn;
  },

  expiration: (state) => {
    const dataLocal = JSON.parse(localStorage.getItem("SA_user"));
    console.log("ESTOU NO GETTERS", dataLocal);
    if (dataLocal) {
      return dataLocal.expiration_date != null ? true : false;
    }
  },
  isClient: (state) => {
    return state.data.role_id == 3;
  },
  canAccess: (state) => {
    return state.abilities = JSON.parse(localStorage.getItem(Cookies.get("SA_token")))
  },
  menuAccess: (state) => (params) => {
    if (state.abilities.length > 0) {
      return state.abilities.includes('all-access') ?? state.abilities.includes(params)
    }
  }
};

export default { ...getters };
