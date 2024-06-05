
const actions = {
  setdata(payload) {
    this.data = payload
  },
  setEditaData(payload) {
    this.editData = payload
    this.isDirtyReport = Object.freeze({ ...payload })
  }
};

export default { ...actions };
