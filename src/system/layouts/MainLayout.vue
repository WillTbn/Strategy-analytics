<template>
  <q-layout view="lHh lpR lFf" class="bg-simulator">
    <navbar-layout :key="route.name" v-if="!loading" />
    <q-page-container padding style="min-height: 95vh">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.name"></component>
        </transition>
      </router-view>
    </q-page-container>
    <q-inner-loading
      :showing="loading"
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
    <q-dialog
      v-if="codeDialog"
      v-model="codeDialog"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      backdrop-filter="blur(10px) saturate(250%)"
    >
      <q-card class="bg-transparent text-white">
        <code-email />
      </q-card>
    </q-dialog>
    <footer-system />
  </q-layout>
</template>

<script>
// import MenusidebarLayout from "../layouts/MenusidebarLayout.vue";
// import MenuLayout from "../layouts/MenuLayout.vue";
import NavbarLayout from "../layouts/NavbarLayout.vue";
import { Dark } from "quasar";
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useCookies from "../../composables/useCookies";
import useAuth from "../../composables/system/useAuth";
import useStates from "../../composables/useStates";
import { useLayoutStore } from "src/stores/layout";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import CodeEmail from "./auth/CodeEmail.vue";
import FooterSystem from "../components/FooterSystem.vue";

// import NavbarLayout from "../layouts/NavbarLayout.vue";
// import { ref } from 'vue'

export default defineComponent({
  components: { NavbarLayout, CodeEmail, FooterSystem },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const layout = useLayoutStore();
    const { loading } = useAuth();
    const { getValue, getDarkMode } = useCookies();
    const { dimension, dimensionHeight, viewport, detectTablet } = useStates();
    const userStore = useUserStore();
    const { data } = storeToRefs(userStore);
    const piniaDataLoaded = ref(false);
    const codeDialog = computed(() => {
      return data.value.email_verified_at == null ? true : false;
    });

    onMounted(async () => {
      layout.updatePdfScale(dimension(window.innerWidth));
      layout.setScreenWidth(dimensionHeight(window.innerHeight));
      layout.setViewWidth(viewport().viewWidth);
      layout.setViewHeight(viewport().viewHeight);
      layout.setDashboardTable(detectTablet());
      getDarkMode();
    });
    return {
      piniaDataLoaded,
      route,
      loading,

      Dark,
      codeDialog,
      statusDark: computed(() =>
        Dark.isActive ? "bg-system-dark" : "bg-system"
      ),
    };
  },
});
</script>
<style lang="sass">
/* Estilos específicos do componente aqui */
.fade-enter-active,
.fade-leave-active
  transition: opacity 355ms

.fade-enter,
.fade-leave-to
  opacity: 0
</style>
