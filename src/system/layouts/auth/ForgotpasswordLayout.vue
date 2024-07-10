<template>
  <div class="ForgotpasswordLayout text-white">
    <q-form
      @submit.prevent.stop="onSubmit"
      class="row justify-center items-center content-center text-center"
      style="height: 70vh"
      v-if="statusAction == 'initial'"
    >
      <div class="col-12 q-my-xl">
        <span class="text-weight-bolder">
          Iremos enviar instruições para seu e-mail, para recuperar sua senha.
        </span>
        <p class="text-weight-light text-caption text-secondary">
          Lembra-se de verificar a caixa de SPAM.
          <q-icon color="yellow-14" name="fa-solid fa-face-smile-wink"></q-icon>
        </p>
      </div>
      <div class="col-12">
        <div class="row justify-center text-white">
          <div class="col-md-4 col-sm-10 self-center">
            <q-input
              v-model="user.person"
              input-class="text-white"
              label-color="white"
              color="white"
              item-aligned
              mask="###.###.###-##"
              label="CPF ou CNPJ"
              :rules="personRule"
              ref="personRef"
            />
          </div>
        </div>

        <div class="row justify-center text-white text-center text-bolder">
          <div class="col-md-12 self-center q-mt-lg">
            <q-btn
              color="secondary"
              padding="0.5rem 3rem"
              text-color="white"
              label="Enviar"
              type="submit"
              :disabled="loading"
              :loading="loading"
            >
              <template v-slot:loading>
                <q-spinner-pie size="3em" />
              </template>
            </q-btn>
          </div>
        </div>
      </div>
    </q-form>
    <div
      class="row text-center justify-center items-center content-center"
      v-if="statusAction == 'finally'"
      style="height: 70vh"
    >
      <div class="col-12">
        <p class="text-h4 text-weight-bolder">
          Tudo certo, enviamos o e-mail, com o link para troca sua senha!
        </p>
        <q-icon color="white-14" name="fa-solid fa-wind" size="1.2rem"></q-icon>
        <q-icon
          color="white-14"
          name="fa-solid fa-truck-fast"
          size="1.2rem"
          class="q-mx-sm"
        ></q-icon>
        <q-icon
          color="white-14"
          name="fa-solid fa-envelope"
          size="1.2rem"
        ></q-icon>
      </div>
      <div class="col-12">
        <p class="text-h5 text-weight-bolder">
          Não deve leva mais que 2 minutos, para chegar até sua caixa de e-mail.
        </p>
        <p class="text-weight-light text-caption text-secondary">
          Lembra-se de verificar a caixa de SPAM.
          <q-icon color="yellow-14" name="fa-solid fa-face-smile-wink"></q-icon>
        </p>
      </div>
    </div>
    <div class="row justify-center text-center">
      <div class="col-12">
        <p
          class="text-hover text-weight-bolder"
          @click="backLogin"
          v-if="statusAction == 'initial'"
        >
          <span class="text-primary forgot"> Clique aqui</span>
          <span class="forgot"
            >, se lembrou da senha ou quer volta para Tela de login.</span
          >
        </p>
      </div>
      <div class="col-12">
        <header-auth text="" styleNew="height: 10vh" />
      </div>
    </div>
  </div>
</template>

<script>
import useToken from "src/composables/system/Requests/useToken";
import useRoles from "src/composables/system/useRoles";
// import RegisterData from "src/system/components/RegisterData.vue";
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ForgotpasswordLayout",
  components: {
    HeaderAuth,
    // RegisterData,
  },
  emits: ["status-login"],
  setup(props, ctx) {
    const { personRef, personRule } = useRoles();
    const { forgotPassword, loading, forgot } = useToken();
    const statusAction = ref("initial");
    const user = ref({
      person: "",
    });
    const onSubmit = async () => {
      try {
        await forgotPassword(user.value);
        if (forgot.value) statusAction.value = "finally";
      } catch (e) {
        console.log(e);
      }
    };
    const backLogin = () => {
      ctx.emit("status-login", "login");
    };
    return {
      onSubmit,
      forgotPassword,
      loading,
      user,
      personRule,
      personRef,
      statusAction,
      backLogin,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
