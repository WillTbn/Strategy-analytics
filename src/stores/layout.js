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
    activeMenu(payload) {
      const dropItem = document.querySelectorAll(".c-dropdown__item");
      const child = dropItem[payload].children[0];
      console.log("pai", dropItem[payload].children[0]);
      // console.log("ESTOU AQUi ", dropItem.children[0]);
      if (Object.keys(dropItem).length > 0) {
        console.log("ESTOU DENTRO", dropItem);
        dropItem[payload].classList.add("active");
        child.classList.add("active");
        this.menuHeader = payload;
      }
    },
    removeMenu(payload) {
      this.menuHeader = payload;
      // const sle = document.querySelectorAll(".active");
      // console.log("pai remove ->", sle);
      // // console.log(sle.children[0]);
      // if (Object.keys(sle).length > 0) {
      //   sle[0].classList.remove("active");
      // }
    },
  },
});
