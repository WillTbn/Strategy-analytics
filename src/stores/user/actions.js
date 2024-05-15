
const actions = {
  getAccount(payload) {
    let getJson = [];
    getJson = {
      ...this.data.account.filter((a) => {
        return a.id == payload;
      }),
    };
    const teste = { ...getJson[0] };
    // console.log("vendpo getJson[0]->", getJson[0]);
    // console.log("vendpo stor->", teste);
    this.accountEdit = teste;
  },

  setUserData(payload) {
    this.data = { ...payload };
    console.log('roleID->', payload.role_id)
    this.routeHome = payload.role_id == 3 ? 'wallet' : 'users';
    this.NavbarMenu = payload.role_id == 3 ? 'client' : 'admin';
    this.wallet = payload.role_id === 3 ? { ...payload.user_wallet } : "";
    this.loan = payload.investment ? payload.loan : "";
    this.investment = payload.investment ? payload.investment : "";
  },
  setAvatarUpload(payload) {
    this.data.avatar = payload;
  },
  setRouteHome(payload) {
    this.routeHome = payload
  },
  setLoan(payload) {
    this.loan = payload;
  },
  setAbilities(payload) {
    this.abilities = payload;
  },
  setClear() {
    this.accountEdit = {}
    this.data = {}
    this.loan = {}
    this.wallet = {}
    this.investment = {}
    this.abilities = {}
    this.routeHome = ""
    this.NavbarMenu = "adm"
  }
};

export default { ...actions };
