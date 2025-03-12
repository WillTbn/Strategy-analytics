<template>
  <div class="ForgotpasswordLayout text-white">
    <q-form
      @submit.prevent.stop="onSubmit"
      class="row justify-center items-center content-center"
      v-if="statusAction == 'initial'"
    >
      <div class="col-md-3 col-10 self-center">
        <div class="col-12 q-my-lg">
          <span class="text-muted-register">
            Informe os dados da sua conta para redefir a senha.
          </span>
        </div>
        <div class="column">
          <label-field labelInput="CPF ou CNPJ">
            <q-input
              v-model="user.person"
              mask="###.###.###-##"
              :rules="personRule"
              ref="personRef"
              v-bind="{ ...$inputStyle }"
            />
          </label-field>
          <div class="row q-gutter-lg q-mt-lg">
            <q-btn
              text-color="white"
              label="Voltar"
              :disabled="loading"
              class="text-weight-bolder col q-pa-md q-mt-lg"
              no-caps
              outline
              style="
                border-radius: 8px;
                border: 1px solid #00a3ff;
                background: rgba(0, 0, 0, 0.2) !important;
              "
              @click="backLogin"
            />
            <q-btn
              color="primary"
              text-color="white"
              label="Enviar"
              type="submit"
              :disabled="loading"
              class="text-weight-bolder col q-pa-md q-mt-lg"
              no-caps
              style="border-radius: 8px"
            />
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
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import useToken from "src/composables/system/Requests/useToken";
import useRoles from "src/composables/system/useRoles";
// import RegisterData from "src/system/components/RegisterData.vue";
import LabelField from "src/system/components/form/LabelField.vue";

export default defineComponent({
  name: "ForgotpasswordLayout",
  components: {
    // RegisterData,
    LabelField,
  },
  emits: ["status-login", "status-email"],
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
        ctx.emit("status-email",true);
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
