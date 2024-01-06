<template>
  <div class="CalendarallLayout">
    <div class="row justify-center">
      <div class="col-10">
        <VCalendar :columns="columns" expanded />
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
export default defineComponent({
  name: "CalendarallLayout",
  setup() {
    const storeLayout = useLayoutStore();

    const { mapCurrent } = useScreens({
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    });
    const columns = mapCurrent({ lg: 4 }, 6);
    const expanded = mapCurrent({ lg: true }, true);
    const goStep = (value) => {
      storeLayout.updateCalendarsteps(value);
    };

    return { columns, expanded, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
