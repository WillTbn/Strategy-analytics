<template>
  <div class="NavbarLayout">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :width="200"
      :mini-width="80"
      elevated
      class="control-drawer"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-system'"
      mini-to-overlay
    >
      <div class="bg-transparent q-mt-lg row justify-center text-center">
        <div class="col-12">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
        <div class="col-12">
          <div class="q-mx-sm q-px-sm">
            <q-item
              clickable
              v-ripple
              exact
              :to="{ name: 'config' }"
              :active-class="dark ? 'bg-dark rounded' : 'bg-secondary rounded'"
            >
              <q-item-section avatar>
                <q-icon name="img:icons/iconeconfiguraes.svg" />
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>

      <q-list class="q-mt-xl q-pt-xl q-mx-sm q-px-sm">
        <q-item
          v-for="list in listMenu"
          :key="list"
          :active-class="dark ? 'bg-dark rounded' : 'bg-primary rounded'"
          clickable
          exact
          v-ripple
          :to="list.toName"
        >
          <q-item-section avatar>
            <q-icon :name="list.svgIcon" />
          </q-item-section>

          <q-item-section> {{ list.name }} </q-item-section>
        </q-item>
      </q-list>
      <div
        class="bg-transparent q-mt-xl q-pt-xl row justify-center text-center"
      >
        <div class="col-12">
          <q-avatar size="36px" class="q-mb-sm">
            <img src="icons/logo.svg" />
          </q-avatar>
        </div>
      </div>
    </q-drawer>
    <div class="position-absolute" :class="{ 'move-position ': !miniState }">
      <q-avatar
        color="transparent"
        class="avatar-icon"
        @click="miniState = !miniState"
      >
        <q-icon
          name="img:icons/vector.svg"
          :class="{ 'icon-select ': !miniState }"
        />
      </q-avatar>
    </div>
    <!-- <div
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
    </q-page-sticky> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: { dark: { type: Boolean, default: true } },
  name: "NavbarLayout",
  setup() {
    const leftDrawerOpen = ref(true);
    const drawer = ref(true);
    const miniState = ref(true);
    const listMenu = [
      {
        toName: { name: "dashboard" },
        name: "Inicio",
        svgIcon: "img:icons/icon-home-icon.svg",
      },
      {
        toName: { name: "perfomance" },
        name: "Perfomance",
        svgIcon: "img:icons/icon-performance.svg",
      },
      {
        toName: { name: "calendar" },
        name: "Calendário",
        svgIcon: "img:icons/icon-calendar.svg",
      },
      {
        toName: { name: "report" },
        name: "Relatório",
        svgIcon: "img:icons/icon-alternate-file.svg",
      },
      {
        toName: { name: "loan" },
        name: "Emprestimo",
        svgIcon: "img:icons/icon-money-withdrawal.svg",
      },
    ];

    return {
      miniState,
      drawer,
      leftDrawerOpen,
      listMenu,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      activeMenu() {
        console.log("CLIQUEI LLLLLLLLL -> ");
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.position-absolute::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  height: 40px;
  width: 40px;
  transform: translate(-10px);
  z-index: 0;
  box-shadow: 5px 3px 10px 2px #999;
}
.position-absolute:not(body.mobile) {
  cursor: pointer;
  position: absolute;
  top: -30px;
  left: 40px;
  bottom: 0;
  /* background: #fff; */
  width: 50px;
  z-index: 3000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: translateX(40%);
  /* background-image: url("Union.png"); */
  background-repeat: no-repeat;
  transition: all ease 0.25s;
  background-position-x: right;
  background-position-y: center;
  background-size: 700%;
}
.bg-personal {
  background: linear-gradient(#00000033, #0038584d, #0077ba6b, #00a3ff80);
}
.move-position {
  transform: translateX(278%);
}
.icon-select {
  transform: rotate(180deg);
}
.q-drawer {
  top: 20px !important;
  bottom: 20px !important;
  position: absolute;
  background: red;
  z-index: 1000;
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
.control-drawer {
  top: 20px !important;
  bottom: 20px !important;
}
.rounded {
  border-radius: 13px;
}
</style>
