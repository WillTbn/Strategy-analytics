<template>
  <div class="CalendarallPage">
    <div class="row justify-center">
      <div class="col-10">
        <VCalendar :columns="columns" expanded />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useScreens } from "vue-screen-utils";
export default defineComponent({
  name: "CalendarallPage",
  setup() {
    const { mapCurrent } = useScreens({
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    });
    const columns = mapCurrent({ lg: 4 }, 6);
    const expanded = mapCurrent({ lg: true }, true);
    return { columns, expanded };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
