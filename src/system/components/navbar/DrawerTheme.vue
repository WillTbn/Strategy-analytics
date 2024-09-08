<template lang="">
  <q-drawer
    v-model="drawerTheme"
    :width="300"
    :breakpoint="500"
    overlay
    bordered
    side="right"
  >
    <q-scroll-area class="fit">
      <div class="column q-gutter-sm text-center justify-center align-center">
        <theme-options toggleClass="col self-center" />
      </div>
    </q-scroll-area>
    <div class="absolute" style="top: 15px; left: 20px">
      <q-icon
        class="cursor-pointer"
        name="closed"
        size="1.4rem"
        @click="closeDrawer(false)"
      />
      <!-- <q-btn flat round icon="closed" @click="closeDrawer(false)" /> -->
    </div>
  </q-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useStoreLayout } from "src/stores/layoutStore";
import { storeToRefs } from "pinia";
import ThemeOptions from "../setting/ThemeOptions.vue";

export default defineComponent({
  components: { ThemeOptions },
  setup() {
    // const drawer = ref(true);
    const storeLayout = useStoreLayout();
    const { drawerTheme } = storeToRefs(storeLayout);

    return { drawerTheme, closeDrawer: storeLayout.setDrawerTheme };
  },
});
</script>
<style lang=""></style>
