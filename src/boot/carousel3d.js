import { boot } from "quasar/wrappers";
import Carousel3d from "vue-carousel-3d";

export default boot(({ app }) => {
  app.use(Carousel3d);
});
