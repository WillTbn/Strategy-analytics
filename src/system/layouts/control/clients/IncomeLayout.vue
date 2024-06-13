<template>
  <q-card class="IncomeLayout">
    <q-card-section>
      <header-card :titleCard="'Adicionar rendimentos para ' + user.name" />
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import HeaderCard from "src/system/components/cardDialog/HeaderCard.vue";
export default defineComponent({
  name: "IncomeLayout",
  components: { HeaderCard },
  props: {
    user: { type: Object },
  },
  setup(props) {
    return {};
  },
});
</script>
<style lang=""></style>
