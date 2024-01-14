<template>
  <q-form>
    <q-select v-model="country" label="País" :options="optionsCountry" />
    <q-select v-model="state" label="Estado" :options="optionsState" />
  </q-form>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "TesteQinput",
  setup() {
    const country = ref("");
    const state = ref("");
    const optionsCountry = [
      { label: "Brasil", value: "brasil" },
      { label: "Argentina", value: "argentina" },
      { label: "USA", value: "usa" },
      { label: "Austrália", value: "australia" },
      { label: "Portugal", value: "portugal" },
    ];

    const optionsState = ref([]);

    watch(country, (val) => {
      if (val) {
        optionsState.value = [
          { label: "São Paulo", value: "sp" },
          { label: "Rio de Janeiro", value: "rj" },
          { label: "Minas Gerais", value: "mg" },
          { label: "Bahia", value: "ba" },
        ];
      } else {
        optionsState.value = [];
      }
    });

    return {
      country,
      state,
      optionsCountry,
      optionsState,
    };
  },
});
</script>
