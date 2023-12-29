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
              stack-label
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
              stack-label
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
          </div>
        </div>
        <div class="row justify-end text-white text-end">
          <div class="col-md-6 col-sm-12">
            <span class="text-secondary text-hover" style="margin-left: 5rem"
              >Esqueci minha senha</span
            >
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
            <p>© {{ registerData }} Strategy Analytics</p>
          </div>
        </div>
      </q-form>
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from "vue";
import LogoSmall from "../components/LogoSmall.vue";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  components: { LogoSmall },
  setup() {
    const registerData = new Date().getFullYear();
    const useStore = useUserStore();
    const router = useRouter();
    const personRef = ref(null);
    const passwordRef = ref(null);

    const $q = useQuasar();
    const { login } = storeToRefs(useStore);
    const onSubmit = () => {
      personRef.value.validate();
      passwordRef.value.validate();
      if (!personRef.value.hasError || !passwordRef.value.hasError) {
        $q.notify({
          icon: "done",
          color: "positive",
          message: "Tudo certo, vamos ao sistema!",
        });

        setTimeout(() => {
          console.log("olá");
          router.push("/system/");
        }, 1000);
      }
    };

    return {
      login,
      onSubmit,
      isPwd: ref(true),
      registerData,
      personRef,
      passwordRef,
    };
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
