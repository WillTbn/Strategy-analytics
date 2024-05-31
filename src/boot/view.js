import { boot } from "quasar/wrappers";
import { inputStyle } from '../Utils/ViewInput.js'
export default boot(({ app }) => {
  app.config.globalProperties.$inputStyle = inputStyle;
});
