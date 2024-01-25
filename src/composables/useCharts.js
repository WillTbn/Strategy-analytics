import { computed, ref } from "vue";
import { Dark } from "quasar";
import { useRouter } from "vue-router";

export default function useCharts() {
  const optionsTheme = () => {
    return Dark.isActive
      ? {
          mode: "dark",
          palette: "palette1",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        }
      : {
          mode: "light",
          palette: "palette2",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        };
  };

  const arrayWhite = ["gary", "gary", "gary", "gary", "gary", "gary", "gary"];
  const arrayDark = [
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ];
  const themeOptions = computed(() => optionsTheme());
  const colorText = computed(() => (Dark.isActive ? "#fff" : "#000"));

  const colorArray = computed(() => (Dark.isActive ? arrayDark : arrayWhite));
  const optionsComparative = ref({
    theme: themeOptions,
    legend: {
      position: "right",
      fontFamily: "Inter",
    },
    colors: ["#2E93fA", "#66DA26", "#E91E63"],
    chart: {
      height: 350,
      background: "transparent",
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Carteira Strategy Analytics",
      align: "center",
      style: {
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Inter",
        color: colorText,
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 1,
      },
    },
    xaxis: {
      tickPlacement: "center",
      labels: {
        style: {
          colors: colorArray,
          fontSize: "8px",
          fontFamily: "Inter",
          fontWeight: 600,
        },
      },
      categories: [
        "--- 2022-Q1",
        "2022-Q2",
        "2022-Q3",
        "2022-Q4",
        "2023-Q1",
        "2023-Q2",
        "2023-Q3",
      ],
    },
    yaxis: {
      opposite: true,
      min: -20,
      max: 50,
      labels: {
        align: "left",
        formatter: (value) => {
          return `${value}%`;
        },
        style: {
          fontFamily: "Inter",
          colors: colorArray,
        },
      },
    },
  });

  const optionsYield = ref({
    theme: themeOptions,
    legend: { position: "top", fontFamily: "Inter" },
    colors: ["#2E93fA", "#E91E63"],
    chart: {
      background: "transparent",
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Rendimentos de dividendos da Carteira",
      align: "left",
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        fontFamily: "Inter",
        color: colorText,
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [],
    },
    labels: [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ],

    yaxis: [
      {
        // opposite: true,
        labels: {
          align: "left",
          formatter: (value) => {
            return `0,${value}%`;
          },
          style: {
            fontFamily: "Inter",
            color: colorText,
          },
        },
      },
    ],
  });
  const optionsAssetsClass = ref({
    theme: themeOptions,
    colors: ["#2E93fA", "#001"],
    chart: {
      background: "transparent",
      width: 380,
      type: "pie",
    },
    labels: ["EUA", "Blockchain"],
    title: {
      text: "Ativos classes",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Inter",
        color: colorText,
      },
    },
    responsive: [
      {
        // breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
          style: {
            color: colorText,
          },
        },
      },
    ],
  });

  const optionsAssetRisks = ref({
    theme: themeOptions,
    chart: {
      background: "transparent",
      colors: ["#2E93fA", "yellow", "orange", "orange", "orange", "orange"],
      width: 380,
      type: "pie",
    },
    labels: ["TLT", "Dólar", "Aave", "ChainLink", "Etherum", "Unisawp"],
    title: {
      text: "Gerenciamento de risco",
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "Inter",
        color: colorText,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
          style: {
            color: colorText,
          },
        },
      },
    ],
  });

  const walletOption = ref({
    theme: themeOptions,
    chart: {
      background: "transparent",
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "center",
    // },
    legend: {
      labels: {
        colors: ["#000"],
        useSeriesColors: false,
      },
    },
    grid: {
      row: {
        colors: ["#fff", "transparent"], // takes an array which will be repeated on columns
        opacity: 1,
      },
    },
    xaxis: {
      tickPlacement: "center",
      labels: {
        style: {
          colors: colorArray,
          fontSize: "8px",
          fontWeight: 600,
        },
      },
      categories: [
        "-       -2022-Q1",
        "2022-Q2",
        "2022-Q3",
        "2022-Q4",
        "2023-Q1",
        "2023-Q2",
        "2023-Q3",
      ],
    },
    yaxis: {
      opposite: true,
      min: -20,
      max: 50,
      labels: {
        align: "left",
        formatter: (value) => {
          return `${value}%`;
        },
        style: {
          colors: colorArray,
        },
      },
    },
  });

  return {
    walletOption,
    optionsComparative,
    optionsYield,
    optionsAssetsClass,
    optionsAssetRisks,
  };
}
