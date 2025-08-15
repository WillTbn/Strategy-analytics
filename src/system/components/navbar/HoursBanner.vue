<template>
  <q-banner
    class="text-white q-py-md-md styleTool"
    dense
    style="text-wrap-mode: nowrap"
  >
    <span class="text-inter-20-400">
      {{ getNameDay }}
      <span style="color: gray">|</span>
      {{ getHours }} : {{ getMinutes }}
    </span>
  </q-banner>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "HoursBanner",
  setup() {
    const time = ref(new Date());
    setInterval(() => {
      time.value = new Date();
    }, 10000);
    let days = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
    const getNameDay = computed(() => {
      return days[time.value.getDay() - 1];
    });
    const getMinutes = computed(() => {
      return time.value.getMinutes().toString().padStart(2, "0");
    });
    const getHours = computed(() => {
      return time.value.getHours().toString().padStart(2, "0");
    });
    return { getMinutes, getHours, getNameDay };
  },
});
</script>
