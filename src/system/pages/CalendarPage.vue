<template>
  <div class="CalendarPage">
    <div class="row q-pa-lg justify-center items-center">
      <div class="col-12 text-center">
        <titleinter-medium text="Calendário Strategy Analytics" />
      </div>
      <div class="col-5">
        <VCalendar
          borderless
          color="blue"
          :attributes="attrs"
          expanded
          title="Calendario "
          nav-visibility="hover"
        />
      </div>
      <div class="col-4 self-center">
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
    <div class="row justify-center q-pa-lg">
      <div class="col-4" v-for="link in links" :key="link">
        <q-btn
          outline
          no-caps
          rounded
          color="primary"
          :label="link.name"
          :to="link.route"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
export default defineComponent({
  name: "CalendarPage",
  components: { TitleinterMedium },
  setup() {
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
    return { attrs, links };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
