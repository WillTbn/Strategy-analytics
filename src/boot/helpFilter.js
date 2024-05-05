const filters = {
  price(input) {
    if (isNaN(input)) {
      return "-";
    }
    return "$" + input.toFixed(2);
  },
  currentValue(value) {
    return `R$ ${value}`;
  },
};
export default filters;
