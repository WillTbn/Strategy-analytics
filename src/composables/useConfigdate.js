export default function useConfigdate() {
  const brLocale = {
    days: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sabado",
    ],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  };
  const yearNow = new Date().getFullYear();

  const monthNow = () => {
    return new Date().getMonth() < 9
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  };
  return {
    brLocale,
    yearNow,
    monthNow,
  };
}
