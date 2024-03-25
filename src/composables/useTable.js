import { useRoute } from "vue-router";
import { useStoreLayout } from "../stores/layoutStore";

export default function useTable() {
  const storeLayout = useStoreLayout();
  const route = useRoute();
  const variableIncome = {
    growth: {
      primary: "24,6K",
      secondary: "+480,14%",
      image: "img/charts/Expansao_de_Patrimonio.svg",
    },
    yearly: [
      {
        name: "",
        acumulado: "30/11/2019 30/11/2020",
        ano: "30/11/2020 30/11/2021",
        calendario: "30/11/2021 30/11/2022",
        five: "30/11/2022 30/11/2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "52,29%",
        ano: "35,58%",
        calendario: "28,66%",
        five: "29,61%",
      },
      {
        name: "Índice S&500 de referencia(%)",
        acumulado: "16,04%",
        ano: "27,09%",
        calendario: "-19,43%",
        five: "24,05%",
      },
    ],
    annualAverage: [
      {
        name: "",
        acumulado: "1 ano",
        ano: "2 anos",
        calendario: "3 anos",
        five: "4 anos",
      },
      {
        name: "Retorno total (%)",
        acumulado: "36,53%",
        ano: "73,06%",
        calendario: "109,59%",
        five: "143,12%",
      },
      {
        name: "Índice S&500 de referencia(%)",
        acumulado: "15,35%",
        ano: "30,70%",
        calendario: "46,05%",
        five: "61,40%",
      },
    ],
    accumulated: [
      {
        name: "",
        acumulado: "2020 a 2021",
        ano: "2020 a 2022",
        calendario: "2020 a 2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "87,87%",
        ano: "116,53%",
        calendario: "146,14%",
      },
      {
        name: "Índice de referência (%)",
        acumulado: "43,13%",
        ano: "23,70%",
        calendario: "47,75%",
      },
    ],
    calendar: [
      {
        name: "",
        acumulado: "2020",
        ano: "2021",
        calendario: "2022",
        five: "2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "52,29%",
        ano: "35,58%",
        calendario: "28,66%",
        five: "29,61%",
      },
      {
        name: "Índice de referência (%)",
        acumulado: "16,04%",
        ano: "27,09%",
        calendario: "-19,43%",
        five: "24,05%",
      },
    ],
  };

  const fixedIncome = {
    growth: {
      primary: "15,3K",
      secondary: "+53,11%",
      image: "img/charts/Previdencia_Futura.svg",
    },
    yearly: [
      {
        name: "",
        acumulado: "30/11/2019 30/11/2020",
        ano: "30/11/2020 30/11/2021",
        calendario: "30/11/2021 30/11/2022",
        five: "30/11/2022 30/11/2023",
      },
      {
        name: "Retorno total (%) a 1º semestre de 2024",
        acumulado: "13,23%",
        ano: "13,19%",
        calendario: "13,33%",
        five: "13,36%",
      },
      {
        name: "Índice S&500 de referencia(%)",
        acumulado: "4,25%",
        ano: "7,25%",
        calendario: "13,75%",
        five: "13,75%",
      },
    ],

    annualAverage: [
      {
        name: "",
        acumulado: "1 ano",
        ano: "2 anos",
        calendario: "3 anos",
        five: "4 anos",
      },
      {
        name: "Retorno total (%)",
        acumulado: "13,27%",
        ano: "23,55%",
        calendario: "39,83%",
        five: "53,10%",
      },
      {
        name: "Índice Selic de referencia(%)",
        acumulado: "9,87%",
        ano: "19,75%",
        calendario: "29,62%",
        five: "39,50%",
      },
    ],
    accumulated: [
      {
        name: "",
        acumulado: "2020 a 2021",
        ano: "2020 a 2022",
        calendario: "2020 a 2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "26,42%",
        ano: "39,75%",
        calendario: "53,11%",
      },
      {
        name: "Índice Selic de referência (%)",
        acumulado: "12%",
        ano: "25,75%",
        calendario: "39,50%",
      },
    ],
    calendar: [
      {
        name: "",
        acumulado: "2020",
        ano: "2021",
        calendario: "2022",
        five: "2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "13,23%",
        ano: "13,19%",
        calendario: "13,33%",
        five: "13,36%",
      },
      {
        name: "Índice Selic de referência (%)",
        acumulado: "4,25%",
        ano: "7,75%",
        calendario: "13,75%",
        five: "13,75%",
      },
    ],
  };

  const flexibleIncome = {
    growth: {
      primary: "13,2K",
      secondary: "+32,23%",
      image: "img/charts/Liquidez_Elevada.svg",
    },
    yearly: [
      {
        name: "",
        acumulado: "30/11/2019 30/11/2020",
        ano: "30/11/2020 30/11/2021",
        calendario: "30/11/2021 30/11/2022",
        five: "30/11/2022 30/11/2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "8,06%",
        ano: "7,92%",
        calendario: "8,12%",
        five: "8,13%",
      },
      {
        name: "Poupança de referencia(%)",
        acumulado: "2,11%",
        ano: "3,69%",
        calendario: "7,89%",
        five: "6,16%",
      },
    ],
    annualAverage: [
      {
        name: "",
        acumulado: "1 ano",
        ano: "2 anos",
        calendario: "3 anos",
        five: "4 anos",
      },
      {
        name: "Retorno total (%)",
        acumulado: "8,05%",
        ano: "16,11%",
        calendario: "24,17%",
        five: "32,23%",
      },
      {
        name: "Poupança de referencia (%)",
        acumulado: "4,96%",
        ano: "9,92%",
        calendario: "14,88%",
        five: "19,86%",
      },
    ],
    accumulated: [
      {
        name: "",
        acumulado: "2020 a 2021",
        ano: "2020 a 2022",
        calendario: "2020 a 2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "15,98%",
        ano: "24,10%",
        calendario: "32,23%",
      },
      {
        name: "Poupança de referência (%)",
        acumulado: "5,8%",
        ano: "13,69%",
        calendario: "19,85%",
      },
    ],
    calendar: [
      {
        name: "",
        acumulado: "2020",
        ano: "2021",
        calendario: "2022",
        five: "2023",
      },
      {
        name: "Retorno total (%)",
        acumulado: "8,06%",
        ano: "7,92%",
        calendario: "8,12%",
        five: "8,13%",
      },
      {
        name: "Poupança de referência (%)",
        acumulado: "2,11%",
        ano: "3,69%",
        calendario: "7,89%",
        five: "6,16%",
      },
    ],
  };

  const getTable = () => {
    if (route.name === "rendaflexivel") storeLayout.setTable(flexibleIncome);
    if (route.name === "rendavariavel") storeLayout.setTable(variableIncome);
    if (route.name === "rendafixa") storeLayout.setTable(fixedIncome);
  };
  return {
    getTable,
  };
}
