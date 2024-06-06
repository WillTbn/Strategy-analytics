<template>
  <q-layout class="bg-simulator">
    <q-page-container>
      <login-layout
        v-if="stateLogin == 'login'"
        @status-login="stateLogin = $event"
      />
      <validatetoken-layout
        v-else-if="stateLogin == 'validateToken'"
        @status-login="stateLogin = $event"
      />
      <forgotpassword-layout
        v-else-if="stateLogin == 'ForgotPassword'"
        @status-login="stateLogin = $event"
      />
      <resetpassword-layout
        v-else-if="stateLogin == 'resetPassword'"
        @status-login="stateLogin = $event"
      />
    </q-page-container>
    <q-inner-loading
      :showing="loading"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
    <footer-system />
  </q-layout>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LoginLayout from "../layouts/auth/LoginLayout.vue";
import ValidatetokenLayout from "../layouts/auth/ValidatetokenLayout.vue";
import ForgotpasswordLayout from "../layouts/auth/ForgotpasswordLayout.vue";
import ResetpasswordLayout from "../layouts/auth/ResetpasswordLayout.vue";
import useAuth from "../../composables/system/useAuth";
import FooterSystem from "../components/FooterSystem.vue";

const route = useRoute();
const stateLogin = ref("login");
const { loading } = useAuth();
onMounted(() => {
  if (route.query.token) {
    stateLogin.value = "validateToken";
  }
  if (route.query.tokenRemenber) {
    stateLogin.value = "resetPassword";
  }
});
</script>
<style>
.forgot {
  cursor: pointer;
  transition: all 5s;
}
.forgot:hover {
  text-decoration: underline;
}
</style>
