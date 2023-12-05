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
  },
});
