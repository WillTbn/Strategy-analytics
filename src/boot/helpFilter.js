const filters = {
  price(input) {
    if (isNaN(input)) {
      return "-";
    }
    return "$" + input.toFixed(2);
  },
  currentValue(value) {
    return `$ ${value}`;
  },
};
export default filters;
