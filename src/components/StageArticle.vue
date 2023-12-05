<template>
  <div
    class="q-mt-xl text-white q-pb-xl text-left q-px-xl"
    :class="jscontrol"
    v-scroll-fire="bounceAnime"
  >
    <span class="text-h1 text-weight-bolder">{{ etaps }}</span>
    <p class="text-h5 q-my-lg text-weight-bolder">
      {{ title }}
    </p>
    <p class="text-h6 text-subtitle2">{{ description }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "StageArticle",
  props: {
    etaps: { type: String },
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
