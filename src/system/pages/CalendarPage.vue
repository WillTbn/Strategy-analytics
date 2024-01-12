<template>
  <div class="CalendarPage">
    <q-tab-panels v-model="calendarSteps" animated class="bg-transparent">
      <q-tab-panel name="home">
        <calendar-layout></calendar-layout>
      </q-tab-panel>

      <q-tab-panel name="all">
        <calendarall-layout />
      </q-tab-panel>

      <q-tab-panel name="anticipate">
        <calendaranticipate-layout />
      </q-tab-panel>
      <q-tab-panel name="edit">
        <editcalendar-layout />
      </q-tab-panel>
      <q-tab-panel name="finally">
        <request-analysis />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "../../stores/layout";
import CalendarLayout from "../layouts/CalendarLayout.vue";
import EditcalendarLayout from "../layouts/EditcalendarLayout.vue";
import CalendarallLayout from "../layouts/CalendarallLayout.vue";
import RequestAnalysis from "../layouts/RequestAnalysis.vue";
import CalendaranticipateLayout from "../layouts/CalendaranticipateLayout.vue";
import { defineComponent, ref } from "vue";

// import TitleinterMedium from "../components/TitleinterMedium.vue";
export default defineComponent({
  name: "CalendarPage",
  components: {
    CalendarLayout,
    EditcalendarLayout,
    CalendarallLayout,
    RequestAnalysis,
    CalendaranticipateLayout,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const { calendarSteps } = storeToRefs(layoutStore);

    const steps = ref("home");
    const links = [
      { name: "Ver tudo", route: "/system/calendar/all" },
      { name: "Alterar data rendimento", route: "/system/calendar/edit" },
      { name: "Antecipar", route: "/system" },
    ];

    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth();
    // const getUtilDay =
    const attrs = ref([
      {
        highlight: true,
        key: "today",
        dates: {
          start: new Date(yearNow, monthNow, 1),
          repeat: {
            every: "month",
            days: 1,
          },
        },
      },
    ]);
    return { attrs, links, steps, calendarSteps };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
