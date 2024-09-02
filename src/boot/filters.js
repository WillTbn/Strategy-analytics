import { boot } from "quasar/wrappers";
import filters from "./helpFilter.js";
export default boot(({ app }) => {
  app.config.globalProperties.$filters = filters;
});
