const actions = {
  setTable(payload) {
    this.table = payload;
  },
  setNavTheme(payload) {
    this.navbar.theme = payload;
  },
  setNavClock(payload) {
    this.navbar.clock = payload;
  },
  setSystemTheme(payload) {
    this.system.theme = payload;
  },
  setDrawerTheme(payload) {
    this.drawerTheme = payload;
  }
};

export default { ...actions };
