<template>
  <div class="ReportView">
    <q-page-container padding>
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="route.name"></component>
      </router-view>
    </q-page-container>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped>
/* Estilos específicos do componente aqui */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 355ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
