<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    animated
    arrows
    infinite
    control-color="primary"
    class="text-white rounded-borders control-carrousel"
    v-model:fullscreen="fullscreen"
    swipeable
  >
    <q-carousel-slide
      v-for="author in authors"
      :key="author.id"
      :name="author.id"
      class="row no-wrap flex-center"
    >
      <author-carousel
        :author="author.author"
        :image="author.image"
        :office="author.office"
      />
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
import { defineComponent, ref } from "vue";
import AuthorCarousel from "../components/AuthorCarousel.vue";

export default defineComponent({
  name: "CarouselQuasar",
  components: { AuthorCarousel },
  setup() {
    const slide = ref(1);
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
      slide,
      authors,
      fullscreen: ref(false),
    };
  },
});
</script>
<style>
.control-carrousel {
  background: transparent;
  width: 75%;
}
</style>
