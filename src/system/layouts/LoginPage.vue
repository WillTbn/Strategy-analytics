<template>
  <q-layout class="bg-simulator">
    <q-page-container>
      <div
        class="justify-center text-white row items-center content-center text-center"
        style="height: 50vh"
      >
        <div class="col-md-12 self-center q-my-lg">
          <logo-small />
        </div>
        <div class="col-md-12 col-sm-6 self-center">
          <span class="text-h3 text-weight-bold">Acesse sua conta</span>
        </div>
      </div>
      <q-form ref="LoginRef" class="">
        <div class="row justify-center text-white">
          <div class="col-md-4 col-sm-10 self-center">
            <!-- <q-input
              v-model="dataLogin.person"
              label="CPF ou CNPJ"
              input-class="white"
              label-color="white"
              item-aligned
              mask="###.###.###-##"
            ></q-input> -->
            <!-- </div> -->
            <!-- <div class="col-6 self-center"> -->

            <q-input
              v-model="dataLogin.person"
              input-class="text-white"
              label-color="white"
              color="white"
              item-aligned
              mask="###.###.###-##"
              label="CPF ou CNPJ"
              stack-label
            />
            <q-input
              v-model="dataLogin.password"
              label="Senha"
              input-class="text-white"
              label-color="white"
              color="white"
              item-aligned
              stack-label
              :type="isPwd ? 'password' : 'text'"
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
          </div>
        </div>
        <div class="row justify-end text-white text-end">
          <div class="col-md-5" style="margin-left;: 5rem">
            <span class="text-secondary text-hover">Esqueci minha senha</span>
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
            />
          </div>
          <div class="col-12 copy">
            <p>© 2023 Strategy Analytics</p>
          </div>
        </div>
      </q-form>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LogoSmall from "../components/LogoSmall.vue";

export default defineComponent({
  name: "LoginPage",
  components: { LogoSmall },
  setup() {
    const dataLogin = ref({
      person: "",
      password: "",
    });
    const LoginRef = ref(null);

    return { dataLogin, LoginRef, isPwd: ref(true) };
  },
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
