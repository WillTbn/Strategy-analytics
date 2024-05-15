const state = () => {
  return {
    login: {
      person: "",
      password: "",
      expiration: null,
    },
    accountEdit: {},
    data: {},
    loan: {},
    wallet: {},
    investment: {},
    abilities: [],
    routeHome: "",
    NavbarMenu: "adm"
  };
};

export default state;
