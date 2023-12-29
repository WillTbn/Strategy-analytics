<template>
  <div class="CalendarLayout">
    <div class="row text-center">
      <div class="col-12">
        <textinter-normal text="Calendário Strategy Analytics" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";
export default defineComponent({
  name: "CalendarLayout",
  components: { TextinterNormal },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
