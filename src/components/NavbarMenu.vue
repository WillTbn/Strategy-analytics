<template>
  <q-header class="nav-bar" elevated>
    <div
      class="row justify-between items-center q-ma-sm q-px-xl desktop-only touch-hide"
      style="margin: 0.7rem"
    >
      <div class="col-12 col-md-8">
        <div class="list-control">
          <LogoComplet />
          <q-item
            class="link-strategy"
            v-for="item in list"
            :key="item.name"
            exact
            dense
            clickable
            manual-focus
          >
            <q-item-section
              lines="2"
              class="text-weight-bold control-a"
              no-wrap
              avatar
            >
              {{ item.name }}
            </q-item-section>
          </q-item>
        </div>
      </div>
      <div class="col-2">
        <insert-person />
      </div>
    </div>
    <!-- mobile -->
    <div class="row justify-between q-mt-lg touch-only">
      <LogoComplet col="col-5" />

      <div class="col-1 q-mr-sm">
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
          class="zindex-control"
        />
      </div>
    </div>
  </q-header>

  <q-drawer
    v-model="rightDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    elevated
    class="text-white"
    :class="classBg.bgDrawer"
  >
    <div class="row justify-end">
      <div class="col-2 q-mt-lg" @click="toggleRightDrawer">
        <q-icon name="close" size="lg" />
      </div>
    </div>
    <q-list padding separator class="control-qList">
      <q-item
        v-for="item in list"
        :key="item.name"
        :to="item.route"
        exact
        dense
        clickable
        manual-focus
      >
        <q-item>
          {{ item.name }}
        </q-item>
        <!-- <q-item-section lines="6" no-wrap avatar>
        {{ item.name }}
        </q-item-section> -->
      </q-item>
    </q-list>
    <div class="row justify-center">
      <div class="col-6">
        <insert-person />
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import LogoComplet from "./LogoComplet.vue";
import InsertPerson from "./InsertPerson.vue";
import { useLayoutStore } from "../stores/layout";

export default defineComponent({
  name: "NavbarMenu",
  components: { LogoComplet, InsertPerson },
  setup() {
    const rightDrawerOpen = ref(false);

    const list = [
      {
        name: "Produtos",
        id: "gestão",
        route: "/",
      },
      {
        name: "Quem somos",
        id: "Assinantes",
        route: "/quemsomos",
      },
      {
        name: "Estratégias",
        id: "Simulador",
        route: "/simulator",
      },
    ];
    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      list,
      classBg: useLayoutStore(),
      menuActive,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.content-div {
  display: inline-block;
  /* max-width: 95vw; */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  max-height: 65vh;
  width: 100vh;
  z-index: 6000;
}
.zindex-control {
  z-index: 1;
}

.control-qList {
  height: 50dvh;
  margin-top: 10rem;
}
.list-control {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  background: #ffffff26 !important;
  border-bottom: solid 4px #4694d1;
}
.control-tabs {
  margin: 1.2rem;
}
.btn-control:hover {
  transition: all 1.3s;
  background-color: #0085ffc4;
}

.control-a {
  color: #fff;
}
.control-a:hover {
  color: #0085ffc4 !important;
}
.q-item.q-router-link--active,
.q-item--active {
  color: none !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter,
.fade-leave-active {
  transition: opacity 1s;
}
.control-span-form {
  margin-top: -2rem;
}
</style>
