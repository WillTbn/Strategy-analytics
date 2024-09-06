<template>
  <q-header reveal class="q-ma-md q-pa-sm bg-transparent">
    <q-toolbar class="tool">
      <q-btn flat :to="{ name: 'inicio' }">
        <svg-logo />
      </q-btn>
      <q-space />
      <q-item
        v-for="list in clientNavList"
        :key="list"
        :disable="list.inative"
        v-ripple
        :to="list.toName"
        class="text-white"
      >
        <!-- :active-class="dark ? 'bg-dark' : 'bg-primary'" -->
        <q-item-section> {{ list.name }} </q-item-section>
      </q-item>
      <q-space />
      <options-icons :theme="navbar.theme" :adm="data.role_id !== 3" />
      <avatar-menu :avatar="data.account.avatar" />
      <!-- {{ navbar.clock }} -->
      <hours-banner v-if="navbar.clock" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia";
import { useStoreLayout } from "src/stores/layoutStore";

import SvgLogo from "../components/svgs/SvgLogo.vue";
// import SvgSign from "../components/svgs/SvgSign.vue";
import useCookies from "src/composables/useCookies";
import useMode from "../../composables/system/useMode";
import OptionsIcons from "../components/navbar/OptionsIcons.vue";
import HoursBanner from "../components/navbar/HoursBanner.vue";
import AvatarMenu from "../components/navbar/AvatarMenu.vue";

export default defineComponent({
  props: { dark: { type: Boolean, default: true } },
  name: "NavbarLayout",
  components: {
    SvgLogo,
    OptionsIcons,
    HoursBanner,
    AvatarMenu,
  },
  setup() {
    // const {setDarkMode} = useCookies()

    const { clientNavList } = useMode();
    const barState = computed(() =>
      drawer.value ? "fixed-top-right" : "fixed-top-left"
    );
    const jsonState = computed(() =>
      drawer.value
        ? {
            barstate: "fixed-top-right bar-xmark",
            icon: "fa-solid fa-xmark",
          }
        : { barstate: "fixed-top-left barstate", icon: "fa-solid fa-bars" }
    );
    const leftDrawerOpen = ref(true);
    const drawer = ref(true);
    const miniState = ref(true);
    const storeLayout = useStoreLayout();
    const userStore = useUserStore();
    const { data, canAccess, menuAccess } = storeToRefs(userStore);
    const { navbar } = storeToRefs(storeLayout);

    return {
      menuAccess,
      canAccess,
      clientNavList,
      navbar,
      jsonState,
      barState,
      miniState,
      drawer,
      leftDrawerOpen,
      data,
      activeMode: useCookies().toggleMod,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.control-text {
  text-overflow: ellipsis;
  overflow: hidden;
}
.bg-personal {
  background: linear-gradient(#00000033, #0038584d, #0077ba6b, #00a3ff80);
}
.move-position {
  transform: translateX(480%) !important;
}
.control-area {
  height: calc(100% - 150px);
  margin-top: 150px;
  border-right: 1px solid #ddd;
  overflow: hidden !important;
}
.fit {
  overflow: hidden !important;
}

.rounded {
  border-radius: 13px;
}
</style>
<style lang="sass">
.tool
  border-radius: 8px
  background: rgba(0, 0, 0, 0.20)
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.20)
</style>
