<template>
  <div class="ItensPassword justify-center text-white row">
    <div class="col-md-12 col-sm-6">
      <span class="text-subtitle2 text-weight-bold">
        <q-icon :name="iconStatus" :color="iconColor" />
        {{ text }}
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "ItensPassword",
  props: {
    text: { type: String },
    icon: { type: String },
    status: { type: Boolean },
  },
  setup(props) {
    const iconStatus = computed(() =>
      props.status ? "fa-solid fa-check" : "fa-solid fa-xmark"
    );
    const iconColor = computed(() => (props.status ? "green-14" : "red-14"));
    return { iconStatus, iconColor };
  },
});
</script>
