<template>
  <div class="NavbarLayout">
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :mini-width="80"
      elevated
      class="control-drawer"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white'"
    >
      <div class="bg-transparent q-mt-lg row justify-center text-center">
        <div class="col-12">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </div>
        <div class="col-12">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:icons/iconeconfiguraes.svg" />
            </q-item-section>

            <q-item-section> configuração </q-item-section>
          </q-item>
        </div>
      </div>

      <q-list class="q-mt-xl q-pt-xl q-mx-sm q-px-sm">
        <q-item
          active-class="bg-primary rounded"
          clickable
          exact
          v-ripple
          :to="{ name: 'dashboard' }"
        >
          <q-item-section avatar>
            <q-icon name="img:icons/icon-home-icon.svg" />
          </q-item-section>

          <q-item-section> Inicio </q-item-section>
        </q-item>

        <q-item
          clickable
          active-class="bg-primary rounded"
          v-ripple
          exact
          :to="{ name: 'calendar' }"
        >
          <q-item-section avatar>
            <q-icon name="img:icons/icon-performance.svg" />
          </q-item-section>

          <q-item-section> Performance </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="img:icons/icon-calendar.svg" />
          </q-item-section>

          <q-item-section> Calendário </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="img:icons/icon-alternate-file.svg" />
          </q-item-section>

          <q-item-section> Relatório </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="img:icons/icon-money-withdrawal.svg" />
          </q-item-section>

          <q-item-section> Emprestimos </q-item-section>
        </q-item>
      </q-list>
      <div
        class="bg-transparent q-mt-xl q-pt-xl row justify-center text-center"
      >
        <div class="col-12">
          <!-- <q-item>
            <q-item-section avatar class="q-mb-sm">
              <q-icon name="img:icons/logo.svg" />
            </q-item-section>
          </q-item> -->
          <q-avatar size="36px" class="q-mb-sm">
            <img src="icons/logo.svg" />
          </q-avatar>
        </div>
      </div>
    </q-drawer>

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
  name: "NavbarLayout",
  setup() {
    const leftDrawerOpen = ref(true);
    const drawer = ref(true);
    const miniState = ref(true);

    return {
      miniState,
      drawer,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
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
