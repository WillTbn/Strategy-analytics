const getters = {
  getColorTheme: (state) => {
    if (state.system.theme == 'bg-simulator')
      return 'secondary'
    else
      return 'white'
  }
};

export default { ...getters };
