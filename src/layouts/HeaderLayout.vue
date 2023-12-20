<template>
  <div
    class="row text-white justify-center items-center content-center text-center border-header padding-i-mobile"
    :class="{ reverse: reverse }"
  >
    <!-- <div class="col-md-5 col-sm-4 q-ml-lg text-left">
      <title-subtitle
        textTop="perspectivas para 2° metade do ano de 2023"
        textTitle="Novo regime, novas oportunidades"
        textDescription="28 de Junho de 2023 | O novo e mais volátil regime econômico, oferece oportunidades de investimento diferentes, e ao mesmo tempo abrangentes. A persistência das restrições de produção está obrigando os principais bancos centrais a manter taxas de juros elevadas.
        Identificamos oportunidades nas classes de ativos e aproveitarmos as megaforças."
      /> -->
    <slot />
    <!-- </div> -->
    <div class="col-sm-12 col-md-6 q-mt-xl q-px-xl">
      <!-- <div
        :class="{ 'q-mt-xl q-pt-xl': heightScreen }"
        style="max-width: 653px"
        > -->
      <!-- srcset="img/image 1.png" -->
      <q-img src="img/image 1.png" :ratio="4 / 3" fit="scale-down" />
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";

// import ButtonHeader from "../components/ButtonHeader.vue";TitleSubtitle

export default defineComponent({
  name: "HeaderLayout",
  components: {},
  props: {
    reverse: {
      type: Boolean,
    },
  },
  setup() {
    const statusMember = ref(false);
    const statusInves = ref(false);
    const durationTransition = ref(300);

    const activeMenber = (el) => {
      const colorButton = document.getElementById("colorButton");
      statusMember.value = !statusMember.value;
      if (statusMember.value) {
        el.target.classList.add("in-front");
        el.target.classList.remove("in-remove-front");
      } else {
        el.target.classList.remove("in-front");
        el.target.classList.add("in-remove-front");
      }
    };

    return {
      durationTransition,
      activeMenber,
      statusMember,
      statusInves,
    };
  },
});
</script>
<style scoped>
.control-pa {
  padding: 5px !important;
  min-height: 2rem;
  margin-top: 1.5rem;
}
.control-pa,
span {
  transition: all 10s linear;
}
.col-center {
  align-items: center;
  justify-content: center;
  display: flex;
}
.col-card {
  justify-content: center;
  display: flex;
  min-height: 250px;
  background: transparent;
}
.q-card {
  transition: all 8s ease;
}
.text-h8 {
  font-size: 2.125rem;
  font-weight: 400;
  /* line-height: 2.5rem; */
  letter-spacing: 0.00735em;
}
.t-height {
  height: 14rem !important;
}
body:not(.desktop) {
  .margin-mobile-right {
    padding-right: 2rem;
  }
  .margin-mobile-left {
    padding-left: 2rem;
  }
}
body:is(.platform-android) {
  .margin-top-android {
    padding-top: 13rem !important;
  }
}
</style>
