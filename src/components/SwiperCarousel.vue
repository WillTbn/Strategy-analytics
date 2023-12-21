<template>
  <!-- <div class="radial-shadow-prev"></div> -->
  <!-- ref="{snSlide}"
  :effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="3"
  :spaceBetween="30"
  :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }"
  :navigation="true"
  :modules="modules" -->
  <swiper
    ref="{swiperRef}"
    :slidesPerView="perView"
    :centeredSlides="true"
    :spaceBetween="0"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    :virtual="true"
    :initialSlide="slide"
    class="mySwiper q-mb-xl"
  >
    <swiper-slide v-for="(author, i) in authors" :key="i">
      <author-carousel
        :author="author.author"
        :image="author.image"
        :office="author.office"
      />
    </swiper-slide>
  </swiper>
  <!-- <div class="radial-shadow-next"></div> -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AuthorCarousel from "./AuthorCarousel.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Virtual } from "swiper/modules";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  components: {
    Swiper,
    SwiperSlide,
    AuthorCarousel,
  },
  setup() {
    const slide = ref(1);
    const $q = useQuasar();
    const heightScreen = computed(() => {
      return (
        $q.screen.width <= 1024 &&
        $q.platform.is.platform != "mac" &&
        $q.platform.is.platform != "ipad"
      );
    });
    const perView = heightScreen.value ? 1 : 3;
    const authors = [
      {
        id: 1,
        author: "Lewis Hamilton",
        image: "img/image-3.png",
        office: "vice-analista Strategy",
      },
      {
        id: 2,
        author: "Max Verstappen",
        image: "img/image-4.png",
        office: "Diretor Strategy",
      },
      {
        id: 3,
        author: "Charles Leclerc",
        image: "img/image-5.png",
        office: "Vice-diretor Strategy",
      },
    ];
    return {
      perView,
      slide,
      authors,
      modules: [EffectCoverflow, Navigation, Virtual],
    };
  },
};
</script>
<style>
@media (min-width: 768px) {
  .swiper {
    width: 100%;
    padding-bottom: 50px;
    z-index: 12;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
}

.swiper-wrapper {
  z-index: 8;
}
.swiper-button-prev {
  color: #fff;
  z-index: 11;
}
.swiper-button-next {
  color: #fff;
  z-index: 11;
}
/* .swiper-slide-prev::before {
  content: "";
  width: 395px;
  height: 395px;

  left: -50px;
  position: absolute;
  margin-top: 0px;
  z-index: 11;
  border-radius: 1695px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 0, 0.36) 0%,
    rgba(255, 0, 0, 0) 100%
  );
} */
/* .swiper-slide-next::after {
  content: "";
  width: 395px;
  height: 395px;

  position: absolute;
  z-index: 11;
  margin-top: 0px;
  border-radius: 1695px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 163, 255, 0.42) 0%,
    rgba(0, 163, 255, 0) 100%
  );
} */

.radial-shadow-prev {
  width: 395px;
  height: 395px;

  left: -50px;
  position: absolute;
  margin-top: 120px;
  z-index: 2;
  border-radius: 1695px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 0, 0, 0.36) 0%,
    rgba(255, 0, 0, 0) 100%
  );
}
.radial-shadow-next {
  width: 395px;
  height: 395px;

  right: -50px;

  position: absolute;
  z-index: 2;
  margin-top: 120px;
  border-radius: 1695px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 163, 255, 0.42) 0%,
    rgba(0, 163, 255, 0) 100%
  );
}
</style>
