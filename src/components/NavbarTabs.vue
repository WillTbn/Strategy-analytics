<template>
  <q-header class="navbar-tabs" elevated>
    <q-tabs
      v-model="tab"
      dense
      class="text-white justify-between items-center desktop-only touch-hide border-b"
      align="justify"
      narrow-indicator
    >
      <!-- indicator-color="white" -->
      <!-- narrow-indicator -->
      <div class="col-12 col-md-8">
        <div class="list-control">
          <logo-complet class="q-mx-lg q-px-xl q-my-sm" />
          <q-tab
            name="produtos"
            label="Produtos"
            content-class="text-weight-bolder"
            no-caps
          />
          <q-tab
            name="alarms"
            label="Quem somos"
            content-class="text-weight-bolder"
            no-caps
          />
          <q-tab
            name="movies"
            label="Estratégias"
            content-class="text-weight-bolder"
            no-caps
            :ripple="false"
          />
        </div>
      </div>
      <div class="col-2 q-mx-lg q-px-xl q-py-sm">
        <insert-person />
      </div>
    </q-tabs>
    <!-- <q-separator color="transparent" size="3px" /> -->

    <q-tab-panels
      class="navbar-tabs-panels"
      v-model="tab"
      animated
      draggable="false"
      transition-prev="slide-down"
      transition-next="slide-up"
      transition-duration="500"
    >
      <!-- <div class="indicator">testesteste</div> -->
      <q-tab-panel name="produtos">
        <q-item
          v-for="productsLink in listProducts"
          :key="productsLink"
          :to="productsLink.route"
          exact
          dense
          clickable
          manual-focus
          class="row product"
        >
          <q-item-section
            class="text-white"
            lines="2"
            avatar
            :class="productsLink.className"
          >
            {{ productsLink.content }}
          </q-item-section>
        </q-item>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <q-item
          v-for="whoLink in listWho"
          :key="whoLink"
          :to="whoLink.route"
          exact
          dense
          clickable
          manual-focus
          class="row justify-center"
        >
          <q-item-section
            class="text-white"
            lines="2"
            avatar
            :class="whoLink.className"
          >
            {{ whoLink.content }}
          </q-item-section>
        </q-item>
      </q-tab-panel>

      <q-tab-panel name="movies">
        <q-item
          v-for="strategyLink in listStrategy"
          :key="strategyLink"
          :to="strategyLink.route"
          exact
          dense
          clickable
          manual-focus
          class="row justify-center strategy"
        >
          <q-item-section
            class="text-white"
            lines="2"
            avatar
            :class="strategyLink.className"
          >
            {{ strategyLink.content }}
          </q-item-section>
        </q-item>
      </q-tab-panel>
    </q-tab-panels>

    <!-- mobile -->
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
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import LogoComplet from "./LogoComplet.vue";
import InsertPerson from "./InsertPerson.vue";
import { useLayoutStore } from "../stores/layout";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "NavbarTabs",
  components: { LogoComplet, InsertPerson },
  setup() {
    const layout = useLayoutStore();
    const { menuHeader } = storeToRefs(layout);
    const rightDrawerOpen = ref(false);
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
        content: "Quadrivium",
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
      listProducts,
      listWho,
      listStrategy,
      menuHeader,
      tab: ref(menuHeader),
    };
  },
});
</script>
<style>
.product {
  padding-left: 20rem;
}
.strategy {
  padding-left: 25rem;
}

.link-strategy::after {
  content: "";
  width: 0rem;
  height: 0px;
  transition-property: width, height;
  transition-duration: 1s;
  background: #fff;
}
.link-strategy:hover::after {
  content: "";
  width: 12rem;
  height: 2px;
  background: #fff;
  scale: 1;
}
.indicator {
  position: fixed;
  width: 20px;
  height: 100px;
  background: linear-gradient(
    91deg,
    rgba(0, 11, 49, 0.8) 0%,
    rgba(0, 11, 49, 0.6) 100%
  );
  backdrop-filter: blur(7.5px);
}
.border-b {
  z-index: 1;
  position: relative;
  border-bottom: solid 3px #4694d1;
}
.navbar-tabs-panels {
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
</style>
