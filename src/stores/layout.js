import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    className: "",
    bgDrawer: "",
    screenWidth: "",
    menuHeader: "",
    calendarSteps: "home",
    reportSteps: "all",
    loanSteps: "home",
    dashboard: {
      reporthome: true,
      pdfScale: null,
    },
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
    updateCalendarsteps(payload) {
      this.calendarSteps = payload;
    },
    upateReportsteps(payload) {
      this.reportSteps = payload;
    },
    updateLoansteps(payload) {
      console.log(payload);
      this.loanSteps = payload;
    },
    updatedDashReport(payload) {
      this.dashboard.reporthome = payload;
    },
    updatePdfScale(payload) {
      console.log(payload);
      this.dashboard.pdfScale = payload;
    },
  },
});
