<template>
  <div class="row text-center justify-center">
    <div class="col-12 text-h7 q-mt-lg">
      Em {{ year }} anos você teria um retorno de:
    </div>
    <div class="col-2" :class="{ 'polygon-trapezoid': percentage < 100 }">
      <transition name="slide">
        <span
          class="lato text-primary"
          :key="percentage"
          v-if="percentage >= 0"
        >
          {{ percentage }}%
        </span>
      </transition>
    </div>
    <div class="col-8">
      <span class="lato"> do valor investido.</span>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AnimateInterger",
  props: {
    year: { type: Number, required: true },
    percentage: { type: Number, default: 10 },
  },
});
</script>
<style scoped>
.controle {
  position: absolute;
  left: 10px;
}
.controle-2 {
  position: absolute;
  left: 50px;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(5px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(-20px);
  }
}
/* saida */
.slide-enter-active {
  position: absolute;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  animation: slide-in 500ms linear forwards;
}

.slide-leave-active {
  position: absolute;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  animation: slide-out 500ms linear forwards;
}
.polygon-trapezoid {
  clip-path: polygon(0 20%, 100% 20%, 100% 72%, 0 72%);
}
.slide-move {
  transition: transform 2s;
}
</style>
