<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="3"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper q-my-xl"
    :navigation="true"
  >
    <swiper-slide v-for="(author, i) in authors" :key="i">
      <author-carousel
        :author="author.author"
        :image="author.image"
        :office="author.office"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AuthorCarousel from "./AuthorCarousel.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    AuthorCarousel,
  },
  setup() {
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
      authors,
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
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
</style>
