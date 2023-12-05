<template>
  <q-header class="navbar-tabs" elevated>
    <q-tabs
      v-model="tab"
      dense
      class="text-white justify-between items-center q-ma-sm q-px-xl desktop-only touch-hide"
      indicator-color="dark"
      align="justify"
    >
      <div class="col-12 col-md-8">
        <div class="list-control">
          <logo-complet class="q-mx-lg" />
          <!-- narrow-indicator -->
          <q-tab name="mails" label="Mails" class="" />
          <q-tab name="alarms" label="Alarms" class="" />
          <q-tab name="movies" label="Movies" class="" />
        </div>
      </div>
      <div class="col-2">
        <insert-person />
      </div>
    </q-tabs>

    <q-separator color="blue" size="3px" />

    <q-tab-panels class="navbar-tabs" v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-header>
</template>

<script>
import { ref, defineComponent } from "vue";
import LogoComplet from "./LogoComplet.vue";
import InsertPerson from "./InsertPerson.vue";

export default defineComponent({
  name: "NavbarTabs",
  components: { LogoComplet, InsertPerson },
  setup() {
    return {
      tab: ref(""),
    };
  },
});
</script>
<style>
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
