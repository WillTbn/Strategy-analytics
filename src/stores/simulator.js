import { defineStore } from "pinia";

export const useSimulatorStore = defineStore("simulator", {
  state: () => ({
    data: {
      value: "1.000",
      year: 4,
      percentage: 1,
      toReceiver: "Receber retornos mensal",
      perceFinal: 0,
    },
    loan: {
      value: 50,
      plotValue: "1.450",
      porcentage: 93,
      contribuition: "109,14",
    },
  }),
  getters: {
    doubleCount: (state) => state.data.year * 2,
  },
  actions: {
    incrementYear(number) {
      this.data.year = this.data.year + number;
    },
    decreaseYear(number) {
      if (this.data.year > 0) {
        this.data.year = this.data.year - number;
      } else {
        this.data.year = 0;
      }
    },
    incrementPercentage(number) {
      this.data.percentage = this.data.percentage + number;
    },
    decreasePercentage(number) {
      if (this.data.percentage > 0) {
        this.data.percentage = this.data.percentage - number;
      } else {
        this.data.percentage = 0;
      }
    },

    decreaseLoan(number) {
      if (this.loan.value > 50) {
        this.loan.value = this.loan.value - number;
      } else {
        this.loan.value = 50;
      }
    },
    incrementLoan(number) {
      if (this.loan.value < 500) {
        this.loan.value = this.loan.value + number;
      } else {
        this.loan.value = 500;
      }
    },
  },
});
