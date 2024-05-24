<template>
  <div class="ResetpasswordLayout">
    <header-auth text="Confirme seu cpf e crie sua nova senha" />

    <q-form @submit.prevent.stop="onSubmit">
      <div class="row justify-center text-white">
        <div class="col-md-4 col-sm-10 self-center">
          <q-input
            v-model="authentication.person"
            input-class="text-white"
            label-color="white"
            color="white"
            item-aligned
            mask="###.###.###-##"
            label="CPF ou CNPJ"
            :rules="personRule"
            ref="personRef"
          />
          <q-input
            v-model="authentication.password"
            label="Senha"
            input-class="text-white"
            label-color="white"
            color="white"
            item-aligned
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => !!val || 'Campo não atende os requisitos.']"
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
          <div class="q-pa-sm q-mt-sm">
            <itens-password
              v-for="(item, index) in fiedValidate"
              :text="item.name"
              :status="item.status"
              :key="index"
            />
          </div>
          <q-input
            v-model="authentication.password_confirmation"
            label="Confirma senha"
            input-class="text-white"
            label-color="white"
            color="white"
            item-aligned
            :type="isPwd ? 'password' : 'text'"
            :rules="passwordConfirmRule"
            ref="passwordConfirmRef"
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
    <q-inner-loading
      :showing="loading"
      label="Por favor, aguarde..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useToken from "src/composables/system/Requests/useToken";
import useRoles from "src/composables/system/useRoles";
import useNotify from "src/composables/useNotify";
import ItensPassword from "src/system/components/auth/ItensPassword.vue";
import RegisterData from "src/system/components/RegisterData.vue";
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
export default defineComponent({
  name: "ResetpasswordLayout",
  components: {
    HeaderAuth,
    RegisterData,
    ItensPassword,
  },
  emits: ["status-login"],
  setup(props, ctx) {
    const route = useRoute();
    const useStore = useUserStore();
    const { authentication } = storeToRefs(useStore);
    const { passwordReset, loading, tokenStatus } = useToken();
    const { errorNotify } = useNotify();
    const { passwordRef, passwordConfirmRef, fiedValidate, personRule } =
      useRoles();
    const isPwd = ref(true);
    const passwordConfirmRule = [
      (value) => !!value || "Campo é obrigatorio",
      (value) =>
        value == authentication.value.password || "Senhas não conferem",
    ];

    // const verifyLength = computed(() => authentication.value.password.length);
    const verifyValue = computed(() => authentication.value.password);
    watch(verifyValue, (n, o) => {
      /\d/.test(n)
        ? (fiedValidate.value[3].status = true)
        : (fiedValidate.value[3].status = false);
      /[^\w\s]/.test(n)
        ? (fiedValidate.value[2].status = true)
        : (fiedValidate.value[2].status = false);
      /[A-Z]/.test(n)
        ? (fiedValidate.value[1].status = true)
        : (fiedValidate.value[1].status = false);
      /[a-z]/.test(n)
        ? (fiedValidate.value[0].status = true)
        : (fiedValidate.value[0].status = false);
      n.length > 8
        ? (fiedValidate.value[4].status = true)
        : (fiedValidate.value[4].status = false);
    });

    const onSubmit = async () => {
      const rulesDetect = fiedValidate.value.filter((e) => e.status == false);
      passwordRef.value.validate();
      passwordConfirmRef.value.validate();
      if (rulesDetect.length > 0) {
        errorNotify("Campo Senha não atende a os requisitos minímos.", 30000);
        return;
      }
      //ckePass##2
      await passwordReset(authentication.value);
      ctx.emit("status-login", tokenStatus.value);
    };
    onMounted(async () => {
      authentication.value.token = route.query.tokenRemenber;
    });
    return {
      loading,
      authentication,
      isPwd,
      onSubmit,
      passwordConfirmRule,
      fiedValidate,
      passwordRef,
      passwordConfirmRef,
      personRule,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
