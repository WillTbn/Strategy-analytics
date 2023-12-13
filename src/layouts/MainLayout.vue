<template>
  <!-- <q-layout view="hHh lpR fFf" :class="layout.className"> -->
  <q-layout
    view="hHr lpR fFr"
    class="bg-all"
    :class="{ 'bg-simulator': route.name == 'simulator' }"
  >
    <navbar-tabs />
    <!-- <navbar-header /> -->
    <!-- <navbar-menu /> -->
    <q-page-container padding @click.prevent="clickBody()" v-scroll="onScroll">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
// import NavbarHeader from "../components/NavbarHeader.vue";
import NavbarTabs from "../components/NavbarTabs.vue";

import { useLayoutStore } from "../stores/layout";
// import NavbarMenu from "../components/NavbarMenu.vue";
export default defineComponent({
  components: {
    // NavbarHeader,
    NavbarTabs,
    // NavbarMenu,
  },
  setup() {
    function onScroll() {
      clickBody();
    }
    const layout = useLayoutStore();
    const route = useRoute();
    const clickBody = () => {
      layout.statusMenu("");
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
    return {
      onScroll,
      clickBody,
      layout,
      route,
    };
  },
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
