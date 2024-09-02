import { date } from 'quasar'

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
  dateFormatBr(value) {
    let dateCurrent = new Date(value + " 00:00:00")
    return date.formatDate(dateCurrent, "DD/MM/YYYY")
  }
};
export default filters;
