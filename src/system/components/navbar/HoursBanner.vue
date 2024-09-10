<template>
  <q-banner class="tool text-white q-ml-sm" dense>
    <span class="text-h5"> {{ getHours }}:{{ getMinutes }}</span>
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
    const getMinutes = computed(() => {
      return time.value.getMinutes().toString().padStart(2, "0");
    });
    const getHours = computed(() => {
      return time.value.getHours().toString().padStart(2, "0");
    });
    return { getMinutes, getHours };
  },
});
</script>
<style lang="sass"></style>
