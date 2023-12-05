<template>
  <div class="row text-center justify-center">
    <div class="col-12 text-h7 q-mt-lg">
      Em {{ year }} anos você teria um retorno de:
    </div>
    <div class="col-3">
      <transition name="slide">
        <!-- <span style="position: absolute"> -->
        <span class="lato text-primary" v-if="percentage > 0" :key="percentage">
          {{ percentage }}%
        </span>
        <!-- </span> -->
      </transition>
    </div>
    <div class="col-7">
      <span class="lato"> do valor investido.</span>
    </div>
  </div>

  <!-- <div class="q-mt-lg relative-position">
    <span class="text-h7">Em {{ year }} anos você teria um retorno de:</span>
    <br />
    <transition name="slide" mode="out-in">

      <span class="lato controle" v-if="percentage > 0" :key="percentage">
        {{ percentage }}%
      </span>

    </transition>
    <span class="lato controle-2"> do valor investido.</span>
  </div> -->
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvestimentDescription",
  props: {
    year: { type: Number, required: true },
    percentage: { type: Number, default: 1 },
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
    /* margin-top: -20px; */
    /* position: absolute; */
    transform: translateY(-20px);
  }
  to {
    /* margin-top: 20px; */
    /* position: absolute; */
    transform: translateY(0);
    /* transform: ; */
  }
}
@keyframes slide-out {
  from {
    /* margin-top: 40px; */
    /* position: absolute; */
    /* /* transform: scaleX(); */
    transform: translateY(0);
  }
  to {
    /* margin-top: -40px; */
    /* position: absolute; */
    transform: translateY(20px);
  }
}

.slide-enter-active {
  /* position: relative; */
  animation: slide-in 3s cubic-bezier(1, 3, 4, 6);
  animation-direction: reverse;

  /* color: blue !important; */
}
.slide-leave-active {
  /* position: relative; */
  /* color: blue !important; */
  animation: slide-out 3s cubic-bezier(1, 3, 4, 6);
  animation-direction: reverse;
}
</style>
