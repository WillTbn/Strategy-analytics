<template>
  <div class="CalendarallLayout">
    <div class="row justify-center">
      <div class="col-10">
        <FullCalendar :options="calendarOptions" />
        <!-- <VCalendar :columns="columns" :row="row" /> -->
      </div>
      <q-dialog v-model="description.status">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ description.date }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ description.title }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
import { defineComponent, ref } from "vue";
import { useScreens } from "vue-screen-utils";
import { useLayoutStore } from "../../stores/layout";
// FULL CALENDAR
import FullCalendar from "@fullcalendar/vue3";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";
import calendar from "src/boot/calendar";

export default defineComponent({
  name: "CalendarallLayout",
  components: { FullCalendar },
  setup() {
    const storeLayout = useLayoutStore();
    const description = ref({
      status: false,
      title: null,
      date: null,
    });

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
    const formtBr = (dateUSA) => {
      // const dateNow = new Date(dateUSA);

      return dateUSA.split("-").reverse().join("/");
    };
    const handleDateClick = (arg) => {
      const verifyEvent = calendarOptions.events.filter((d) => {
        return d.date == arg.dateStr;
      });
      if (verifyEvent.length > 0) {
        description.value = {
          status: true,
          title: verifyEvent[0].title,
          date: formtBr(verifyEvent[0].date),
        };
      }
    };
    // const eventsData = ref([

    // ])
    const verifySundayOrSaturday = (day) => {
      // console.log("-> day", day);
      const dateNow = new Date(day + " 22:00:00");
      // console.log("-> dateNow", dateNow);
      let dateRetorn;
      if (dateNow.getDay() == 0) {
        let addDate = dateNow.getDay() + 1;
        let dateFormat = new Date(
          dateNow.getFullYear() + "-" + dateNow.getMonth() + "-" + addDate
        );
        dateRetorn = dateFormat;
      } else if (dateNow.getDay() == 6) {
        let addDate = dateNow.getDay() + 2;
        let dateFormat = new Date(
          dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + addDate
        );
        dateRetorn = dateFormat;
      } else {
        dateRetorn = dateNow;
      }
      // console.log("data sem tolocadateString", dateRetorn);
      console.log(
        "data com tolocadateString",
        dateRetorn.toLocaleDateString("pt-BR")
      );
      return dateRetorn.toLocaleDateString();
    };
    const calendarOptions = {
      plugins: [multiMonthPlugin, interactionPlugin],
      initialView: "multiMonthYear",
      locales: "pt-br",
      dateClick: handleDateClick,
      events: [
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-03-23"),
          date: "2024-03-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-04-23"),
          date: "2024-04-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-05-23"),
          date: "2024-05-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-06-23"),
          date: "2024-06-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-07-23"),
          date: "2024-07-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-08-23"),
          date: "2024-08-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-09-23"),
          date: "2024-09-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-10-23"),
          date: "2024-10-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-11-23"),
          date: "2024-11-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2024-12-23"),
          date: "2024-12-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-01-23"),
          date: "2025-01-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-02-23"),
          date: "2025-02-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-03-23"),
          date: "2025-03-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-04-23"),
          date: "2025-04-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-05-23"),
          date: "2025-05-23",
        },
        {
          title: "distrubuição de lucros",
          // date: verifySundayOrSaturday("2025-06-23"),
          date: "2025-06-23",
        },
      ],
    };

    return {
      columns,
      row,
      expanded,
      goStep,
      calendarOptions,
      description,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style>
/* Estilos específicos do componente aqui */
:root {
  --fc-page-bg-color: dark;
}
</style>
