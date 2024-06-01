<template>
  <div class="FirstStep">
    <div class="row">
      <div class="col-md-3 col-10 self-center">
        <q-btn
          no-caps
          outline
          color="white"
          :to="{ name: 'login' }"
          icon="fa-solid fa-arrow-left"
        />
      </div>
    </div>
    <q-form @submit.prevent.stop="onSubmit">
      <div class="row justify-center text-white">
        <!-- <div class="col-md-4 col-sm-10 self-center"> -->
        <q-input
          v-bind="{ ...$inputStyle }"
          v-model.lazy="register.FirstName"
          label="Nome *"
          :rules="nameRule"
          ref="nameRef"
          :loading="loading"
          :disable="loading"
          class="col-6 col-md-3 col-sm-6"
        />
        <q-input
          v-bind="{ ...$inputStyle }"
          v-model="register.lastName"
          label="Sobrenome *"
          :rules="nameRule"
          ref="lastnameRef"
          :loading="loading"
          :disable="loading"
          class="col-6 col-md-3 col-sm-6"
        />
        <q-input
          v-model="register.person"
          v-bind="{ ...$inputStyle }"
          mask="###.###.###-##"
          label="CPF *"
          :rules="personRule"
          ref="personRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-10"
        />
        <!-- </div> -->
      </div>
      <div class="row justify-center q-gutter-sm q-my-lg">
        <q-input
          v-model="register.email"
          v-bind="{ ...$inputStyle }"
          label="Email *"
          type="email"
          ref="emailRef"
          :loading="loading"
          :disable="loading"
          class="col-10 col-md-3 col-sm-10"
          :rules="emailRule"
        />

        <q-input
          v-bind="{ ...$inputStyle }"
          navigation-min-year-month="1990/07"
          ref="birthdayRef"
          v-model="register.birthday"
          :loading="loading"
          :disable="loading"
          type="date"
          :rules="requiredRole"
          label="Data de Nascimento"
          class="col-md-3 col-10 text-white"
        />
      </div>
      <div class="row justify-center">
        <q-input
          v-model="register.phone"
          v-bind="{ ...$inputStyle }"
          label="Celular de contato *"
          :rules="phoneRole"
          mask="(##) # ####-####"
          ref="phoneRef"
          :loading="loading"
          :disable="loading"
          class="col-md-3 col-10"
        />
      </div>

      <div class="row justify-center text-white text-center text-bolder">
        <div class="col-md-12 self-center q-mt-lg">
          <q-btn
            color="secondary"
            padding="0.5rem 3rem"
            text-
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
        <!-- <div class="col-12 copy">
          <register-data />
        </div> -->
      </div>
    </q-form>
    <q-inner-loading
      dark
      :showing="loading"
      label="Por favor, aguarde..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "src/stores/user";
import useRoles from "src/composables/system/useRoles";
import useRefForm from "src/composables/system/Requests/useRefForm";
import useRegister from "src/composables/system/Requests/useRegister";
import useNotify from "src/composables/useNotify";

export default defineComponent({
  name: "FirstStep",
  emits: ["step-current"],
  setup(props, ctx) {
    const {
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      phoneRef,
      telephoneRef,
      optionGenre,
      validateDataErrorMsg,
      validateDataInitial,
    } = useRefForm();
    const isPwd = ref(false);
    const { personRule, nameRule, emailRule, requiredRole, phoneRole } =
      useRoles();
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const { infoNotify } = useNotify();
    const { validateCPF, statusPerson, loading } = useRegister();
    const onSubmit = async () => {
      validateDataInitial();
      if (validateDataErrorMsg()) {
        infoNotify("Esta esquecendo de preenche algum campo");
        return;
      }
      try {
        await validateCPF(
          register.value.person,
          register.value.email,
          register.value.birthday
        );
      } catch (e) {
        console.log(e);
      } finally {
        if (statusPerson.value) ctx.emit("step-current", 2);
        console.log("Aqui os dados->", statusPerson.value);
      }
    };

    return {
      register,
      loading,
      isPwd,
      personRule,
      nameRef,
      lastnameRef,
      emailRef,
      birthdayRef,
      personRef,
      phoneRef,
      telephoneRef,
      optionGenre,
      onSubmit,
      nameRule,
      emailRule,
      requiredRole,
      phoneRole,
    };
  },
});
</script>
