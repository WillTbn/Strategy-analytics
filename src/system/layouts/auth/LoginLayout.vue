<template>
  <header-auth text="Acesse sua conta" />
  <q-form @submit.prevent.stop="onSubmit">
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
        <p class="text-hover text-weight-bolder q-pa-lg">Esqueceu sua senha?</p>
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
        <register-data />
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useUserStore } from "../../../stores/user";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
// import useLogin from "../../composables/useLogin";
import useAuth from "../../../composables/system/useAuth";
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import RegisterData from "src/system/components/RegisterData.vue";

export default defineComponent({
  name: "LoginLayout",
  components: {
    HeaderAuth,
    RegisterData,
  },
  setup() {
    const useStore = useUserStore();
    const personRef = ref(null);
    const passwordRef = ref(null);
    const { auth, errors, loading } = useAuth();
    // const isValidperson = computed(() => errors.person.length > 0);
    const { login } = storeToRefs(useStore);
    const route = useRoute();
    const onSubmit = () => {
      personRef.value.validate();
      passwordRef.value.validate();
      if (!personRef.value.hasError || !passwordRef.value.hasError) {
        auth(login.value);
      }
    };
    const isPwd = ref(true);
    onMounted(() => {});
    return {
      personRef,
      passwordRef,
      loading,
      login,
      isPwd,
      onSubmit,
      auth,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
