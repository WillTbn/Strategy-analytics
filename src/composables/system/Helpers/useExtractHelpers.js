import { date } from 'quasar'
export default function useExtractHelpers() {

  const confirmationMode = {
    true: 'transferencia para investimentos',
    false: 'transferencia para carteira',
    '#0011': '#0011 - CONFIRMED BYADM',
  }
  const getByCode = (code) => {
    return confirmationMode[code]
  }

  const dateFormatDMY = (value) => {
    let dateCurrent = new Date(value)
    return date.formatDate(dateCurrent, "DD/MM/YYYY")
  }
  const dateFormatHMS = (value) => {
    let dateCurrent = new Date(value)
    return date.formatDate(dateCurrent, "hh:mm")
  }
  /**
   * Formata valores numericos
   * @param {number|float} value numero para ser convertido para formato ex.:2.999,00
   * @returns valor convertido para 2 casas decimais e pontuação de milhar
   */
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  /**
   * Conversão de string para Float e somar dos valores
   * @param {string} initial primeiro valor da soma
   * @param {string} current segundo valor da soma
   * @returns valores somados
   */
  const addValues = (initial, current) => {
    let one = parseFloat(initial)
    let two = parseFloat(current)
    let some = one + two
    let someString = some.toFixed(2)

    return formatCurrency(someString)
  }
  return {
    dateFormatDMY,
    dateFormatHMS,
    getByCode,
    addValues,
    formatCurrency
  }
}
