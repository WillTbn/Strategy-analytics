
const actions = {

  decreaseDeposit(number) {
    if (this.data.value > 50) {
      this.data.value = this.data.value - number;
    } else {

      this.data.value = 50;
    }
  },
  incrementDeposit(number) {
    // if (this.data.value < 500) {
    this.data.value = this.data.value + number;
    // } else {
    //   this.data.value = 500;
    // }
  },
  setStep(payload) {
    this.step = payload
  },
  setData(payload) {
    this.data = payload
  },
  setQrcode(payload) {
    this.qrcode = payload
  },
  setSendReceipt(payload) {
    this.sendReceipt = payload
  },
  setWainting(payload) {
    this.waintings = payload
  }
};

export default { ...actions };
