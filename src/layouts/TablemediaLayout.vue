<template>
  <div class="TablemediaLayout">
    <table-personal :rows="tableRow" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TablePersonal from "../components/TablePersonal.vue";
export default defineComponent({
  name: "TablemediaLayout",
  components: { TablePersonal },
  props: { tableRow: { type: Array } },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.my-special {
  font-size: 15px;

  font-weight: 400;
  line-height: 102.945%; /* 46.325px */
}
</style>
