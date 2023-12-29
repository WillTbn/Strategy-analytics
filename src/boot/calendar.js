import { boot } from "quasar/wrappers";
import { setupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/style.css";
// import ApexCharts from "vue3-apexcharts";

// import VueApexCharts from 'vue3-apexcharts/typings/vue-apexcharts';

export default boot(({ app }) => {
  // app.use(VueApexCharts)
  // app.use(ApexCharts);
  app.use(setupCalendar, {});

  app.component("VCalendar", Calendar);
  app.component("VDatePicker", DatePicker);
});
