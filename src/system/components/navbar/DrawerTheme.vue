<template lang="">
  <q-drawer
    v-model="drawerTheme"
    :width="200"
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

    return { drawerTheme };
  },
});
</script>
<style lang=""></style>
