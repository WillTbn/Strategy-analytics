<template>
  <div class="">
    <span>
      <slot />
    </span>
    <div class="items-center text-left row">
      <div :class="col" class="q-mr-lg lato">{{ number }} {{ sub }}</div>
      <div class="col-4 q-gutter-sm">
        <q-avatar
          @click.prevent="decreaseNumber"
          color="white"
          size="sm"
          text-color="primary"
          icon="fa-solid fa-minus"
          style="cursor: pointer"
        />
        <q-avatar
          @click.prevent="increaseNumber"
          color="white"
          size="sm"
          text-color="primary"
          icon="fa-solid fa-plus"
          style="cursor: pointer"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const emitEvento = defineEmits(["increase-data", "decrease-data"]);
// export default defineComponent({

const props = defineProps({
  number: { type: Number, required: true },
  sub: { type: String },
  col: { type: String, default: "col-4" },
  // emphasis:{type:String},
  // label: {type:String, required:true}
});
// setup() {
const increaseNumber = () => {
  emitEvento("increase-data", 1);
};
const decreaseNumber = () => {
  emitEvento("decrease-data", 1);
};

// },
//
</script>
