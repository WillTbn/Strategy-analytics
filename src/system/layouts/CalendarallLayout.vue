<template>
  <div class="CalendarallLayout">
    <div class="row justify-center">
      <div class="col-10">
        <FullCalendar :options="calendarOptions" />
        <!-- <VCalendar :columns="columns" :row="row" /> -->
      </div>
      <div class="col-12 q-mt-lg">
        <q-btn
          outline
          no-caps
          rounded
          color="primary"
          label="voltar"
          @click.prevent="goStep('home')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useScreens } from "vue-screen-utils";
import { useLayoutStore } from "../../stores/layout";
// FULL CALENDAR
import FullCalendar from "@fullcalendar/vue3";
import multiMonthPlugin from "@fullcalendar/multimonth";
// import interactionPlugin from "@fullcalendar/interaction";

export default defineComponent({
  name: "CalendarallLayout",
  components: { FullCalendar },
  setup() {
    const storeLayout = useLayoutStore();

    const { mapCurrent } = useScreens({
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    });
    const columns = mapCurrent({ md: 6 }, 6);
    const row = mapCurrent({ md: 12 }, 6);
    const expanded = mapCurrent({ md: false }, true);
    const goStep = (value) => {
      storeLayout.updateCalendarsteps(value);
    };

    return {
      columns,
      row,
      expanded,
      goStep,
      calendarOptions: {
        plugins: [multiMonthPlugin],
        initialView: "multiMonthYear",
        locales: "pt-br",
      },
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
