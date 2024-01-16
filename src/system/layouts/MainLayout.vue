<template>
  <q-layout view="lHh lpR lFf" :class="statusDark">
    <!-- <menusidebar-layout /> -->
    <!-- <menubar-layout /> -->
    <navbar-layout :dark="Dark.isActive" />
    <q-page-container padding>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
// import MenusidebarLayout from "../layouts/MenusidebarLayout.vue";
// import MenuLayout from "../layouts/MenuLayout.vue";
import NavbarLayout from "../layouts/NavbarLayout.vue";
import { Dark } from "quasar";
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

// import NavbarLayout from "../layouts/NavbarLayout.vue";
// import { ref } from 'vue'

export default defineComponent({
  components: { NavbarLayout },
  setup() {
    const route = useRoute();
    // const statusDark = ref();
    // watch(
    //   () => Dark.isActive,
    //   (a) => {
    //    return statusDark.value = a ? "bg-system-dark" : "bg-system";
    //   }

    // );
    return {
      route,
      Dark,
      statusDark: computed(() => Dark.isActive ? "bg-system-dark" : "bg-system"),
    };
  },
});
</script>
<style scoped>
/* Estilos específicos do componente aqui */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 355ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
