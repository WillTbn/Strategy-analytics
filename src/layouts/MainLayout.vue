<template>
  <q-layout
    view="hHr lpR fFr"
    class="bg-all"
    :class="{ 'bg-simulator': route.name == 'simulator' }"
    v-scroll="onScroll"
  >
    <navbar-drop :classHeader="bgHeader" />

    <q-page-container padding>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.name"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { useLayoutStore } from "../stores/layout";
import NavbarDrop from "../components/NavbarDrop.vue";
// import { useMeta } from "quasar";
export default defineComponent({
  components: {
    NavbarDrop,
  },
  setup() {
    const bgHeader = ref();
    function onScroll(position) {
      bgHeader.value = position >= 50 ? "navbar-tabs" : "navbar-tabs-top";
    }
    const layout = useLayoutStore();
    const route = useRoute();
    const clickBody = () => {
      layout.removeMenu("");
    };

    onMounted(() => {
      route.name == "simulator"
        ? ((layout.className = "bg-simulator"),
          (layout.bgDrawer = "bg-simulator-draw"))
        : ((layout.className = "bg-all"), (layout.bgDrawer = "bg-draw"));

      // route.name == "home"
      //   ? ((layout.className = "bg-all"), (layout.bgDrawer = "bg-draw"))
      //   : ((layout.className = "bg-simulator"),
      //     (layout.bgDrawer = "bg-simulator-draw"));
    });
    // useMeta(metaData);
    return {
      onScroll,
      clickBody,
      layout,
      route,
      bgHeader,
    };
  },
});
</script>
<style>
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: white !important;
  margin-left: 0.5rem !important;
}
.q-field__label,
no-pointer-events,
absolute,
ellipsis {
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 355ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
