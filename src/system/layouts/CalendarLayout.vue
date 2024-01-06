<template>
  <div class="CalendarLayout q-ma-xl">
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
          @click.prevent="goStep(link.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
import { useLayoutStore } from "../../stores/layout";
export default defineComponent({
  name: "CalendarLayout",
  components: { TitleinterMedium },
  setup() {
    const layoutStore = useLayoutStore();
    const goStep = (value) => {
      layoutStore.updateCalendarsteps(value);
    };
    const links = [
      { name: "Ver tudo", value: "all" },
      { name: "Alterar data rendimento", value: "edit" },
      { name: "Antecipar", value: "anticipate" },
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
    return { attrs, links, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
