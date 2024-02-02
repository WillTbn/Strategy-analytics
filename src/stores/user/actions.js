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
    this.data = payload;
  },
  setAvatarUpload(payload){
    this.data.avatar = payload
  }
};

export default { ...actions };
