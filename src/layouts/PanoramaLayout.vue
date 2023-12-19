<template>
  <div class="paranoma-layout control-py">
    <text-image
      classAdd="justify-center text-left q-pa-lg q-my-xl"
      image="img/default-img.png"
    >
      <div class="col-md-6 col-sm-10">
        <title-subtitle
          parentClass="q-pr-xl"
          textTitle="Panorama Strategy - Trabalhe com nossa tecnologia."
          textDescription="Como os investimentos podem ajudar cada vez mais pessoas?"
          textDescription2="E como podemos tornar o mundo dos investimentos mais facil e acessivel?"
        />
        <q-btn
          class="q-mt-sm"
          flat
          dense
          no-caps
          padding="none"
          label="Saiba mais"
          icon="fa-solid fa-chevron-right"
        />
      </div>
    </text-image>
    <text-image
      classAdd="justify-around text-right q-pa-lg q-my-xl reverse"
      image="img/default-img.png"
    >
      <div class="col-md-6 col-sm-10">
        <title-subtitle
          textTitle="Panorama Strategy - Trabalhe com nossa tecnologia."
          textDescription="Como os investimentos podem ajudar cada vez mais pessoas?"
          textDescription2="E como podemos tornar o mundo dos investimentos mais facil e acessivel?"
        />
        <q-btn
          class="q-mt-sm"
          flat
          dense
          no-caps
          padding="none"
          label="Saiba mais"
          icon="fa-solid fa-chevron-right"
        />
      </div>
    </text-image>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";
import TextImage from "../components/TextImage.vue";

export default defineComponent({
  name: "PanoramaLayout",
  components: { TitleSubtitle, TextImage },
  setup() {},
});
</script>
