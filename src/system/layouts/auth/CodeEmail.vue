<template>
  <div class="CodeEmail column justify-center text-center" style="height: 100%">
    <q-inner-loading
      :showing="!data"
      label-class="text-teal"
      label-style="font-size: 1.1em"
      v-if="loading"
    />
    <div class="row justify-center align-center text-white">
      <div class="col-md-6 col-sm-8 self-center">
        <div class="column">
          <div class="row">
            <div class="col text-center">
              <header-auth styleNew="height:18vh" />
              <p class="text-h5">
                {{ text }}
              </p>
              <p class="text-h5">
                Seja bem-vindo à nossa plataforma!
                <!-- Olá, seja bem vindo
                <span class="text-weight-bolder"> {{ data.name }}!</span> -->
              </p>
              <p class="text-subtitle2">
                Falta um passo para está utilizando nossa plataforma. Enviamos
                para seu email ( <b>{{ data.email }}</b> ) código de primeiro
                acesso, digite-o abaixo:
              </p>
              <p class="text-weight-light text-caption text-secondary">
                Por favor, verifique também a caixa de spam, caso não o encontre
                na caixa de entrada.
                <q-icon
                  color="yellow-14"
                  name="fa-solid fa-face-smile-wink"
                ></q-icon>
              </p>
            </div>
          </div>
          <div class="row text-center justify-center text-center">
            <div class="col-6 col-md-4">
              <!-- <input
                type="text"
                name="code"
                v-model="AuthCode.code"
                maxlength="5"
                autofocus
                class="code text-indigo-14"
                :disabled="loading"
              /> -->
              <q-input
                v-model="AuthCode.code"
                maxlength="5"
                autofocus
                input-class="control-code-email"
              />
            </div>
            <div class="col-12"></div>
            <q-btn
              class="q-mt-lg"
              color="green-14"
              @click.prevent="onEmail"
              label="enviar codigo"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center text-center q-mt-lg">
      <div class="col-12">
        <resendauth-email :email="data.email" />
      </div>
    </div>
    <div class="absolute-right q-ma-lg">
      <q-btn
        color="red"
        icon="fa-solid fa-arrow-right-from-bracket"
        label="Sair"
        flat
        @click.prevent="setLogout"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import ResendauthEmail from "src/system/components/ResendauthEmail.vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import useToken from "src/composables/system/Requests/useToken";
import useAuth from "src/composables/system/useAuth";

export default defineComponent({
  name: "CodeEmail",
  components: {
    HeaderAuth,
    ResendauthEmail,
  },
  setup(props, ctx) {
    // verifyemail E aí, Teste Teste Teste!
    const AuthCode = ref({});
    const userStore = useUserStore();
    const { data } = storeToRefs(userStore);
    const { loading, authEmail } = useToken();
    const { setLogout } = useAuth();
    const onEmail = async () => {
      await authEmail();
    };
    const text = ref(`E aí, ${data.value.name}`);
    return { text, AuthCode, data, onEmail, loading, setLogout };
  },
});
</script>
<style>
.control-code-email {
  letter-spacing: 1.3rem !important;
  margin-inline: 0.5rem 0.1rem !important;
  text-align: center !important;
  font-size: xxx-large;
}
</style>
