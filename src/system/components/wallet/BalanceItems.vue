<template>
  <div class="banlanceItems col-12 col-md q-mb-md-lg q-mb-xs-md">
    <div
      class="card-balance column"
      :class="[{ ' tool': !objText }, bgBadgeBank]"
    >
      <div class="q-mb-lg col">
        <q-avatar class="q-mr-lg" v-if="!objText">
          <q-icon :name="icon" class="q-pa-sm" size="1.5rem" />
        </q-avatar>
        <q-icon :class="colorItem" v-else class="q-mr-lg" size="1.5rem">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5 10H3.5V6.994L12.652 3L21.5 6.861V10Z"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M15.1431 10V18"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M19.5 18V10"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_4"
              d="M15.1431 10V18"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_5"
              d="M19.5 18V10"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_6"
              d="M5.5 10V18"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_7"
              d="M9.85693 18V10"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_8"
              d="M5.5 10V18"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_9"
              d="M9.85693 18V10"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_10"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.5 21H21.5V20L20.5 18H4.5L3.5 20V21Z"
              stroke="currentColor"
              stroke-opacity="0.8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </q-icon>
        <span class="text-roboto-15-500 text-weight-bolder">{{ title }}</span>
        <q-icon
          :class="colorItem"
          v-if="objText"
          class="float-right cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.5 16.6153C5.29373 16.6153 1.88462 13.2063 1.88462 9C1.88462 4.79373 5.29373 1.38462 9.5 1.38462C13.7063 1.38462 17.1153 4.79373 17.1153 9C17.1153 13.2063 13.7063 16.6153 9.5 16.6153ZM9.5 0C4.52903 0 0.5 4.02903 0.5 9C0.5 13.971 4.52903 18 9.5 18C14.471 18 18.5 13.971 18.5 9C18.5 4.02903 14.471 0 9.5 0ZM9.5 13.8462C9.88235 13.8462 10.1923 13.5362 10.1923 13.1538V8.53846C10.1923 8.15611 9.88235 7.84616 9.5 7.84616C9.11765 7.84616 8.80769 8.15611 8.80769 8.53846V13.1538C8.80769 13.5362 9.11765 13.8462 9.5 13.8462ZM9.49907 6C8.99114 6 8.57458 5.58787 8.57693 5.07441C8.57828 4.56583 8.99109 4.15384 9.5 4.15384C10.0097 4.15384 10.4231 4.56718 10.4231 5.07693C10.4231 5.58846 10.0079 6 9.49907 6Z"
              fill="#4300D0"
              fill-opacity="0.8"
            />
          </svg>
        </q-icon>
        <q-icon />
      </div>
      <div class="q-mb-lg col" v-if="!objText">
        <span class="text-roboto-15-500 text-secondary q-px-sm"
          >Saldo total</span
        >
        <p class="text-weight-bolder text-roboto-24-500 q-px-sm">
          {{ $filters.currentValue(balance, brCoin) }}
        </p>
      </div>
      <p v-if="!objText" class="text-roboto-15-500">Mais Informações</p>
      <div class="q-mb-md col" v-if="objText">
        <p class="text-weight-bolder text-h5 q-pr-xl">
          {{ objText.title }}
        </p>
      </div>
      <div class="col">
        <!-- class="btn-bank" -->
        <q-btn
          no-caps
          rounded
          v-if="objText"
          :label="objText.btn"
          :class="btnBgColor"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "balanceItems",
  props: {
    title: { type: String },
    icon: { type: String },
    balance: { type: String, default: "0,00" },
    country: { type: Boolean, default: false },
    cipher: { type: String, default: "R$" },
    brCoin: { type: Boolean, default: true },
    objText: { type: [Object, Boolean], default: false },
    colorItem: { type: String },
    btnBgColor: { type: String, default: "btn-bank" },
    bgBadgeBank: { type: String, default: "badge-bank" },
  },
  setup() {
    return {};
  },
});
</script>
<style>
.card-balance {
  padding: 1.3rem;
  border-radius: 24px !important;
  /* margin-right: 12px; */
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  min-height: 245.49px;
}
</style>
