<template>
  <q-banner class="tool text-white q-ml-sm" dense>
    <span class="text-h5"
      >{{ getNameDay }} {{ getHours }}:{{ getMinutes }}</span
    >
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
<style lang="sass"></style>
