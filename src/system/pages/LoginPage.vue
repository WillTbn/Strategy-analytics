<template>
  <q-layout class="bg-simulator">
    <q-page-container>
      <login-layout v-if="stateLogin == 'login'" />
      <validatetoken-layout
        v-else-if="stateLogin == 'validateToken'"
        @status-login="stateLogin = $event"
      />
    </q-page-container>
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </q-layout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import LoginLayout from "../layouts/auth/LoginLayout.vue";
import ValidatetokenLayout from "../layouts/auth/ValidatetokenLayout.vue";
import useAuth from "../../composables/system/useAuth";
import { useRoute } from "vue-router";

const route = useRoute();
const stateLogin = ref("login");
const { loading } = useAuth();
onMounted(() => {
  if (route.query.token) {
    stateLogin.value = "validateToken";
  }
});
</script>
<style scoped></style>
