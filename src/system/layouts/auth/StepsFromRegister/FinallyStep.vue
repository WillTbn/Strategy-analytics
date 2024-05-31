<template>
  <div class="FinallyStep">
    <div class="row justify-center text-white">
      <q-form
        @submit.prevent.stop="onSubmit"
        class="col-md-4 col-sm-12 self-center"
      >
        <q-select
          ref="notificationsRef"
          v-model="register.notifications"
          transition-show="flip-up"
          transition-hide="flip-down"
          label="Receber notificações por e-mail*"
          hint="campo obrigatório"
          lazy-rules
          :options="optionNot"
          option-value="id"
          option-label="label"
          emit-value
          map-options
          class="col-3"
          :loading="loading"
          :disable="loading"
          v-bind="{ ...$inputStyle }"
        />
        <q-input
          v-model="register.password"
          label="Senha"
          v-bind="{ ...$inputStyle }"
          :type="isPwd ? 'password' : 'text'"
          :rules="[(val) => !!val || 'Campo não atende os requisitos.']"
          :loading="loading"
          :disable="loading"
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
          v-model="register.password_confirmation"
          label="Confirma senha"
          v-bind="{ ...$inputStyle }"
          :type="isPwd ? 'password' : 'text'"
          :rules="passwordConfirmRule"
          ref="passwordConfirmRef"
          :loading="loading"
          :disable="loading"
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

        <q-btn
          class="self-end q-mt-lg"
          color="secondary"
          padding="0.5rem 3rem"
          text-color="white"
          label="continuar"
          type="submit"
          :disabled="loading"
          :loading="loading"
        />
      </q-form>
    </div>
    <q-dialog
      v-model="dialogWelcome"
      backdrop-filter="blur(10px) saturate(250%)"
    >
      <welcome-msg />
    </q-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useRegister from "src/composables/system/Requests/useRegister";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useRoles from "src/composables/system/useRoles";
import useNotify from "src/composables/useNotify";
import ItensPassword from "src/system/components/auth/ItensPassword.vue";
import WelcomeMsg from "./WelcomeMsg.vue";
export default defineComponent({
  name: "FinallyStep",
  components: {
    ItensPassword,
    WelcomeMsg,
  },
  setup() {
    const { loading, registration, registrationStatus } = useRegister();
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const { infoNotify, errorNotify } = useNotify();
    const { optionNot } = useRefForm();
    const dialogWelcome = ref(false);

    const { fiedValidate, passwordConfirmRef, passwordRef, notificationsRef } =
      useRoles();
    const isPwd = ref(true);
    const passwordConfirmRule = [
      (value) => !!value || "Campo é obrigatorio",
      (value) => value == register.value.password || "Senhas não conferem",
    ];
    // const verifyLength = computed(() => authentication.value.password.length);
    const verifyValue = computed(() => register.value.password);

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

      register.value.name =
        register.value.FirstName + " " + register.value.lastName;
      try {
        await registration(register.value);
        // console.log("res aqui -> ", res);
        dialogWelcome.value = registrationStatus.value;
      } catch (e) {
        console.log(e);
      }
      console.log(register.value);
      //ckePass##2
      // await passwordReset(authentication.value);
      // ctx.emit("status-login", tokenStatus.value);
    };
    return {
      loading,
      optionNot,
      passwordConfirmRule,
      passwordConfirmRef,
      passwordRef,
      notificationsRef,
      isPwd,
      onSubmit,
      register,
      fiedValidate,
      registrationStatus,
      dialogWelcome,
    };
  },
});
</script>
<style></style>
