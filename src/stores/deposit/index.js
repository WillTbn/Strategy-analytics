import { defineStore } from "pinia";
import state from "./state";
import getters from "./getters";
import actions from "./actions";

export const useDepositStore = defineStore("deposit", {
  state,
  getters,
  actions,
});
