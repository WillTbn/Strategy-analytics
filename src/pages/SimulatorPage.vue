<template>
  <q-page class="justify-center text-white row control-bg items-center">
    <simulator-layout />
  </q-page>
</template>
<script>
import SimulatorLayout from "../layouts/SimulatorLayout.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    SimulatorLayout,
  },
  setup() {},
});
</script>
<style>
.control-bg {
  /* background: radial-gradient(circle at 0%, #4694d1, #1a1e2d 35%, red 85%); */
  overflow-y: hidden !important;
  height: 100%;
  margin-top: -7.5em;
  bottom: 0;
  padding-top: 7.5em;
}
.input-simulator {
  max-width: 400px;
}

@keyframes slide-in {
  from {
    transform: translateX(1240px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(240px);
  }
}
.slide-enter-active {
  animation: slide-in 4s ease;
}
.slide-leave-active {
  position: absolute;
  animation: slide-out 4s ease;
}
.control-trans {
  transition: all 4s ease;
}
.slide-move {
  transition: transform 3s;
}
</style>
