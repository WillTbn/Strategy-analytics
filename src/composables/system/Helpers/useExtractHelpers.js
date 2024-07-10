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
  const someValues = (initial, current) => {
    let one = parseFloat(initial)
    let two = parseFloat(current)
    let some = one + two
    let someString = some.toFixed(2)

    return `R$:${someString}`
  }
  return {
    dateFormatDMY,
    dateFormatHMS,
    getByCode,
    someValues
  }
}
