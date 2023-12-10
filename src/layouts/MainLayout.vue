<template>
  <!-- <q-layout view="hHh lpR fFf" :class="layout.className"> -->
  <q-layout view="hHr lpR fFr" :class="layout.className">
    <navbar-tabs />
    <!-- <navbar-header /> -->
    <!-- <navbar-menu /> -->
    <q-page-container padding @click.prevent="clickBody()">
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
    const layout = useLayoutStore();
    const route = useRoute();
    const clickBody = () => {
      layout.statusMenu("");
    };
    onMounted(() => {
      route.name == "home"
        ? ((layout.className = "bg-all"), (layout.bgDrawer = "bg-draw"))
        : ((layout.className = "bg-simulator"),
          (layout.bgDrawer = "bg-simulator-draw"));
    });
    return {
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
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
