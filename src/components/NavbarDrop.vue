<template>
  <q-header class="NavbarDrop navbar-tabs" elevated>
    <div
      class="row justify-between items-center desktop-only touch-hide border-b"
    >
      <logo-complet class="q-mx-lg q-px-xl q-my-sm" />
      <ul class="c-dropdown">
        <li
          v-for="(item, i) in list"
          :key="i"
          class="q-px-xl c-dropdown__item link-strategy"
          @mouseover="startMenu(i)"
          @mousedown="stopMenu('')"
        >
          <span class="c-dropdown__item-title">
            {{ item.name }}
          </span>
          <q-slide-transition>
            <ul
              class="c-dropdown__submenu row justify-center items-center"
              v-show="tab === 0"
            >
              <!-- 31rem  style="padding-left: 0.4rem"-->
              <li
                v-for="(productsLink, i) in listProducts"
                :key="i"
                class="c-dropdown__submenu-item col-12 items-center"
                style="padding-left: 29.4rem"
              >
                <div class="" v-if="productsLink.route">
                  <router-link
                    :to="productsLink.route"
                    class="c-dropdown__submenu-link"
                  >
                    {{ productsLink.content }}
                  </router-link>
                </div>
                <p v-else class="text-weight-bolder">
                  {{ productsLink.content }}
                </p>
              </li>
            </ul>
          </q-slide-transition>
          <q-slide-transition>
            <ul
              class="c-dropdown__submenu row justify-center items-center"
              v-show="tab === 1"
            >
              <li
                v-for="(list, i) in listWho"
                :key="i"
                class="c-dropdown__submenu-item col-12 items-center"
                style="padding-left: 39.4rem"
              >
                <div class="" v-if="list.route">
                  <router-link
                    :to="list.route"
                    class="c-dropdown__submenu-link"
                  >
                    {{ list.content }}
                  </router-link>
                </div>
                <p v-else class="text-weight-bolder">{{ list.content }}</p>
              </li>
            </ul>
          </q-slide-transition>
          <ul class="c-dropdown__submenu row justify-center" v-show="tab === 2">
            <li
              v-for="(strategyLink, i) in listStrategy"
              :key="i"
              class="c-dropdown__submenu-item col-12 items-center"
              style="padding-left: 51rem"
            >
              <div class="" v-if="strategyLink.route">
                <router-link
                  :to="strategyLink.route"
                  class="c-dropdown__submenu-link"
                >
                  {{ strategyLink.content }}
                </router-link>
              </div>
              <p v-else class="text-weight-bolder">
                {{ strategyLink.content }}
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <div class="col-2 q-mx-lg q-px-xl q-py-sm">
        <insert-person />
      </div>
      <!-- mobile -->
    </div>
    <div class="row justify-between q-mt-lg touch-only border-b">
      <LogoComplet col="col-4 q-ml-xl" />

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

      <q-list padding class="control-qList">
        <!-- <q-item-label header>Produtos</q-item-label> -->
        <q-item
          v-for="(productsLink, i) in listProducts"
          :key="productsLink"
          :to="productsLink.route"
          exact
          dense
          clickable
          manual-focus
        >
          <q-item-label header v-if="i > 0" class="text-white">{{
            productsLink.content
          }}</q-item-label>
          <q-item-section v-else>
            {{ productsLink.content }}
          </q-item-section>
        </q-item>
        <!-- <q-item-label header>Quem somos</q-item-label> -->
        <q-item
          v-for="(whoLink, i) in listWho"
          :key="whoLink"
          :to="whoLink.route"
          exact
          dense
          clickable
          manual-focus
        >
          <q-item-label header v-if="i > 0" class="text-white">{{
            whoLink.content
          }}</q-item-label>
          <q-item-section v-else>
            {{ whoLink.content }}
          </q-item-section>
        </q-item>
        <!-- <q-item-label header>Strategias</q-item-label> -->
        <q-item
          v-for="(strategyLink, i) in listStrategy"
          :key="strategyLink"
          :to="strategyLink.route"
          exact
          dense
          clickable
          manual-focus
        >
          <q-item-label header v-if="i > 0" class="text-white">{{
            strategyLink.content
          }}</q-item-label>
          <q-item-section v-else>
            {{ strategyLink.content }}
          </q-item-section>
        </q-item>
      </q-list>

      <div class="row justify-center">
        <div class="col-6">
          <insert-person />
        </div>
      </div>
    </q-drawer>
  </q-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useLayoutStore } from "../stores/layout";
import { storeToRefs } from "pinia";
import InsertPerson from "./InsertPerson.vue";
import LogoComplet from "./LogoComplet.vue";

export default defineComponent({
  name: "NavbarDrop",
  components: { InsertPerson, LogoComplet },
  setup() {
    const statusDrop = ref(false);
    const layout = useLayoutStore();
    const { menuHeader } = storeToRefs(layout);
    const tab = ref(menuHeader);
    const rightDrawerOpen = ref(false);
    const startMenu = (index) => {
      tab.value = index;
      statusDrop.value = true;
    };
    const stopMenu = (index) => {
      layout.removeMenu(index);
    };
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
    const listProducts = [
      {
        content: "Encontrar produtos",
        className: "text-weight-bold col-12 desc",
      },
      {
        content: "Expansão de patrimonio",
        className: "col-12 text-h6 link-strategy",
        route: "/rendavariavel",
      },
      {
        content: "Fundo de aposentadoria",
        className: "col-12 text-h6 link-strategy",
        route: "/rendafixa",
      },
      {
        content: "Fundo de liquidez elevada",
        className: "col-12 text-h6 link-strategy",
        route: "/rendaflexivel",
      },
    ];
    const listWho = [
      {
        content: "Sobre a Strategy Analytics",
        className: "text-weight-bold desc col-3",
      },
      {
        content: "Quem somos",
        className: "col-3 text-h6 link-strategy",
        route: "quemsomos",
      },
      {
        content: "Nossa equipe",
        className: "col-3 text-h6 link-strategy",
        route: "nossaequipe",
      },
      {
        content: "Gestão de investimento",
        className: "col-3 text-h6 link-strategy",
        route: "investimentos",
      },
    ];
    const listStrategy = [
      { content: "Estratégias", className: "text-weight-bold desc col-3" },
      {
        content: "Quadarivium",
        className: "col-3 text-h6 link-strategy",
        route: "quadrivium",
      },
      {
        content: "Login",
        className: "col-3 text-h6 link-strategy",
        route: "/login",
      },
      {
        content: "Simulado",
        className: "col-3 text-h6 link-strategy",
        route: "/simulator",
      },
    ];

    return {
      startMenu,
      stopMenu,
      statusDrop,
      list,
      listProducts,
      listWho,
      listStrategy,
      tab,
      classBg: useLayoutStore(),
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */

.border-b {
  z-index: 1;
  position: relative;
  border-bottom: solid 3px #4694d1;
}
.navbar-tabs-panels {
  /* border-bottom: 2px solid var(--BLUE, #0085ff); */
  background: linear-gradient(
    91deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  backdrop-filter: blur(7.5px);
}
.navbar-tabs {
  background: #ffffff26 !important;
}
.list-control {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.header-fundo {
  height: 35vh;
  position: fixed;
  top: 70px;
  right: 0;
  left: 0;
  background: #4694d1;
  /* transform-origin: top center;
  transform: translateX(-50%) rotateX(-90deg);
  transition: all 2s 550ms ease-in; */
}

.link-strategy::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  margin-top: 23px;
  /* scale: 0.9; */
  /* transition: height 3s cubic-bezier(1, 0.02, 1, 1.31); */
  transition-property: width, height;
  transition-duration: 555ms;
  background: #fff;
}
.link-strategy:hover::after {
  content: "";
  width: 60%;
  height: 3px;
  background: #fff;
  scale: 1;

  /* text-decoration: underline; */
  /* border-bottom: solid 3px #4694d1; */
}
</style>
