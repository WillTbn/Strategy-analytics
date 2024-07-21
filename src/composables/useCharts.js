import { computed, ref } from "vue";
import { Dark } from "quasar";
import { useRouter } from "vue-router";
import { useLayoutStore } from "src/stores/layout";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";

export default function useCharts() {
  const dashboard = useLayoutStore().dashboard;
  const useStore = useUserStore()
  const { walletChart } = storeToRefs(useStore)
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

  const arrayWhite = ["gray", "gray", "gray", "gray", "gray", "gray", "gray"];
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
  const legendPosition = computed(() =>
    dashboard.screenViewWdth <= 1000 ? "top" : "right"
  );
  const mobileStyle = ref({
    style: {
      fontSize: "10px",
      fontWeight: "bold",
      fontFamily: "Inter",
      color: colorText,
    },
    margin: 30,
    toolbar: {
      offsetX: 30,
      offsetY: 30,
    },
  });
  const desktopStyle = ref({
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      fontFamily: "Inter",
      color: colorText,
    },
    margin: 10,
    toolbar: {
      offsetX: 0,
      offsetY: 0,
    },
  });
  const titleStyle = computed(() =>
    dashboard.screenViewWdth <= 1000 ? mobileStyle.value : desktopStyle.value
  );
  const toolbarOptions = computed(() =>
    dashboard.screenViewWdth <= 1000
      ? mobileStyle.value.toolbar
      : desktopStyle.value.toolbar
  );
  const colorArray = computed(() => (Dark.isActive ? arrayDark : arrayWhite));
  const optionsComparative = ref({
    theme: themeOptions,
    legend: {
      position: legendPosition,
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
      toolbar: toolbarOptions,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Carteira",
      align: "center",
      margin: titleStyle.value.margin,
      style: titleStyle.value.style,
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
        "--- 2023-Q3",
        "2023-Q2",
        "2023-Q1",
        "2024-Q0",
        "2024-Q1",
        "2024-Q2",
        "2024-Q3",
      ],
      // categories: [
      //   "--- 2022-Q1",
      //   "2022-Q2",
      //   "2022-Q3",
      //   "2022-Q4",
      //   "2023-Q1",
      //   "2023-Q2",
      //   "2023-Q3",
      // ],
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
      toolbar: toolbarOptions,
    },
    stroke: {
      width: [0, 10],
    },
    title: {
      text: "Rendimentos de dividendos da Carteira",
      align: "left",
      margin: titleStyle.value.margin,
      style: titleStyle.value.style,
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
      margin: titleStyle.value.margin,
      style: titleStyle.value.style,
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
      margin: titleStyle.value.margin,
      style: titleStyle.value.style,
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

  //pontos
  const addPoints = (valueNumber) => {
    let numberString = valueNumber.toString();

    let group = [];

    for (var i = numberString.length; i > 0; i -= 3) {
      group.unshift(numberString.substring(Math.max(0, i - 3), i));
    }
    // console.log('Aqui o addPoints', group.join("."));
    return group.join(".");
  };
  //no title
  const walletOption = ref({
    theme: themeOptions,
    chart: {
      background: "transparent",
      height: 250,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: toolbarOptions,
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
      categories: walletChart.value.days,
    },
    yaxis: {
      opposite: true,
      min: 0,
      max: 50,
      labels: {
        align: "left",
        formatter: (value) => {
          let numberNew = value.toFixed(2);
          return `${numberNew}%`;
        },
        style: {
          colors: colorArray,
        },
      },
    },
  });
  const walletOptionCurrent = ref({
    theme: themeOptions,
    chart: {
      background: "transparent",
      height: 250,
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
        "-       -2023-Q3",
        "2023-Q2",
        "2023-Q1",
        "2023-Q0",
        "2024-Q1",
        "2024-Q2",
        "2024-Q3",
      ],
    },
    yaxis: {
      opposite: true,
      min: 0,
      // max: 50,
      labels: {
        align: "left",
        formatter: (value) => {
          let numberNew = value.toFixed(2);
          // let numberNew = addPoints(value);
          return `R$ ${numberNew}`;
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
    walletOptionCurrent,
  };
}
