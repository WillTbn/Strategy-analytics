<template>
  <div class="row justify-center text-center q-mt-xl">
    <div class="col-12">
      <p class="text-h4 text-weight-bolder">Autores:</p>
    </div>
    <!-- <carousel-quasar /> -->
    <!-- <carousel-wlada></carousel-wlada> -->
    <swiper-carousel></swiper-carousel>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
// import CarouselQuasar from "../components/CarouselQuasar.vue";
// import CarouselWlada from "../components/CarouselWlada.vue";
import SwiperCarousel from "../components/SwiperCarousel.vue";

export default defineComponent({
  name: "AuthorsLayout",
  components: {
    // CarouselQuasar
    // CarouselWlada,
    SwiperCarousel,
  },
  setup() {
    return {};
  },
});
</script>
<style>
.control-carrousel {
  background: transparent;
  width: 75%;
}
</style>
