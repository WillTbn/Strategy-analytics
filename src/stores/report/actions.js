
const actions = {
  setdata(payload) {
    this.data = payload
  },
  setEditaData(payload) {
    this.editData = payload
    this.isDirtyReport = Object.freeze({ ...payload })
  },
  setlast(payload) {
    this.last = payload
  }
};

export default { ...actions };
