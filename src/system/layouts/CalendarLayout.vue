<template>
  <div class="CalendarLayout">
    <div class="row justify-center items-center">
      <div class="col-12 text-center">
        <titleinter-medium text="Calendário Strategy Analytics" />
      </div>
    </div>
    <div class="row justify-center q-ma-xl items-center">
      <div class="col"></div>
      <div class="col-12 col-md-7">
        <q-date
          class="control-calendar bg-transparent"
          today-btn
          flat
          no-unset
          v-model="date"
          :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'orange')"
          :locale="brLocale"
          disable
          readonly
        />
      </div>
      <div class="col self-center">
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Distribuição de lucros</q-item-label>
            <q-item-label caption lines="2"
              >Data atual:
              <span class="text-weight-bolder text-dark">1° Dia útil</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <div class="row justify-center q-pa-lg text-center">
      <div class="col-md-3 col-6" v-for="link in links" :key="link">
        <q-btn
          outline
          no-caps
          rounded
          flat
          @click.prevent="goStep(link.value)"
          class="border-btn"
          :label="link.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
import { useLayoutStore } from "../../stores/layout";
import useConfigdate from "../../composables/useConfigdate";
// import CalendarCurrent from "../components/calendar/CalendarCurrent.vue";

export default defineComponent({
  name: "CalendarLayout",
  components: { TitleinterMedium },
  setup() {
    const layoutStore = useLayoutStore();
    const { brLocale, monthNow, yearNow } = useConfigdate();
    const goStep = (value) => {
      layoutStore.updateCalendarsteps(value);
    };
    const links = [
      { name: "Ver tudo", value: "all" },
      { name: "Alterar data rendimento", value: "edit" },
      { name: "Antecipar", value: "anticipate" },
    ];
    const day = "01";
    const completedDate = `${yearNow}/${monthNow()}/${day}`;
    // const date = ref("2024/01/23");
    const date = ref(completedDate);
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
    return { date, attrs, links, brLocale, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.control-calendar {
  height: 500px;
}
.q-date {
  width: auto !important;
}
</style>
