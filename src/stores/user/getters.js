
import { Cookies } from "quasar";
const getters = {
  // doubleCount: (state) => state.counter * 2,
  getInvestiment: (state) => {
    return state.data.user_wallet.current_investment;
  },
  currentInvestimentSeries: (state) => (arraySeries) => {
    // console.log("Estou aqui", arraySeries);
    let investmentInitial = state.data.user_wallet.current_investment;
    const arrayReturn = [];
    for (let i = 0; i < arraySeries.length; i++) {
      let valueNew;
      let addValue;
      // console.log('valueinvestment', investmentInitial)
      addValue = arraySeries[i] * investmentInitial / 100;
      valueNew = investmentInitial + addValue;
      // console.log('addValue sem toFixed -> ', valueNew);
      arrayReturn.push(addValue.toFixed(2));
    }
    // console.log("array return -> ", arrayReturn);
    return arrayReturn;
  },

  expiration: (state) => {
    const dataLocal = JSON.parse(localStorage.getItem("SA_user"));

    if (dataLocal) {
      return dataLocal.expiration_date != null ? true : false;
    }
  },
  isClient: (state) => {
    return state.data.role_id == 3;
  },
  canAccess: (state) => {
    const can = JSON.parse(localStorage.getItem(Cookies.get("SA_token")))
    // console.log('vamos olha para o data -> ', state.data)
    state.abilities = can
    return (params) => can.includes(params)
  },
  menuAccess: (state) => (params) => {
    if (state.abilities.length > 0) {
      return state.abilities.includes('all-access') ?? state.abilities.includes(params)
    }
  },
  authEmailCode: (state) => {
    return state.data.email_verified_at;
  }
};

export default { ...getters };
