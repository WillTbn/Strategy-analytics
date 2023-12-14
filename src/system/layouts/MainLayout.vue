<template>
  <q-layout view="lHh lpR lFf" class="bg-system">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      elevated
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Star </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Drafts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <!-- <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      > -->
      <div class="absolute-top bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </div>
      <!-- </q-img> -->
    </q-drawer>
    <div
      class="q-mini-drawer-hide absolute"
      style="top: 25px; left: 47px; z-index: 10000"
    >
      <q-btn
        dense
        round
        unelevated
        color="dark"
        icon="chevron_right"
        @click="miniState = false"
      />
    </div>
    <q-page-sticky position="left" :offset="[18, 0]">
      <q-btn round color="accent" icon="arrow_upward" class="rotate-90" />
    </q-page-sticky>

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
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
// import { ref } from 'vue'

export default defineComponent({
  setup() {
    const leftDrawerOpen = ref(true);
    const drawer = ref(true);
    const miniState = ref(true);
    const route = useRoute();
    return {
      route,
      miniState,
      drawer,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
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
</style>
