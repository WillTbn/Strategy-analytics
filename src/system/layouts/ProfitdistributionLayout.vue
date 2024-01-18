<template>
  <div class="ProfitdistributionLayout row justify-center text-center">
    <div class="col-12">
      <textinter-normal text="Próxima distribuição de lucros" />
      <q-separator inset></q-separator>
    </div>
    <div class="col-12">
      <!-- readonly -->
      <q-date
        class="control-calendar bg-transparent"
        today-btn
        flat
        no-unset
        minimal
        v-model="date"
        :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'orange')"
        :locale="brLocale"
      />
    </div>
  </div>
</template>

<script>
import useConfigdate from "../../composables/useConfigdate";
import { defineComponent, ref } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";

export default defineComponent({
  name: "ProfitdistributionLayout",
  components: { TextinterNormal },
  setup() {
    const { brLocale } = useConfigdate();
    return {
      brLocale,
      date: ref("2024/01/23"),
      events: [
        "2019/02/01",
        "2019/02/05",
        "2019/02/06",
        "2019/02/09",
        "2019/02/23",
      ],
      eventsFn(date) {
        if (
          date === "2019/02/01" ||
          date === "2019/02/05" ||
          date === "2019/02/06" ||
          date === "2019/02/09" ||
          date === "2019/02/23"
        ) {
          return true;
        }
        return false;
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.q-date {
  width: auto !important;
}
</style>
