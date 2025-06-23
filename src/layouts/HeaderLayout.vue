<template>
  <div
    class="row text-white justify-center items-center content-center text-center border-header padding-i-mobile padding-t-mobile"
    data-home="header"
    :class="{ reverse: reverse }"
  >
    <slot />

    <div
      class="col-sm-12 col-md-6 q-mt-xl q-px-xl padding-t-mobile"
      :class="{ 'control-height ': !image }"
    >
      <q-img :src="image" :ratio="4 / 3" fit="scale-down" />
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
    image: { type: String },
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
<style scoped lang="sass">
.control-pa
  padding: 5px !important
  min-height: 2rem
  margin-top: 1.5rem

.control-pa,
span
  transition: all 10s linear

.col-center
  align-items: center
  justify-content: center
  display: flex

.col-card
  justify-content: center
  display: flex
  min-height: 250px
  background: transparent

.q-card
  transition: all 8s ease

.text-h8
  font-size: 2.125rem
  font-weight: 400
  /* line-height: 2.5rem */
  letter-spacing: 0.00735em

.t-height
  height: 14rem !important

.control-height
  min-height: 35rem

body:not(.desktop)
  .margin-mobile-right
    padding-right: 2rem

  .margin-mobile-left
    padding-left: 2rem


body:is(.platform-android)
  .margin-top-android
    padding-top: 13rem !important


@media (max-width: 768px)
  .control-height
    min-height: auto

  .padding-t-mobile
    padding-top: 3rem
</style>
