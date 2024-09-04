import { date } from 'quasar'

const filters = {
  price(input) {
    if (isNaN(input)) {
      return "-";
    }
    return "$" + input.toFixed(2);
  },
  /**
   * Converte para string de USA ou BR moeda
   * @param {number|string} value 
   * @param {Boolean} br
   * @returns String
   */
  currentValue(value, br) {
    if (br) {
      return `R$ ${value}`;
    }
    return `$ ${value}`;
  },
  dateFormatBr(value) {
    let dateCurrent = new Date(value + " 00:00:00")
    return date.formatDate(dateCurrent, "DD/MM/YYYY")
  }
};
export default filters;
