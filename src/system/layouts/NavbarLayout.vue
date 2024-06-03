<template>
  <div class="NavbarLayout">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :width="300"
      :mini-width="80"
      :class="$q.dark.isActive ? 'bg-navbar_dark' : 'bg-transparent'"
      mini-to-overlay
      class="control-drawer"
      v-if="data.account"
    >
      <!-- elevated -->
      <!-- class="control-drawer" -->
      <div
        class="bg-transparent q-mt-sm-lg row"
        :class="{ 'justify-between text-center': miniState }"
      >
        <div class="col-12">
          <q-item clickable v-ripple :to="{ name: 'config' }">
            <q-item-section side class="text-dark">
              <q-avatar size="46px">
                <img :src="data.account.avatar" />
              </q-avatar>
            </q-item-section>
            <q-item-section no-wrap>
              <q-item-label class="text-weight-bold control-text">
                {{ data.name }}
              </q-item-label>
              <q-item-label caption class="text-weight-bold control-text">
                {{ data.email }}
              </q-item-label>
            </q-item-section>

            <q-item-section side avatar top>
              <q-icon name="img:icons/iconeconfiguraes.svg" />
            </q-item-section>
          </q-item>
        </div>
        <!-- <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" /> -->
      </div>
      <div class="row justify-center text-center">
        <div class="col-6">
          <q-item clickable class="j" @click.prevent="setLogout">
            <!-- style="border-bottom-right-radius: 26px" -->
            <q-item-section side>
              <!-- <q-avatar square> -->
              <q-icon
                size="xs"
                name="fa-solid fa-arrow-right-from-bracket"
                color="red"
              />
              <!-- </q-avatar> -->
            </q-item-section>

            <q-item-section> sair </q-item-section>
          </q-item>
        </div>
      </div>

      <q-list class="q-mt-sm-xl q-pt-lg q-mx-sm q-px-sm" v-if="isClient">
        <q-item
          v-for="list in clientNavList"
          :key="list"
          :active-class="dark ? 'bg-dark rounded' : 'bg-primary rounded'"
          clickable
          exact
          v-ripple
          :to="list.toName"
        >
          <q-item-section avatar>
            <q-icon style="font-size: 2.5em">
              <q-tooltip
                v-if="miniState"
                anchor="center right"
                self="center left"
                :offset="[10, 10]"
                transition-show="rotate"
                transition-hide="rotate"
              >
                {{ list.name }}
              </q-tooltip>
              <svg
                :width="list.svgWidth"
                :height="list.svgHeight"
                :viewBox="list.svgViewBox"
                class="icon-svg"
              >
                <g :id="list.svgId">
                  <path
                    :id="list.pathId"
                    :d="list.pathData"
                    :fill="dark ? 'white' : 'inherit'"
                  />
                </g>
              </svg>
            </q-icon>
            <!-- <q-icon :name="list.svgIcon" style="font-size: 2.5em" /> -->
          </q-item-section>

          <q-item-section> {{ list.name }} </q-item-section>
        </q-item>
      </q-list>

      <q-list class="q-mt-sm-xl q-pt-lg q-mx-sm q-px-sm" v-else>
        <div class="" v-for="list in admNavList" :key="list">
          <q-item
            v-if="canAccess(list.can) || canAccess('all-access')"
            :active-class="dark ? 'bg-dark rounded' : 'bg-primary rounded'"
            clickable
            v-ripple
            :to="list.toName"
          >
            <q-item-section avatar>
              <q-icon style="font-size: 2.5em">
                <q-tooltip
                  v-if="miniState"
                  anchor="center right"
                  self="center left"
                  :offset="[10, 10]"
                  transition-show="rotate"
                  transition-hide="rotate"
                >
                  {{ list.name }}
                </q-tooltip>
                <svg
                  :width="list.svgWidth"
                  :height="list.svgHeight"
                  :viewBox="list.svgViewBox"
                  class="icon-svg"
                >
                  <g :id="list.svgId">
                    <path
                      :id="list.pathId"
                      :d="list.pathData"
                      :fill="dark ? 'white' : 'inherit'"
                    />
                  </g>
                </svg>
              </q-icon>
              <!-- <q-icon :name="list.svgIcon" style="font-size: 2.5em" /> -->
            </q-item-section>

            <q-item-section> {{ list.name }} </q-item-section>
          </q-item>
        </div>
      </q-list>
      <div class="bg-transparent absolute-bottom" style="overflow-x: hidden">
        <div class="row q-mt-xl q-pt-lg">
          <div class="col-12">
            <!-- <q-avatar size="36px" class="q-mb-sm">
              <img src="icons/logo.svg" />
            </q-avatar> -->
            <q-item
              clickable
              v-ripple
              class="justify-center text-center"
              @click.prevent="activeMode"
              style="border-bottom-right-radius: 26px"
            >
              <q-item-section side>
                <q-avatar size="46px">
                  <!-- <img src="icons/logo.svg" /> -->
                  <svg-logo :dark="dark" />
                </q-avatar>
              </q-item-section>

              <q-item-section side>
                <q-avatar size="120px">
                  <!-- <img src="icons/LETREIRO COM BARRA.svg" /> -->
                  <svg-sign :dark="dark" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </q-drawer>
    <div
      class="mobile-only bg-primary"
      :class="jsonState.barstate"
      @click.prevent="drawer = !drawer"
      style="z-index: 4000; overflow-x: hidden"
    >
      <q-avatar size="lg" color="transparent" class="avatar-icon">
        <!-- <FontAwesomeIcon icon="fa-solid fa-xmark" /> -->
        <q-icon size="xs" left :name="jsonState.icon" />
      </q-avatar>
    </div>
    <div
      class="position-absolute fixed-center desktop-only"
      :class="{ 'move-position ': !miniState }"
    >
      <q-avatar
        size="lg"
        color="transparent"
        class="avatar-icon"
        @click="miniState = !miniState"
      >
        <q-icon
          size="xs"
          left
          name="fa-solid fa-chevron-right"
          :class="{ 'icon-select ': !miniState }"
        />
      </q-avatar>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia";
import SvgLogo from "../components/svgs/SvgLogo.vue";
import SvgSign from "../components/svgs/SvgSign.vue";
import useCookies from "src/composables/useCookies";
import useAuth from "../../composables/system/useAuth";
import useMode from "../../composables/system/useMode";
export default defineComponent({
  props: { dark: { type: Boolean, default: true } },
  name: "NavbarLayout",
  components: { SvgLogo, SvgSign },
  setup() {
    // const {setDarkMode} = useCookies()
    const { setLogout } = useAuth();
    const { clientNavList, admNavList } = useMode();
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
    const userStore = useUserStore();
    const { data, isClient, canAccess, menuAccess } = storeToRefs(userStore);

    return {
      menuAccess,
      canAccess,
      clientNavList,
      admNavList,
      isClient,
      jsonState,
      barState,
      setLogout,
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
