import { boot } from "quasar/wrappers";
import ApexCharts from "vue3-apexcharts";

// import VueApexCharts from 'vue3-apexcharts/typings/vue-apexcharts';

export default boot(({ app }) => {
  // app.use(VueApexCharts)
  app.use(ApexCharts);
});
