<template>
  <div
    class="CodeEmail row justify-center items-center content-center"
    style="min-height: 90vh"
  >
    <q-inner-loading
      :showing="!data"
      label-class="text-teal"
      label-style="font-size: 1.1em"
      v-if="loading"
    />
    <div class="col-md-3 col-10 self-center">
      <div class="col-md-6 col-sm-8 self-center">
        <div class="column">
          <!-- <div class="row self-center"> -->
          <div class="col">
            <header-auth styleNew="height:15vh" text="Código de segurança" />
            <p class="text-caption text-secondary">
              Um código foi enviado ao seu e-mail cadastrado, informe-o para
              confirmar a redefinição de senha.
            </p>
          </div>
          <!-- </div> -->
          <div class="row">
            <div class="col-7">
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
              color="primary"
              text-color="white"
              label="Confirmar"
              class="text-weight-bolder col-6 q-pa-md q-mt-lg"
              no-caps
              style="border-radius: 8px"
              @click.prevent="onEmail"
              s
            />
          </div>
        </div>
        <div class="col-12 q-mt-lg">
          <resendauth-email :email="data.email" />
        </div>
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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CodeEmail",
  components: {
    HeaderAuth,
    ResendauthEmail,
  },
  setup(props, ctx) {
    const router = useRouter();
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
    onMounted(() => {
      if (data.value.email_verified_at) {
        router.push({ name: "inicio" });
      }
    });
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
