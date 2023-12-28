<template>
  <q-layout view="lHh lpR lFf" :class="statusDark">
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
import { Dark } from "quasar";
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import NavbarLayout from "../layouts/NavbarLayout.vue";
// import { ref } from 'vue'

export default defineComponent({
  components: { NavbarLayout },
  setup() {
    const route = useRoute();
    const statusDark = ref();
    watch(
      () => Dark.isActive,
      (a) => {
        statusDark.value = a ? "bg-system-dark" : "bg-system";
      }
    );
    return {
      route,
      Dark,
      statusDark,
    };
  },
});
</script>
<style scoped>
/* Estilos específicos do componente aqui */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bg-system {
  background: var(--FUNDO, #f1f3fb);
}
.bg-system-dark {
  background: var(--FUNDO, #000);
}
</style>
