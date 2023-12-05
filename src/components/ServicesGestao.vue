<template>
  <div
    class="q-mt-xl text-white q-pb-xl"
    :class="jscontrol"
    v-scroll-fire="bounceAnime"
  >
    <q-img
      :src="imgService"
      :srcset="imgService"
      :alt="title"
      width="15rem"
      height="18em"
      class="q-mb-lg"
    />
    <br />
    <span class="text-h5 q-my-lg text-weight-bold"> {{ title }} </span>
    <br />
    <p class="q-mx-xl text-h6 text-subtitle2">{{ description }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "ServicesGestao",
  props: {
    imgService: { type: String },
    title: { type: String },
    description: { type: String },

    jscontrol: { type: String },
  },
  setup() {
    const $q = useQuasar();

    return {
      bounceAnime(el) {
        el.classList.add("js-ativo");
        setTimeout(() => {
          // we make sure the node is still in DOM
          // (user hasn't navigated away from the Vue component
          // rendering our `<div>`)
          // so we don't generate an error
          if (document.body.contains(el)) {
            // then remove the helper class to
            // stop bouncing
            el.classList.remove("animate-bounce");
          }
        }, 1000);
      },
    };
  },
});
</script>
