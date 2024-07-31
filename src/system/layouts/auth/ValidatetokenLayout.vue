<template>
  <div class="ValidatetokenLayout">
    <q-form @submit.prevent.stop="onSubmit">
      <div class="row justify-center text-white">
        <div class="col-md-4 col-sm-10 self-center">
          <div class="column q-gutter-sm">
            <header-auth
              text="Confirme seu dados e crie sua nova senha"
              styleNew="10vh"
            />
            <label-field labelInput="CPF ou CNPJ">
              <q-input
                v-model="authentication.person"
                mask="###.###.###-##"
                :rules="personRule"
                ref="personRef"
                name="new-person"
                v-bind="{ ...$inputStyle }"
              />
            </label-field>
            <label-field labelInput="Senha nova">
              <q-input
                v-model="authentication.password"
                :type="isPwd ? 'password' : 'text'"
                :rules="[(val) => !!val || 'Campo não atende os requisitos.']"
                ref="passwordRef"
                v-bind="{ ...$inputStyle }"
                name="new-password"
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
            </label-field>
            <div class="row">
              <itens-password
                v-for="(item, index) in fiedValidate"
                :text="item.name"
                :status="item.status"
                :key="index"
              />
            </div>

            <label-field labelInput="Confirma senha">
              <q-input
                v-model="authentication.password_confirm"
                :type="isPwd ? 'password' : 'text'"
                :rules="passwordConfirmRule"
                v-bind="{ ...$inputStyle }"
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
            </label-field>
          </div>
          <div class="row q-mt-lg">
            <q-btn
              color="primary"
              text-color="white"
              label="Continuar"
              type="submit"
              :disabled="loading"
              :loading="loading"
              class="text-weight-bolder col-12 q-pa-md"
              no-caps
              style="border-radius: 8px"
            />
          </div>
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
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";

import useToken from "src/composables/system/Requests/useToken";
import useRoles from "src/composables/system/useRoles";
import useNotify from "src/composables/useNotify";

import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import ItensPassword from "src/system/components/auth/ItensPassword.vue";
// import RegisterData from "src/system/components/RegisterData.vue";
import LabelField from "src/system/components/form/LabelField.vue";

export default defineComponent({
  name: "ValidatetokenLayout",
  components: {
    HeaderAuth,
    // RegisterData,
    ItensPassword,
    LabelField,
  },
  emits: ["status-login"],
  setup(props, ctx) {
    const route = useRoute();
    const useStore = useUserStore();
    const { authentication } = storeToRefs(useStore);
    const { checkingToken, loading, tokenStatus } = useToken();
    const { errorNotify } = useNotify();
    const passwordRef = ref(null);
    const passwordConfirmRef = ref(null);
    const { fiedValidate, passwordConfirmRule, personRule } = useRoles();
    const isPwd = ref(true);

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
      await checkingToken(authentication.value);
      ctx.emit("status-login", tokenStatus.value);
    };
    onMounted(async () => {
      authentication.value.token = route.query.token;
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
