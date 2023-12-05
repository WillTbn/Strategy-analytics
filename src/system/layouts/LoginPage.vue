<template>
  <q-layout class="bg-simulator">
    <q-page-container>
      <div
        class="justify-center text-white row items-center content-center"
        style="height: 50vh"
      >
        <div class="col-2 self-center q-my-lg">
          <logo-small />
        </div>
        <div class="col-12 text-center self-center">
          <span class="text-h3 text-weight-bold">Acesse sua conta</span>
        </div>
      </div>
      <q-form ref="LoginRef" class="">
        <div class="row justify-center text-white">
          <div class="col-4 self-center">
            <q-input
              v-model="dataLogin.person"
              label="CPF ou CNPJ"
              input-class="white"
              label-color="white"
              item-aligned
            ></q-input>
            <!-- </div> -->
            <!-- <div class="col-6 self-center"> -->
            <q-input
              v-model="dataLogin.password"
              label="Senha"
              input-class="white"
              label-color="white"
              item-aligned
              type="password"
            ></q-input>
          </div>
        </div>
        <div class="row justify-center text-white">
          <div class="col-2 self-center">
            <q-btn
              type="submit"
              label="continuar"
              color="secondary"
              class="q-mt-lg text-weight-bold"
            />
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

    return { dataLogin, LoginRef };
  },
});
</script>
