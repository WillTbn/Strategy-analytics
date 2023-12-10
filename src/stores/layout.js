import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    className: "",
    bgDrawer: "",
    screenWidth: "",
    menuHeader: "",
  }),
  getters: {},
  actions: {
    statusMenu(payload) {
      this.menuHeader = payload;
    },
  },
});
