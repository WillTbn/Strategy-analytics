<template>
  <q-layout class="bg-simulator">
    <q-page-container>
      <div
        class="justify-center text-white row items-center content-center text-center"
        style="height: 40vh"
      >
        <div class="col-md-12 self-center">
          <logo-small />
        </div>
        <div class="col-md-12 col-sm-6 self-center">
          <span class="text-h3 text-weight-bold">Acesse sua conta</span>
        </div>
      </div>
      <q-form @submit.prevent.stop="onSubmit" class="">
        <div class="row justify-center text-white">
          <div class="col-md-4 col-sm-10 self-center">
            <q-input
              v-model="login.person"
              input-class="text-white"
              label-color="white"
              color="white"
              item-aligned
              mask="###.###.###-##"
              label="CPF ou CNPJ"
              :rules="[(val) => !!val || 'Campo obrigatório']"
              ref="personRef"
            />
            <q-input
              v-model="login.password"
              label="Senha"
              input-class="text-white"
              label-color="white"
              color="white"
              item-aligned
              :type="isPwd ? 'password' : 'text'"
              :rules="[(val) => !!val || 'Campo obrigatório']"
              ref="passwordRef"
            >
              <template v-slot:append>
                <q-icon
                  color="secondary"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <p class="text-hover text-weight-bolder q-pa-lg">
              Esqueceu sua senha?
            </p>
          </div>
        </div>

        <div class="row justify-center text-white text-center text-bolder">
          <div class="col-md-12 self-center q-mt-lg">
            <q-btn
              color="secondary"
              padding="0.5rem 3rem"
              text-color="white"
              label="continuar"
              type="submit"
              :disabled="loading"
              :loading="loading"
            >
              <template v-slot:loading>
                <q-spinner-pie size="3em" />
              </template>
            </q-btn>
          </div>
          <div class="col-12 copy">
            <p>© {{ registerData }} Strategy Analytics</p>
          </div>
        </div>
      </q-form>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import LogoSmall from "../components/LogoSmall.vue";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
// import useLogin from "../../composables/useLogin";
import useAuth from "../../composables/system/useAuth";

const registerData = new Date().getFullYear();
const useStore = useUserStore();
const personRef = ref(null);
const passwordRef = ref(null);
const { auth, errors, loading, verifyLogged } = useAuth();
// const isValidperson = computed(() => errors.person.length > 0);
const { login } = storeToRefs(useStore);
const onSubmit = () => {
  personRef.value.validate();
  passwordRef.value.validate();
  if (!personRef.value.hasError || !passwordRef.value.hasError) {
    auth(login.value);
  }
};
const isPwd = ref(true);
onMounted(() => {
  verifyLogged();
});
</script>
<style scoped>
.text-hover:hover {
  color: white !important;
  cursor: pointer;
}
.copy {
  margin-top: 5rem;
}
</style>
