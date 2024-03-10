<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.name" />
    </transition>
  </router-view>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import useLogin from "./composables/useLogin";
export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute;
    const { verifyLogged } = useLogin();
    onMounted(() => {
      verifyLogged();
    });

    return {
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
