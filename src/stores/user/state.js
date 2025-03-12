const state = () => {
  return {
    login: {
      person: "",
      password: "",
      expiration: null,
    },
    authentication: {
      token: "",
      person: "",
      password: "",
      password_confirm: "",
      password_confirmation: "",
    },
    register: {
      notifications: "refused"
    },
    accountEdit: {},
    data: {},
    loan: {},
    wallet: {},
    investment: {},
    abilities: [],
    routeHome: "inicio",
    NavbarMenu: "adm",
    isDirty: {},
    isDirtyData: {},
    walletChart: []
  };
};

export default state;
