import { date } from 'quasar'
import { computed } from 'vue';
export default function useCase() {
  const serializeString = (e) => {
    return e.replace(/[-\s]+/g, "").toUpperCase();
  };

  //same as the other
  const same = (original, other) => {
    const seriOriginal = serializeString(original);
    const seriOther = serializeString(other);
    return seriOriginal == seriOther
  }
  const dateFormatBr = (value) => {
    let dateCurrent = new Date(value + " 00:00:00")
    return date.formatDate(dateCurrent, "DD/MM/YYYY")
  }
  const sameDate = (current, oldDate) => {
    return dateFormatBr(current) == dateFormatBr(oldDate)
  }
  const dateFormatUTC = (value) => {
    return date.formatDate(value, "YYYY/MM/DD")
  }
  /**
   * @param {date} dateNow data no formato US completa YYYY-MM-DD HH:MM:ss
   */
  const dateUSFromBr = (dateNow) => {
    return date.formatDate(dateNow, "DD/MM/YYYY hh:mm");
  }
  return {
    serializeString,
    same,
    dateFormatBr,
    sameDate,
    dateFormatUTC,
    dateUSFromBr
  }
} 
