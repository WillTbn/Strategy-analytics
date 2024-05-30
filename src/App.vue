<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.name" />
    </transition>
    <footer class="fixed-bottom text-caption text-weight-thin text-grey-13">
      V{{ mode }}
    </footer>
  </router-view>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute;
    const mode = process.env.VERSION_APP;
    onBeforeMount(() => {
      console.log("Essa é a versão ->", process.env.VERSION_APP);
    });
    return {
      mode,
      route,
    };
  },
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 50ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
