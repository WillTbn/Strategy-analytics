<template>
  <div class="DashsetupLayout tool q-pa-lg">
    <navbar-setting />
    <theme-setting />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
// import TextinterNormal from "../components/TextinterNormal.vue";
// import { Dark } from "quasar";
import NavbarSetting from "src/system/components/setting/NavbarSetting.vue";
import ThemeSetting from "src/system/components/setting/ThemeSetting.vue";

export default defineComponent({
  name: "DashsetupLayout",
  components: { NavbarSetting, ThemeSetting },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style lang="sass" scoped>
.DashsetupLayout
  min-height: 90%
</style>
