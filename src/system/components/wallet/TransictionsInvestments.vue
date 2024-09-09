<template>
  <div class="transictionsInvestments">
    <current-balance
      name="Disponivel para investir"
      :current="current_investment"
      :loading="loading"
      subTitleClass="text-white"
      :containerClass="classBadge"
      :brCoin="true"
    >
      <!--
      @mouseover.prevent="handleMouseOver(1)"
        @mouseout.prevent="handleMouseOut"
      -->
      <span class="q-mr-sm icon-one cursor-pointer">
        <q-icon :color="iconColor" size="1.5rem" class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M15 24.25V6.75"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.251 17.9987L14.9998 24.25L8.74854 17.9987"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </q-icon>
      </span>
      <span class="cursor-pointer q-mx-sm icon-two">
        <q-icon :color="iconColor" class="" size="1.5rem">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M20.1289 13.9913L23.7502 10.3712L20.1289 6.75"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M6.25 10.375H23.75"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M9.87125 17.0088L6.25 20.6288L9.87125 24.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M23.75 20.625H6.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </q-icon>
      </span>
      <span class="cursor-pointer q-mx-sm icon-three">
        <q-icon :color="iconColor" class="" size="1.5rem">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.31021 4.92234C5.7241 4.92234 4.43063 6.20981 4.43063 7.80745V8.12838H25.5694V7.80745C25.5694 6.20981 24.2759 4.92234 22.6898 4.92234H7.31021ZM2.5 7.80745V9.08954V18.0641C2.5 20.715 4.64936 22.8716 7.31021 22.8716H12.4367C12.9699 22.8716 13.402 22.4413 13.402 21.9105C13.402 21.3796 12.9699 20.9492 12.4367 20.9492H7.31021C5.7241 20.9492 4.43063 19.6619 4.43063 18.0641V10.0507H25.5694V18.0641C25.5694 18.595 26.0015 19.0254 26.5346 19.0254C27.0679 19.0254 27.5 18.595 27.5 18.0641V9.08954V7.80745C27.5 5.1566 25.3506 3 22.6898 3H7.31021C4.64936 3 2.5 5.1566 2.5 7.80745ZM19.4665 27.7402C19.6391 27.9014 19.8713 28 20.1265 28C20.3946 28 20.6372 27.8911 20.8122 27.7154L24.6556 23.8706C25.0316 23.4944 25.0303 22.8857 24.6524 22.5114C24.2745 22.1369 23.6634 22.1383 23.2873 22.5145L21.0919 24.7108V18.0641C21.0919 17.5334 20.6596 17.103 20.1265 17.103C19.5934 17.103 19.1613 17.5334 19.1613 18.0641V24.7108L16.9658 22.5145C16.5898 22.1383 15.9785 22.1369 15.6006 22.5114C15.2228 22.8857 15.2214 23.4944 15.5975 23.8706L19.4424 27.7169C19.4503 27.7249 19.4583 27.7326 19.4665 27.7402Z"
              fill="currentColor"
            />
          </svg>
        </q-icon>
      </span>
    </current-balance>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
import CurrentBalance from "src/system/components/wallet/CurrentBalance.vue";
export default defineComponent({
  name: "TransictionsInvestments",
  components: { CurrentBalance },
  props: {
    loading: { type: Boolean, default: true },
    classBadge: { type: String },
    current_investment: { type: String },
    iconColor: { type: String },
  },
  setup(props) {
    const detailsSpan = ref({
      0: "Retirada",
      1: "Câmbio",
      2: "Depósita",
    });
    const active = ref(0);
    const detailColor = computed(() => {
      if (active.value == 0) {
        return props.iconColor;
      }
      return "ola";
    });
    // const { setLogout } = useAuth();
    const handleMouseOver = (number) => {
      active.value = number;
    };
    const handleMouseOut = () => {
      active.value = 0;
    };
    return {
      detailColor,
      detailsSpan,
      handleMouseOver,
      handleMouseOut,
    };
  },
});
</script>

<style lang="sass">
@mixin icon-span-before($name)
  content: $name
  position: absolute
  opacity: 0
  top: 0em
  left: -20px
  transition: 1s
  color: $primary
@mixin icon-span-hover
  padding-left: 64px
  padding-right:8px
  color: $primary !important
@mixin icon-span-hover-before
  opacity: 1
  left:7px
// icones a serem alterados
.icon-one
  position: relative
.icon-one:before
  @include icon-span-before('Retirada')
.icon-one:hover
  @include icon-span-hover
.icon-one:hover:before
  @include icon-span-hover-before
span.icon-one:hover svg path
  stroke: $primary

.icon-two
  position: relative
.icon-two:before
  @include icon-span-before('Câmbio')
.icon-two:hover
  @include icon-span-hover
.icon-two:hover:before
  @include icon-span-hover-before
span.icon-two:hover svg path
  stroke: $primary

.icon-three
  position: relative
.icon-three:before
  content: 'Depósito'
  position: absolute
  opacity: 0
  top: 0em
  right: -20px
  transition: 1s
  color: $primary
.icon-three:hover
  padding-right: 74px
  padding-left:8px
  color: $primary !important
.icon-three:hover:before
  opacity: 1
  right:7px
span.icon-three:hover svg path
  stroke: $primary
</style>
<style lang=""></style>
