import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    status: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
    statusUpdated(payload) {
      this.status = payload;
    },
  },
});
