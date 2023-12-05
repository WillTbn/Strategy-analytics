import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    className: "",
    bgDrawer: "",
    screenWidth: "",
  }),
  getters: {},
  actions: {},
});
