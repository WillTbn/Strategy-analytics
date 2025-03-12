<template>
  <q-layout class="RegisterPage">
    <q-layout class="bg-simulator">
      <q-page-container>
        <register-layout />
      </q-page-container>
    </q-layout>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import useAuth from "../../composables/system/useAuth";
import RegisterLayout from "../layouts/auth/RegisterLayout.vue";
// const { loading } = useAuth();
const loading = ref(true);
</script>
<style>
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: aliceblue !important;
}
/* Estilos específicos do componente aqui */
</style>
