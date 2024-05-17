
const actions = {
  setdata(payload) {
    this.data = payload
  },
  setEditaData(payload) {
    this.editData = payload
  }
};

export default { ...actions };
