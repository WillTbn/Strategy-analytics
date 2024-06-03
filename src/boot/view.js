import { boot } from "quasar/wrappers";
import { inputStyle } from '../Utils/ViewInput.js'
import { tableStyle } from '../Utils/CompsStyle.js'
export default boot(({ app }) => {
  app.config.globalProperties.$inputStyle = inputStyle;
  app.config.globalProperties.$tableStyle = tableStyle;

});
