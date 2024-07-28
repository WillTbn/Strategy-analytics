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
          <header-auth :text="text" styleNew="height:18vh" />
          <p class="text-h5">
            Seja bem-vindo à nossa plataforma!
            <!-- Olá, seja bem vindo
            <span class="text-weight-bolder"> {{ data.name }}!</span> -->
          </p>
          <p class="text-subtitle2">
            Para finalizar o seu cadastro, solicitamos que você confirme seu
            endereço de e-mail ( <b>{{ data.email }}</b> ) Um código de
            verificação foi enviado para a sua caixa de entrada.
          </p>
          <p>
            Falta um passo para está utilizando nossa plataforma. Enviamos para
            seu email.
          </p>
          <p class="text-weight-light text-caption text-secondary">
            Por favor, verifique também a caixa de spam, caso não o encontre na
            caixa de entrada.
            <q-icon
              color="yellow-14"
              name="fa-solid fa-face-smile-wink"
            ></q-icon>
          </p>
          <p>
            Digite o código recebido no campo indicado para concluir o processo
            de autenticação.
          </p>
          <div class=""></div>
          <div class="row text-center justify-center">
            <div class="col-4">
              <input
                type="text"
                name="code"
                v-model="AuthCode.code"
                maxlength="5"
                autofocus
                class="code text-indigo-14"
                :disabled="loading"
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
    <div class="row justify-center text-center" style="height: 15vh">
      <div class="col-12"></div>
      <div class="col-12 self-center"></div>
    </div>
    <div class="row justify-end text-end">
      <div class="col-8 col-md-6 col-sm-12"></div>
    </div>
    <div class="row justify-center text-center q-mt-lg">
      <div class="col-12">
        <resendauth-email :email="data.email" />
      </div>
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
    const onEmail = async () => {
      await authEmail();
    };
    const text = ref(`E aí, ${data.value.name}`);
    return { text, AuthCode, data, onEmail, loading };
  },
});
</script>
<style scoped>
.code,
input[name="code"] {
  /* display: block;
  padding: 2px;
  border: none;
  width: calc(5 * (1ch + 0.5ch));
  background: repeating-linear-gradient(
      90deg,
      rgb(237, 235, 235) 0,
      rgb(248, 246, 246) 1ch,
      transparent 0,
      transparent 1.5ch
    )
    0 100% / calc(5 * (1ch + 0.5ch) - 0.5ch) 2px no-repeat;
  font: 5ch;
  letter-spacing: 0.5ch;
  font-size: xxx-large; */
  /* margin-left: 6vh;
  height: 6vh;
  padding: 0px 0px; */
  border: none;
  width: calc(5 * (1ch + 1ch));
  background: repeating-linear-gradient(
      90deg,
      rgb(237, 235, 235) 0,
      rgb(248, 246, 246) 1ch,
      transparent 0,
      transparent -14.5ch
    )
    0 100% / calc(5 * (1ch + 0.5ch) - 0.5ch) 2px no-repeat;
  font: 5ch;
  letter-spacing: 1rem;
  font-size: xxx-large;
}
input[name="code"]:focus {
  outline: none;
}
</style>
