const state = () => {
  return {
    data: {
      value: 50,
    },
    step: "first",
    sendReceipt: false,
    editData: {
      id: "",
    },
    isDirtyReport: {},
    qrcode: "",
    receipt: {
      transaction: null,
      upload: null,
    }
  };
};

export default state;
