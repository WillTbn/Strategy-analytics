<template>
  <div class="CalendarFull">
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
export default defineComponent({
  name: "CalendarFull",
  components: { FullCalendar },
  setup() {
    const calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      weekends: true,
      events: [
        {
          title: "Meeting",
          start: new Date(),
          display: "background",
          className: "fc-bg-event",
        },
      ],
      locale: "pt-br",
    };
    return { calendarOptions };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.fc-bg-event {
  background: red;
}
</style>
