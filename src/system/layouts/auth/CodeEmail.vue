<template>
  <div class="CodeEmail">
    <q-inner-loading
      :showing="!data"
      label-class="text-teal"
      label-style="font-size: 1.1em"
      v-if="loading"
    />
    <div class="row justify-center text-white">
      <header-auth :text="text" styleNew="height:25vh" />
      <div class="col-10 col-sm-12 col-md-10"></div>
    </div>
    <div class="row justify-center text-center text-white">
      <div class="col-12">
        <p class="text-h5">
          Olá, seja bem vindo
          <span class="text-weight-bolder"> {{ data.name }}!</span>
        </p>
        <p class="text-subtitle2">
          Falta um passo para está utilizando nossa plataforma. Enviamos para
          seu email ( <b>{{ data.email }}</b> ).
        </p>
        <p class="text-weight-light text-caption text-secondary">
          Lembra-se de verificar a caixa de SPAM.
          <q-icon color="yellow-14" name="fa-solid fa-face-smile-wink"></q-icon>
        </p>
      </div>
    </div>
    <div class="row justify-center text-center" style="height: 15vh">
      <div class="col-12">
        Dígite o código que contém nele para fazer autentificação.
      </div>
      <div class="col-12 self-center">
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
    </div>
    <div class="row justify-end text-end">
      <div class="col-8 col-md-6 col-sm-12">
        <q-btn
          color="green-14"
          @click.prevent="onEmail"
          label="enviar codigo"
        />
      </div>
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
    // verifyemail
    const text = ref("Só falta você válida seu email.");
    const AuthCode = ref({});
    const userStore = useUserStore();
    const { data } = storeToRefs(userStore);
    const { loading, authEmail } = useToken();
    const onEmail = async () => {
      await authEmail();
    };
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
  margin-left: 6vh;
  height: 6vh;
  padding: 0px 0px;
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
