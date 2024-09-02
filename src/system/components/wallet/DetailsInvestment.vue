<template>
  <q-list bordered padding class="rounded-borders" style="max-width: 350px">
    <q-item-label header>{{ details.name }}</q-item-label>

    <q-item v-ripple>
      <q-item-section avatar top>
        <q-avatar color="warning" text-color="white" />
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">Ganhos mensal</q-item-label>
        <q-item-label caption>{{ details.monthly_estimate }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-ripple>
      <q-item-section avatar top>
        <q-avatar color="positive" text-color="white" />
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">Ganhos Anual</q-item-label>
        <q-item-label caption>{{ details.annual_estimate }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-ripple>
      <q-item-section>
        <q-item-label lines="1">Tipo</q-item-label>
        <q-item-label caption>{{ details.type }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailsInvestment",
  props: {
    details: { type: Object },
  },
  setup(props) {
    return {};
  },
});
</script>
<style lang=""></style>
